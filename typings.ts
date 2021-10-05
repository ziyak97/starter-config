// @ts-ignore
declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare namespace Cypress {
  interface Chainable {
    getElement(id: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<Element>;
  }
}
