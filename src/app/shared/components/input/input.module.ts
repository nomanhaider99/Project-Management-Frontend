import { NgModule } from "@angular/core";
import { InputComponent } from "./input.component";
import { FormControl, FormControlName, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        ReactiveFormsModule
    ],
    declarations: [
        InputComponent,
    ],
    providers: [
        FormControlName,
        FormControl
    ],
    exports: [
        InputComponent
    ]
})

export class InputModule {}