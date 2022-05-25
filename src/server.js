import express from "express";
import router from "./routes/index.js";

class Server {
    constructor(app) {
        this.app = app;
        this.port = process.env.PORT || 3000;
        this.init();
    }
    init() {
        this.app.use(express.json());
        this.app.use('/',router)
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`server started and running on port:${this.port}`)
        })
    }
}
export default Server;