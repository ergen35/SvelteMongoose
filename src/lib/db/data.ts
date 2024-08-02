import { connect } from "mongoose";

export default class DataSource {
    static async initialize() {
        connect('mongodb://localhost:27017/test');
    }
}