import { NgModule } from "@angular/core";
import { ProjectsModule } from "src/app/shared/components/projects/projects.module";
import { UserDashboardComponent } from "./user.component";
import { ButtonModule } from "src/app/shared/components/button/button.module";
import { LogoComponent } from "src/app/shared/components/logo/logo.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CreateProjectModule } from "src/app/shared/components/create-project/create-project.module";
import { CommonModule } from "@angular/common";
import { UserViewProjectModule } from "src/app/shared/components/user-view-component/view-component.module";

@NgModule({
    imports: [
        ProjectsModule,
        ButtonModule,
        LogoComponent,
        AppRoutingModule,
        CreateProjectModule,
        CommonModule,
        UserViewProjectModule
    ],
    declarations: [
        UserDashboardComponent
    ],
    exports: [
        UserDashboardComponent
    ]
})

export class UserDashboardModule { }