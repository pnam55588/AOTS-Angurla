export class ToDo {
    private Id: number;
    private Name: string;
    private Content: string;
    private IsComplete: boolean;


    constructor (id: number, name: string, content: string, isComplete: boolean) {
        this.Id = id;
        this.Name = name;
        this.Content = content;
        this.IsComplete = isComplete;
    }
    get getIsComplete(): boolean {        
        return this.IsComplete;
    }
}
