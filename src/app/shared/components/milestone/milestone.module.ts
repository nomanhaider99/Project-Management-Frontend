import { NgModule } from "@angular/core";
import { MilestoneComponent } from "./milestone.component";
import { ButtonModule } from "../button/button.module";
import { TaskModule } from "../task/task.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MilestoneComponent
    ],
    exports: [
        MilestoneComponent
    ],
    imports: [
        ButtonModule,
        TaskModule,
        CommonModule,
    ]
})

export class MilestoneModule {}