import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PasswordInputComponent } from "./password-input.component";
import { FormControl, FormControlName, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    providers: [
        FormControlName,
        FormControl
    ],
    declarations: [PasswordInputComponent],
    exports: [PasswordInputComponent],
})

export class PasswordInputModule {}