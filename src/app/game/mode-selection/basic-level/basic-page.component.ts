import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent { }
