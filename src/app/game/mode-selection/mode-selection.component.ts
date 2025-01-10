import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ModeSelectionSideNavComponent } from "./mode-selection-sidenav/mode-selection-sidenav.component";
import { PlayWithFriendComponent } from "./play-with-friend/play-with-friend.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [ModeSelectionSideNavComponent, PlayWithFriendComponent],
  templateUrl: "./mode-selection.component.html",
  styleUrl: "./mode-selection.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModeSelectionComponent {}
