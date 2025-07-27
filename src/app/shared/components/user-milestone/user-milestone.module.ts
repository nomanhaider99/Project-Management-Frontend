import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { TaskModule } from "../task/task.module";
import { CommonModule } from "@angular/common";
import { UserMilestoneComponent } from "./user-milestone.component";
import { UserTaskModule } from "../user-task/user-task.module";
import { ResultModule } from "../result/result.module";

@NgModule({
    declarations: [
        UserMilestoneComponent
    ],
    exports: [
        UserMilestoneComponent
    ],
    imports: [
    ButtonModule,
    TaskModule,
    CommonModule,
    UserTaskModule,
    ResultModule
]
})

export class UserMilestoneModule {}