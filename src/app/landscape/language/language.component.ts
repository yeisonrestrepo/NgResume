import {
  Component, OnInit,
  Output,
  Input,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageComponent implements OnInit {

  @Input() selectedLanguage: string;
  @Input() availableLanguages: Array<any>;
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public selectLanguage(lang: any) {
    this.select.emit({ code: lang.code, culture: lang.culture });
  }

}
