import { NgModule } from "@angular/core";
import { BusinessDashboardComponent } from "./business.component";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "src/app/shared/components/logo/logo.component";
import { CreateProjectModule } from "src/app/shared/components/create-project/create-project.module";
import { BusinessProjectsModule } from "src/app/shared/components/business-projects/business-projects.module";
import { ViewProjectModule } from "src/app/shared/components/view-component/view-component.module";
import { CreateMilestoneModule } from "src/app/shared/components/create-milestone/create-milstone.module";
import { AddMemberModule } from "src/app/shared/components/add-member/add-member.module";
import { AddTaskModule } from "src/app/shared/components/add-task/add-task.module";

@NgModule({
    declarations: [
        BusinessDashboardComponent
    ],
    exports: [
        BusinessDashboardComponent
    ],
    imports: [
        CommonModule,
        LogoComponent,
        CreateProjectModule,
        BusinessProjectsModule,
        ViewProjectModule,
        CreateMilestoneModule,
        AddMemberModule,
        AddTaskModule
    ]
})

export class BusinessDashboardModule {}