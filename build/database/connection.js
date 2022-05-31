"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
class Database {
    static connectDatabase() {
        const entityPath = (0, path_1.join)(__dirname, "../", "entities", "*.entity.{ts,js}");
        Database.dataSource = new typeorm_1.DataSource({
            type: "postgres",
            host: process.env.DATABASE_HOST || "localhost",
            port: parseInt(process.env.DATABASE_PORT ? process.env.DATABASE_PORT : "5432"),
            username: process.env.DATABASE_USERNAME || "postgres",
            database: process.env.DATABASE_NAME || "postgres",
            password: process.env.DATABASE_PASSWORD || "root",
            synchronize: process.env.DATABASE_SYNCHRONIZE == "true" || false,
            logging: process.env.DATABASE_LOGGING == "true" || false,
            entities: [entityPath],
        });
        return Database.dataSource;
    }
}
exports.dataSource = Database.connectDatabase();
