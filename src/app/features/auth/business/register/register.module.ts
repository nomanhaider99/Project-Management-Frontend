import { NgModule } from "@angular/core";
import { BusinessRegisterComponent } from "./register.component";
import { InputModule } from "src/app/shared/components/input/input.module";
import { PasswordInputModule } from "../../password-input/password-input.module";
import { ButtonModule } from "src/app/shared/components/button/button.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ResultModule } from "src/app/shared/components/result/result.module";

@NgModule({
    imports: [
    InputModule,
    PasswordInputModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    ResultModule
],
    declarations: [
        BusinessRegisterComponent
    ],
    exports: [
        BusinessRegisterComponent
    ]
})
export class BusinessRegisterModule {}