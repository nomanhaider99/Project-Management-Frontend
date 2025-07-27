export interface UserType {
    _id: string;
    username: string;
    email: string;
    password: string;
    projects?: string[];
    tagline: string;
    description?: string;
}