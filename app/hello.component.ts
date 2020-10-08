import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: ` {{name}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  name: string;

  constructor() {
    this.name = "starting timeout";
    setTimeout(() => {
     this.name = "changed";
    }, 15000);
  }
}
