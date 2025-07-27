export interface ProjectType {
    _id: string;
    title: string;
    description: string;
    owner: string;
    members?: string[];
    milestones: string[]
    status?: "ongoing" | "completed" | "expired";
    priority?: "low" | "medium" | "urgent";
    progress: number;
    startDate: string;
    endDate: string;
}