import { Injectable } from '@angular/core';
import { Base } from '../shared/core/base';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as store from '../shared/store';
import * as settingsActions from '../shared/store/actions/settings.action';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LandscapeCore extends Base {

    public selectedLang$ = this.appState$.select(store.getSelectedLanguage);
    public availableLanguages$ = this.appState$.select(store.getAvailableLanguages);
    private subscriptions: Array<Subscription> = [];

    constructor(
        private translateService: TranslateService,
        protected appState$: Store<store.State>
    ) {
        super(appState$);
        this.registerEvents();
    }

    public selectLanguage(lang: any): void {
        this.appState$.dispatch(new settingsActions.SetLanguageAction(lang.code));
        this.appState$.dispatch(new settingsActions.SetCultureAction(lang.culture));
        this.translateService.use(lang.code);
    }

    /**
     * Subscribes to events
     */
    private registerEvents(): void {
        // Subscribes to culture
        this.subscriptions.push(this.culture$.subscribe((culture: string) => this.culture = culture));
    }
}
