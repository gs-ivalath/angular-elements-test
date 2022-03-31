import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyBtnComponent } from './my-btn/my-btn.component';
import { CoolService } from './cool.service';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

@NgModule({
  declarations: [MyBtnComponent],
  imports: [
    BrowserModule
  ],
  providers: [CoolService],
  entryComponents: [MyBtnComponent]
})
export class AppModule {

  readonly customElementsMap = {
    'my-btn': MyBtnComponent,
  };

  //constructor(private injector: Injector, private router: Router) {
  constructor(private injector: Injector) {
    this.registerElements();
  }

  registerElements() {
    for (const ele in this.customElementsMap) {
      const strategyFactory = new ElementZoneStrategyFactory(this.customElementsMap[ele], this.injector);
      const customElement = createCustomElement(this.customElementsMap[ele], { injector: this.injector, strategyFactory });
      customElements.define(ele, customElement);
    }
  }
  ngDoBootstrap() { }
}
