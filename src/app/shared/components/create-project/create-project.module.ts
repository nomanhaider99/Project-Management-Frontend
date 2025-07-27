import { NgModule } from "@angular/core";
import { CreateProjectComponent } from "./create-project.component";
import { InputModule } from "../input/input.module";
import { TextareaModule } from "../textarea/textarea.module";
import { ButtonModule } from "../button/button.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ResultModule } from "../result/result.module";

@NgModule({
    declarations: [
        CreateProjectComponent,
    ],
    exports: [
        CreateProjectComponent
    ],
    imports: [
        InputModule,
        TextareaModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ResultModule
    ]
})

export class CreateProjectModule {}