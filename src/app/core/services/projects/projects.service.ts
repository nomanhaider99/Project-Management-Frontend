import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environments } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    http: HttpClient = inject(HttpClient);

    createProject (owner: string, title: string, description: string, status: string, priority: string, startDate: string) {
        const data = {
            owner,
            title,
            description,
            status,
            priority,
            startDate
        }
        return this.http.post(`${environments.API_BASE_URL}/projects/create-project`, data);
    }

    deleteProject (id: string) {
        return this.http.delete(`${environments.API_BASE_URL}/projects/delete-project/${id}`)
    }
 
    getMyProjects (id: string) {
        return this.http.get(`${environments.API_BASE_URL}/projects/get-projects-of-user/${id}`)
    }

    getProjectsOfBusiness (id: string) {
        return this.http.get(`${environments.API_BASE_URL}/projects/get-projects/${id}`)
    }

    getProjectById (id: string) {
        return this.http.get(`${environments.API_BASE_URL}/projects/get-project/${id}`)
    }

    addMemberToProject (id: string, username: string) {
        const data = { username }
        return this.http.patch(`${environments.API_BASE_URL}/projects/add-member-by-username/${id}`, data);
    }

    updateProjectProgress (id: string) {
        return this.http.get(`${environments.API_BASE_URL}/projects/update-project-progress/${id}`);
    }
}