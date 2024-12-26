import { Routes } from "@angular/router";
import { modeSelectionRoutes } from "./game/mode-selection/mode-selection.routes";

export const routes: Routes = [
  {
    path: "",
    children: modeSelectionRoutes,
  },
];
