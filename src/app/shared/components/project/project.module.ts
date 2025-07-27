import { NgModule } from "@angular/core";
import { ProjectComponent } from "./project.component";
import { ButtonModule } from "../button/button.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ProjectComponent
    ],
    exports: [
        ProjectComponent
    ],
    imports: [
        ButtonModule,
        CommonModule,
    ],
})

export class ProjectModule {}