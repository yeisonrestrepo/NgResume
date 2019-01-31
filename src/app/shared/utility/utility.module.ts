import {
  NgModule,
  ModuleWithProviders
} from "@angular/core";
import { ValidationService } from './validation.service';

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,

      providers: [
        ValidationService
      ]
    };
  }
}