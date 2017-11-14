export class TodoLoggingService {
    instance: Number;

    constructor() {
        this.instance = 0;
    }

    log(msg: string) {
        //console.log(this.instance);
        console.log(msg);
    }
}