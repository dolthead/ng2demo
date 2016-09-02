/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MyNewDirective } from './my-new-directive.directive';

describe('Directive: MyNewDirective', () => {
  it('should create an instance', () => {
    let directive = new MyNewDirective();
    expect(directive).toBeTruthy();
  });
});
