import { Routes } from "@angular/router";
import { BasicPageComponent } from "./basic-level/basic-page.component";
import { ModeSelectionComponent } from "./mode-selection.component";

export const modeSelectionRoutes: Routes = [
  {
    path: "",
    component: ModeSelectionComponent,
  },
  {
    path: "basic",
    component: BasicPageComponent,
  },
];
