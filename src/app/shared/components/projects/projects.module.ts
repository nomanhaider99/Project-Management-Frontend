import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects.component";
import { ButtonModule } from "../button/button.module";
import { UserProjectModule } from "../user-project/project.module";

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        UserProjectModule
    ],
    declarations: [
        ProjectsComponent
    ],
    exports: [
        ProjectsComponent
    ]
})

export class ProjectsModule {}