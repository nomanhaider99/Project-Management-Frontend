import { NgModule } from "@angular/core";
import { AddMemberComponent } from "./add-member.component";
import { CommonModule } from "@angular/common";
import { ResultModule } from "../result/result.module";
import { ButtonModule } from "../button/button.module";
import { InputModule } from "../input/input.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AddMemberComponent
    ],
    exports: [
        AddMemberComponent,
    ],
    imports: [
        CommonModule,
        ResultModule,
        ButtonModule,
        InputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class AddMemberModule {}