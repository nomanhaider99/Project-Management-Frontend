import { NgModule } from "@angular/core";
import { MilestoneModule } from "../milestone/milestone.module";
import { TaskModule } from "../task/task.module";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "../button/button.module";
import { UserViewProjectComponent } from "./view-component.component";
import { UserMilestoneModule } from "../user-milestone/user-milestone.module";

@NgModule({
    declarations: [
        UserViewProjectComponent
    ],
    exports: [
        UserViewProjectComponent
    ],
    imports: [
    TaskModule,
    CommonModule,
    ButtonModule,
    UserMilestoneModule
]
})

export class UserViewProjectModule {}