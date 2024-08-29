export type Status = "en attente" | "expédiée" | "livrée"; 

export interface Author {
    name: string; 
    birthYear: number; 
    genres: string[];  
}

export interface Book {
    title: string; 
    author: Author; 
    pages: number; 
    isAvailable: boolean; 
}
