import { NgModule } from "@angular/core";
import { CreateMilestoneComponent } from "./create-milestone.component";
import { TextareaModule } from "../textarea/textarea.module";
import { InputModule } from "../input/input.module";
import { CommonModule } from "@angular/common";
import { ResultModule } from "../result/result.module";
import { ButtonModule } from "../button/button.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CreateMilestoneComponent
    ],
    exports: [
        CreateMilestoneComponent
    ],
    imports: [
        TextareaModule,
        InputModule,
        CommonModule,
        ResultModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class CreateMilestoneModule {}