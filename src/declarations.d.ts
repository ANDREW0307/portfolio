// src/declarations.d.ts or in your global type declaration file

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export = classes;
  }
  