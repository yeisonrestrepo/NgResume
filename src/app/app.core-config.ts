import { Injectable } from '@angular/core';
import { Base } from './shared/core/base';
import { Store } from '@ngrx/store';
import * as store from './shared/store';
import * as settingsActions from './shared/store/actions/settings.action';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from './app-config.service';

@Injectable()
export class AppCoreConfig extends Base {

    constructor(
        protected appState$: Store<store.State>,
        private translate: TranslateService,
        private configService: ConfigService
    ) {
        super(appState$);
    }

    /**
     * Sets up default language for the application. Uses browser default language.
     */
    public setupLanguage(): void {
        let localization: any = this.configService.get('localization');
        let languages: Array<string> = localization.languages.map(lang => lang.code);
        let browserLang: string = this.translate.getBrowserLang();

        this.translate.addLangs(languages);
        this.translate.setDefaultLang(localization.defaultLanguage);

        let selectedLang = browserLang.match(/en|es/) ? browserLang : localization.defaultLanguage;
        let selectedCulture = localization.languages.filter(lang => lang.code === selectedLang)[0].culture;

        this.translate.use(selectedLang);
        this.appState$.dispatch(new settingsActions.SetLanguageAction(selectedLang));
        this.appState$.dispatch(new settingsActions.SetCultureAction(selectedCulture));
    }
}