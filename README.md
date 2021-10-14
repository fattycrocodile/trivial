# Trivia Challenge

![](public/snapshot.jpg)

## Installation

Installation steps:

```sh
git clone git@github.com:codinglittlecat/react-trivia.git
yarn
yarn start
```

## What I used

- tailwind css for styling.
- tailwind css for styling.
- unit test.
- cypress for e2e tesing.

## Project Structure

All context providers should be registered on `App.tsx` for consistency, while all routing should be setup on `Routes.tsx`. If we start adding several new routes, then we should reevaluate and think about creating modular route files.

Everything else should be structured in the following folders inside `src`:

- `components`: reusable components without any bindings with requests or business logic
- `pages`: containers used to connect `components` with `api` and business logic

### components

Reusable components without any bindings with network requests or business logic. For a larger project, we would split this folder into an extra library for the design system components, while leaving only application-specific components at this folder and composing them from the design system library.

### pages

Pages are components rendered into a route. They are always placed under a folder that may additionally include business logic and integration tests. They should always be built using these fundamental semantic components:

- `Layout`: defines whether the page uses the primary or secondary layout
- `Header`: defines the title displayed in the document title and at the top of the page, and also allows adding an image at the top of the page
- `Content`: defines the correct layout for placing content

We should never define any styles inside this folder because it would increase the cost and complexity of maintaining a consistent design system across the application. Instead, create new components in the `components` folder and use them inside `pages`.

It's ok to use the `Stack` component inside pages but use it sparingly. If you're using it often, try to create an abstraction on `components` that makes it simpler to write layouts. For example, take a look at how all the semantic components mentioned above have a `Stack` baked inside them - this makes the layouts consistent across all pages while keeping the API simple.

Business logic should almost always be placed inside a page folder, but never inside a page component. Move it to an external function that may or may not be a hook, as applicable. For a larger project, it could make sense to split all the business logic into an extra library to decouple it completely from the application and make it simpler to reuse it.

### utils

Tiny utility functions will be placed here. This folder should not be overused, ideally, we should have a small number of functions living here. Putting tens or hundreds of utilities would make it a hurdle to maintain potentially unused code. Use stable and well-tested third-party libraries when possible, always paying attention to bundle size and project maintainability.
