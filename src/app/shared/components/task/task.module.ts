import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { ButtonModule } from "../button/button.module";
import { ResultModule } from "../result/result.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TaskComponent
    ],
    exports: [
        TaskComponent
    ],
    imports: [
        ButtonModule,
        ResultModule,
        CommonModule
    ]
})

export class TaskModule {}