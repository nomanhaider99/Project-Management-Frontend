export interface MilestoneType {
    _id: string;
    title: string;
    description: string;
    project: string;
    tasks?: string[];
    status?: "ongoing" | "completed";
}