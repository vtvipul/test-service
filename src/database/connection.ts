import { DataSource } from "typeorm";
import { join } from "path";

class Database {
	public static dataSource: DataSource;
	public static connectDatabase(): DataSource {
		const entityPath = join(__dirname, "../", "entities", "*.entity.{ts,js}");
		Database.dataSource = new DataSource({
			type: "postgres",
			host: process.env.DATABASE_HOST || "localhost",
			port: parseInt(
				process.env.DATABASE_PORT ? process.env.DATABASE_PORT : "5432"
			),
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

export const dataSource = Database.connectDatabase();
