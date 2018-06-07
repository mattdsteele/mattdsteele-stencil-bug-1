import { Component } from '@stencil/core';

@Component({
  tag: 'inner-component',
  shadow: true
})
export class InnerComponent {
  render() {
    return <slot />;
  }
}
