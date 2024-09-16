import { Component } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should have a defind title', () => {
    const component = new AppComponent;
    expect(component.title).toBeDefined();
  })
});