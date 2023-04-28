/**
 * @author: CHIKIRIAY
 * @created: 4/2/23
 * @Time: 5:59 PM
 */

import { config } from "dotenv";
import { env } from "process";
import { stringToBooleanWithDefault } from "@Utils/boolean.utils";
import { toNumberOrDefault } from "@Utils/number.utils";

config();
export const Envs = {
	//RabbitMQ
	AMPQ_URL: env.AMPQ_URL,

	// PostgreSQL
	PG_HOST: env.PG_HOST,
	PG_PORT: toNumberOrDefault(env.PG_PORT, 5432),
	PG_USERNAME: env.PG_USERNAME,
	PG_PASSWORD: env.PG_PASSWORD,
	PG_DATABASE: env.PG_DATABASE,
	PG_IS_MIGRATIONS_RUN: stringToBooleanWithDefault(env.PG_IS_MIGRATIONS_RUN, false),
	PG_IS_LOGGING: stringToBooleanWithDefault(env.PG_IS_MIGRATIONS_RUN, false),

	// Telegram
	TELEGRAM_BOT_TOKEN: env.TELEGRAM_BOT_TOKEN,
};
