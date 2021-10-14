type Style = string | boolean | undefined;

const classNames = (...classes: Style[]) => classes.filter(Boolean).join(" ");

export default classNames;
