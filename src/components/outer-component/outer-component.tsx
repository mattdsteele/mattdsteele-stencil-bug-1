import { Component } from '@stencil/core';

@Component({
  tag: 'outer-component',
  shadow: true
})
export class OuterComponent {
  render() {
    return (
      <inner-component>
        <slot />
      </inner-component>
    );
  }
}
