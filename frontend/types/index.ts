export interface Suggestion {
    id: number;
    content: string;
    author: string;
    created_at: Date;
    updated_at: Date;
}

export interface User {
    id: number;
    fullname: string;
}

export interface Response {
    status: 'error' | 'success';
    errorMessage?: string;
}

export interface StatusMessage {
    message: string;
    type: 'error' | 'success';
}
