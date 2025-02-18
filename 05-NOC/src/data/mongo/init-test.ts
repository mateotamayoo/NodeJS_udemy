import mongoose from "mongoose"
import { MongoDatabase } from "./init"

describe('', () => {

    afterAll(() => {
        mongoose.connection.close();
    })
    test('should connect with mongo', async () => {
        const connected = await MongoDatabase.connect({
            dbName: process.env.MONGO_URL!,
            mongoUrl: process.env.MONGO_DB_NAME!
        })

        expect(connected).toBeTruthy

    })

    test('should throw an error', async () => {
        try {
            const connected = await MongoDatabase.connect({
                dbName: process.env.MONGO_URL!,
                mongoUrl: '',
            });
            expect(true).toBe(false);
        } catch (error) {

        }
    })
})