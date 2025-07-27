import { NgModule } from "@angular/core";
import { BusinessLoginComponent } from "./login.component";
import { ButtonModule } from "src/app/shared/components/button/button.module";
import { InputModule } from "src/app/shared/components/input/input.module";
import { PasswordInputModule } from "../../password-input/password-input.module";
import { FormsModule } from "@angular/forms";
import { ResultModule } from "src/app/shared/components/result/result.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
    ButtonModule,
    InputModule,
    PasswordInputModule,
    FormsModule,
    ResultModule,
    CommonModule
],
    declarations: [
        BusinessLoginComponent
    ],
    exports: [
        BusinessLoginComponent
    ]
})

export class BusinessLoginModule {}