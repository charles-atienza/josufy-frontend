import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from "@angular/core";
import { ModeSelectionSideNavComponent } from "./mode-selection-sidenav/mode-selection-sidenav.component";
import { DifficultySelectionComponent } from "./difficulty-selection/difficulty-selection.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [ModeSelectionSideNavComponent, DifficultySelectionComponent],
  templateUrl: "./mode-selection.component.html",
  styleUrl: "./mode-selection.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModeSelectionComponent {}
