import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "src/app/shared/components/button/button.module";
import { InputModule } from "src/app/shared/components/input/input.module";
import { PasswordInputModule } from "../../password-input/password-input.module";
import { LoginComponent } from "./login.component";
import { BrowserModule } from "@angular/platform-browser";
import { ResultModule } from "src/app/shared/components/result/result.module";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    ButtonModule,
    InputModule,
    PasswordInputModule,
    FormsModule,
    ResultModule
],
    providers: [
        FormControl
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {}