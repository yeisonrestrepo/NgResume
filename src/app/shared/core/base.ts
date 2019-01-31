import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as store from '../store';
import { localeDateString } from '../utility';

export abstract class Base {
    public culture$: Observable<any> = this.appState$.select(store.getSelectedCulture);
    public culture: string;

    constructor(protected appState$: Store<store.State>) { }

    /**
     * Formats date string based on selected culture
     * 
     * @param value
     */
    public formatDate(value: string) {
        return localeDateString(value, this.culture);
    }
}
