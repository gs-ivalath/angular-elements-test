import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyBtnComponent } from './my-btn/my-btn.component';
import { CoolService } from './cool.service';

@NgModule({
  declarations: [MyBtnComponent],
  imports: [
    BrowserModule
  ],
  providers: [CoolService],
  entryComponents: [MyBtnComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const elements: any[] = [
      [MyBtnComponent, 'my-btn'],
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
