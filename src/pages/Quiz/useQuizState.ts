import { assign, Machine, MachineConfig, MachineOptions } from "xstate";
import { useMachine } from "@xstate/react";
import produce from "immer";

interface QuizContext {
  currentIndex: number;
  questions: Question[];
}

interface QuizStateSchema {
  states: {
    idle: {};
    empty: {};
    question: {
      states: {
        waiting: {};
        answering: {};
      };
    };
    end: {};
  };
}

type QuizEvent = { type: "BEGIN" } | { type: "ANSWER"; answer: string };

type QuizAnswerEvent = {
  type: string;
  answer: string;
};

interface Question {
  category: string;
  question: string;
  correct_answer: string;
  choices: string[];
  user_answer?: string;
}

/**
 * Options of the state machine that defines the state flow of the quiz.
 * Must be initialised with the questions pre-loaded.
 *
 * @param questions Questions to be loaded.
 */
const makeConfig = (
  questions: Question[]
): MachineConfig<QuizContext, QuizStateSchema, QuizEvent> => ({
  id: "quiz",
  initial: "idle",
  context: {
    questions,
    currentIndex: -1,
  },
  states: {
    idle: {
      always: [
        { target: "question", cond: "loadedQuestions" },
        { target: "empty", cond: "emptyQuestions" },
      ],
    },
    question: {
      id: "question",
      initial: "waiting",
      states: {
        waiting: {
          entry: "nextQuestion",
          after: {
            SHOW_ANSWERS_DELAY: "#question.answering",
          },
        },
        answering: {
          on: {
            ANSWER: [
              { target: "#question.waiting", cond: "hasMoreQuestions" },
              { target: "#end", cond: "finishedQuestions" },
            ],
          },
          exit: "storeAnswer",
        },
      },
    },
    empty: { type: "final" },
    end: { id: "end", type: "final" },
  },
  strict: true,
});

// Conditions for reusable guards
const loadedQuestions = (context: QuizContext) => context.questions.length > 0;
const hasMoreQuestions = (context: QuizContext) =>
  context.currentIndex + 1 < context.questions.length;

/**
 * Business logic executed in the state machine.
 * Defines actions and conditions to execute the state flow.
 */
const quizMachineOptions: MachineOptions<QuizContext, QuizEvent> = {
  actions: {
    nextQuestion: assign({
      currentIndex: (context) => context.currentIndex + 1,
    }),
    storeAnswer: assign({
      questions: (context, event) =>
        produce(context.questions, (draft) => {
          const answer = (event as QuizAnswerEvent).answer;
          draft[context.currentIndex].user_answer = answer;
        }),
    }),
  },
  activities: {},
  delays: {
    SHOW_ANSWERS_DELAY: 500,
  },
  guards: {
    loadedQuestions,
    emptyQuestions: (context) => !loadedQuestions(context),
    hasMoreQuestions,
    finishedQuestions: (context) => !hasMoreQuestions(context),
  },
  services: {},
};

/**
 * Creates a new state machine with the provided questions.
 *
 * @param questions Questions to pre-load on state machine.
 */
const makeQuizMachine = (questions: Question[]) => {
  const config = makeConfig(questions);
  const machine = Machine(config, quizMachineOptions);

  return machine;
};

/**
 * Hook that creates a new state machine with the provided questions.
 *
 * @param questions Questions to display in the quiz.
 */
const useQuizState = (questions: Question[]) =>
  useMachine(makeQuizMachine(questions));

export default useQuizState;
