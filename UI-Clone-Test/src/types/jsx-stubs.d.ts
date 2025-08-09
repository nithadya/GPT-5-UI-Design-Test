// Type stubs to satisfy the linter in this environment.
// Real types are provided by @types/react at build time.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "react/jsx-runtime" {
  export const Fragment: any;
  export function jsx(...args: any[]): any;
  export function jsxs(...args: any[]): any;
}

