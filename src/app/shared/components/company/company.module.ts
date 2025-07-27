import { NgModule } from "@angular/core";
import { CompanyComponent } from "./company.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CompanyComponent],
    imports: [CommonModule],
    exports: [CompanyComponent]
})

export class CompanyModule {}