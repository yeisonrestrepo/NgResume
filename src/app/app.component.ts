import { Component, OnInit } from '@angular/core';
import { AppCoreConfig } from './app.core-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [AppCoreConfig]
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public appCore: AppCoreConfig
  ) { }

  ngOnInit() {
    this.appCore.setupLanguage();
  }
}
