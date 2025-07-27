import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { CommonModule } from "@angular/common";
import { UserProjectComponent } from "./project.component";

@NgModule({
    declarations: [
        UserProjectComponent
    ],
    exports: [
        UserProjectComponent
    ],
    imports: [
        ButtonModule,
        CommonModule,
    ],
})

export class UserProjectModule {}