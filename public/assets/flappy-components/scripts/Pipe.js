class Pipe {
    constructor(bottom, x) {
        this.bottom = bottom;
        this.top = this.bottom + gameHandler.pipeGapHeight;
        this.x = x;
    }
}