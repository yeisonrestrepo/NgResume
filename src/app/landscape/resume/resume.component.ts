import {
  Component, OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';
import { LandscapeCore } from '../landscape.core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent implements OnInit {

  constructor(
    private router: Router,
    public landscapeCore: LandscapeCore
  ) { }

  ngOnInit() {
  }

}
