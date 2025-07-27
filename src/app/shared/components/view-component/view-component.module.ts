import { NgModule } from "@angular/core";
import { ViewProjectComponent } from "./view-component.component";
import { MilestoneModule } from "../milestone/milestone.module";
import { TaskModule } from "../task/task.module";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "../button/button.module";

@NgModule({
    declarations: [
        ViewProjectComponent
    ],
    exports: [
        ViewProjectComponent
    ],
    imports: [
    MilestoneModule,
    TaskModule,
    CommonModule,
    ButtonModule
]
})

export class ViewProjectModule {}