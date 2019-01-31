import {
  Component, OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LandscapeCore } from '../landscape.core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponentComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  @Input() selectedLanguage: string;
  @Input() availableLanguages: Array<any>;
  @Output() selectLanguage: EventEmitter<any> = new EventEmitter();

  constructor(public landscapeCore: LandscapeCore) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}