import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyBtnComponent } from './my-btn/my-btn.component';
import { CoolService } from './cool.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [MyBtnComponent, ContactComponent],
  imports: [
    BrowserModule
  ],
  providers: [CoolService],
  entryComponents: [MyBtnComponent, ContactComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const elements: any[] = [
      [MyBtnComponent, 'my-btn'],
      [ContactComponent, 'contact-form']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
