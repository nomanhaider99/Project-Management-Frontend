import { RouterModule, Routes } from "@angular/router";
import { BusinessDashboardComponent } from "./business.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: BusinessDashboardComponent
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BusinessDashboardRoutingModule {}