import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environments } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    http: HttpClient = inject(HttpClient);

    createTask (title: string, description: string, project: string, milestone: string) {
        const data = { title, description, project, milestone };
        return this.http.post(`${environments.API_BASE_URL}/tasks/create-task`, data);
    }

    deleteTask (id: string) {
        return this.http.delete(`${environments.API_BASE_URL}/tasks/delete-task/${id}`);
    }

    getTasksOfMilestone(milestone: string, project: string) {
        return this.http.get(`${environments.API_BASE_URL}/tasks/get-tasks/${project}/${milestone}`);
    }
}