import { NgModule } from "@angular/core";
import { UserTaskComponent } from "./user-task.component";
import { ButtonModule } from "../button/button.module";
import { ResultModule } from "../result/result.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        UserTaskComponent
    ],
    exports: [
        UserTaskComponent
    ],
    imports: [
        ButtonModule,
        ResultModule,
        CommonModule
    ]
})

export class UserTaskModule {}