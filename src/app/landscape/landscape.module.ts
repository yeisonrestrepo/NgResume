import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandscapeRoutingModule } from './landscape-routing.module';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ResumeComponent } from './resume/resume.component';
import { LanguageComponent } from './language/language.component';
import { LandscapeCore } from './landscape.core';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [ContactComponentComponent, ResumeComponent, LanguageComponent, ProfileComponent, SkillsComponent, WorkExperienceComponent, EducationComponent, AboutComponent],
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
