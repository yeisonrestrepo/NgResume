import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandscapeRoutingModule } from './landscape-routing.module';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ResumeComponent } from './resume/resume.component';
import { LanguageComponent } from './language/language.component';
import { LandscapeCore } from './landscape.core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ContactComponentComponent, ResumeComponent, LanguageComponent],
  imports: [
    CommonModule,
    LandscapeRoutingModule,
    TranslateModule
  ],
  providers: [
    LandscapeCore
  ]
})
export class LandscapeModule { }
