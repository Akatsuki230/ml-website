import { MongoClient } from "mongodb";

export class State {
    static instance;

    static async getInstance() {
        if (!State.instance) {
            State.instance = new MongoClient('mongodb+srv://mldkyt:A7L9jkRmohTTlpAF@cluster0.9awq2ww.mongodb.net/?retryWrites=true&w=majority');
        }
        await State.instance.connect();
        return State.instance;
    }
}