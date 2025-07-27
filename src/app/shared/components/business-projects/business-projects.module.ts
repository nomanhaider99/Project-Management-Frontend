import { NgModule } from "@angular/core";
import { BusinessProjectsComponent } from "./business-projects.component";
import { ProjectModule } from "../project/project.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        BusinessProjectsComponent
    ],
    exports: [
        BusinessProjectsComponent
    ],
    imports: [
        ProjectModule,
        CommonModule,
    ]
})

export class BusinessProjectsModule {}