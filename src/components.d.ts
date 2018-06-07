/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface InnerComponent {

    }
  }

  interface HTMLInnerComponentElement extends StencilComponents.InnerComponent, HTMLStencilElement {}

  var HTMLInnerComponentElement: {
    prototype: HTMLInnerComponentElement;
    new (): HTMLInnerComponentElement;
  };
  interface HTMLElementTagNameMap {
    'inner-component': HTMLInnerComponentElement;
  }
  interface ElementTagNameMap {
    'inner-component': HTMLInnerComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'inner-component': JSXElements.InnerComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface InnerComponentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface OuterComponent {

    }
  }

  interface HTMLOuterComponentElement extends StencilComponents.OuterComponent, HTMLStencilElement {}

  var HTMLOuterComponentElement: {
    prototype: HTMLOuterComponentElement;
    new (): HTMLOuterComponentElement;
  };
  interface HTMLElementTagNameMap {
    'outer-component': HTMLOuterComponentElement;
  }
  interface ElementTagNameMap {
    'outer-component': HTMLOuterComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'outer-component': JSXElements.OuterComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface OuterComponentAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;