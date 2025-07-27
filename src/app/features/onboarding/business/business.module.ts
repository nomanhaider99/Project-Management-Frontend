import { NgModule } from "@angular/core";
import { OnBoardingBusinessComponent } from "./business.component";
import { InputModule } from "src/app/shared/components/input/input.module";
import { TextareaModule } from "src/app/shared/components/textarea/textarea.module";
import { ButtonModule } from "src/app/shared/components/button/button.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ResultModule } from "src/app/shared/components/result/result.module";

@NgModule({
    exports: [
        OnBoardingBusinessComponent
    ],
    declarations: [
        OnBoardingBusinessComponent
    ],
    imports: [
    InputModule,
    TextareaModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    ResultModule
]
})

export class OnBoardingBusinessModule { }