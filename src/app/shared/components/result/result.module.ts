import { NgModule } from "@angular/core";
import { ResultComponent } from "./result.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ResultComponent
    ],
    exports: [
        ResultComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ResultModule {}