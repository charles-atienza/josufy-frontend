import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ICardButton } from "../../../shared/models/card-button.model";
import { RadioCardButtonComponent } from "../../../shared/components/radio-card-button/radio-card-button.component";
import { PlayWithFriendImagePath } from "../../../shared/enums/play-image-pathenum";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";

@Component({
  selector: "app-play-with-friend",
  standalone: true,
  imports: [RadioCardButtonComponent, ButtonModule, DialogModule],
  templateUrl: "./play-with-friend.component.html",
  styleUrl: "./play-with-friend.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayWithFriendComponent {
  public isShowCreateDialog: boolean = false;
  constructor() {}
  cardButtons: ICardButton[] = [
    {
      title: "Create Room",
      isComingSoon: false,
      logoURI: PlayWithFriendImagePath.CreateRoom,
      onClick: (card) => {
        this.showDialog();
      },
    },
    {
      title: "Join Room",
      isComingSoon: false,
      logoURI: PlayWithFriendImagePath.JoinRoom,
      onClick: () => {},
    },
  ];

  showDialog() {
    this.isShowCreateDialog = true;
  }
}
