import { MongoClient } from "mongodb";

export class State {
    static instance;

    static async getInstance() {
        if (!State.instance) {
            State.instance = new MongoClient('mongodb+srv://mldkyt:Ix2s5Vr1HknaToXB@cluster0.nhsmboe.mongodb.net/Cluster0?retryWrites=true&w=majority');
        }
        await State.instance.connect();
        return State.instance;
    }
}