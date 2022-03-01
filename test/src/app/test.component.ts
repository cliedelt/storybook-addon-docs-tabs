import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-overview',
  template: '<button>Hello World!</button>',
})
export class TestComponent {
  /**
   * This is a input
   */
  @Input('text') text!: string;
}
