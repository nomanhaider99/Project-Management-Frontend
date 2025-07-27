import { NgModule } from "@angular/core";
import { TextareaComponent } from "./textarea.component";
import { FormControl, FormControlName, ReactiveFormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@NgModule({
    imports: [
        ReactiveFormsModule,
        NgClass
    ],
    declarations: [
        TextareaComponent,
    ],
    providers: [
        FormControlName,
        FormControl
    ],
    exports: [
        TextareaComponent
    ]
})

export class TextareaModule {}