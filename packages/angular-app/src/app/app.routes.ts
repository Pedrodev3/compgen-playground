import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./components/compgen/button-cli/buttonteste-cli.component").then(
        (m) => m.ButtonTestCliComponent
      ),
  },
  {
    path: "compgen-button-fe",
    loadComponent: () =>
      import("./components/compgen/button-fe/buttonfe-button.component").then(
        (m) => m.buttonFeButtonComponent
      ),
  },
  {
    path: "compgen-button-cp",
    loadComponent: () =>
      import("./components/compgen/button-cp/buttoncp-button.component").then(
        (m) => m.buttonCpButtonComponent
      ),
  },
  {
    path: "manual-button",
    loadComponent: () =>
      import("./components/manual/button-manual/button-manual.component").then(
        (m) => m.ButtonManualComponent
      ),
  },
];
