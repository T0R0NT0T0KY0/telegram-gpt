/**
 * @author: CHIKIRIAY
 * @created: 4/2/23
 * @Time: 10:26 PM
 */

import { TypeOrmModule } from "@nestjs/typeorm";
import { Envs } from "../../envs";
import { DataSource } from "typeorm";
import { addTransactionalDataSource } from "typeorm-transactional";

export const PostgreSQL = () => {
	return TypeOrmModule.forRootAsync({
		useFactory() {
			return {
				type: "postgres",
				host: Envs.PG_HOST,
				port: Envs.PG_PORT,
				username: Envs.PG_USERNAME,
				password: Envs.PG_PASSWORD,
				database: Envs.PG_DATABASE,
				entities: ["dist/src/**/*.entity.{ts,js}"],
				migrationsTableName: "migrations_ls",
				migrations: ["dist/src/database/migrations/*.{ts,js}"],
				synchronize: false,
				migrationsRun: Envs.PG_IS_MIGRATIONS_RUN,
				logging: Envs.PG_IS_LOGGING,
				migrationsTransactionMode: "all",
			};
		},
		async dataSourceFactory(options) {
			if (!options) {
				throw new Error("Invalid options passed");
			}

			return addTransactionalDataSource(new DataSource(options));
		},
	});
};
