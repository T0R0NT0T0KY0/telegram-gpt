/**
 * @author: CHIKIRIAY
 * @created: 4/3/23
 * @Time: 1:46 PM
 */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

export const run = async () => {
	await NestFactory.createApplicationContext(AppModule);
};
