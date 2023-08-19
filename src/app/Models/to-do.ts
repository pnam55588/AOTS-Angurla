export class ToDo {
    private Id: number;
    private Name: string;
    private Content: string;
    private IsComplete: boolean;


    constructor (private id: number, private name: string, private content: string, private isComplete: boolean) {
        this.Id = id;
        this.Name = name;
        this.Content = content;
        this.IsComplete = isComplete;
    }
    
    set setId(id: number) {
        this.Id = id;
    }
    set setName(name: string) { 
        this.Name = name;
    }
    set setContent(content: string) {
        this.Content = content;
    }
    set setIsComplete(isComplete: boolean) {
        this.IsComplete = isComplete;
    }
    get getId(): number {
        return this.Id;
    }
    get getName(): string {
        return this.Name;
    }
    get getContent(): string {
        return this.Content;
    }
    get getIsComplete(): boolean {        
        return this.IsComplete;
    }
}
