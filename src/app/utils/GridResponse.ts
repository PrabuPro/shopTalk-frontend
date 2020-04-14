export class GridResponse {

    private data: Array<JSON>;
    private total: number;
    private error: Array<JSON>;

    constructor(data: Array<JSON>, total: number, error = []) {
        this.data = data;
        this.total = total;
        this.error = error;
    }

    public getData(): Array<JSON> {
        return this.data;
    }

    public getTotal(): number {
        return this.total;
    }

    public getError(): Array<JSON>{
        return this.error;
    }
}
