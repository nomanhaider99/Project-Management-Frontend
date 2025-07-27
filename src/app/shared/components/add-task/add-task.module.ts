import { NgModule } from "@angular/core";
import { AddTaskComponent } from "./add-task.component";
import { InputModule } from "../input/input.module";
import { TextareaModule } from "../textarea/textarea.module";
import { CommonModule } from "@angular/common";
import { ResultModule } from "../result/result.module";
import { ButtonModule } from "../button/button.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AddTaskComponent
    ],
    exports: [
        AddTaskComponent
    ],
    imports: [
        InputModule,
        TextareaModule,
        CommonModule,
        ResultModule,
        ButtonModule,
        FormsModule
    ]
})

export class AddTaskModule {}