import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environments } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MilestoneService {
    http: HttpClient = inject(HttpClient);

    createMilestoneOfProject (title: string, description: string, project: string) {
        const data = { title, description, project };
        return this.http.post(`${environments.API_BASE_URL}/milestones/create-milestone`, data);
    }

    getMilestonesOfProject (project: string): Observable<any> {
        return this.http.get(`${environments.API_BASE_URL}/milestones/get-milestone-of-project/${project}`);
    }

    updateMilestoneStatus (milestone: string, project: string) {
        return this.http.get(`${environments.API_BASE_URL}/milestones/update-milestone-progress/${milestone}/${project}`);
    }
}