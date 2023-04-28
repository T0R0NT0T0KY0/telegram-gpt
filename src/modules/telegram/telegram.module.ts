/**
 * @author: CHIKIRIAY
 * @created: 4/3/23
 * @Time: 1:34 PM
 */
import { Module } from "@nestjs/common";
import { TelegramGptUpdate } from "./controllers/telegram-gpt.update";
import { RabbitMQ } from "../../config/message-broker/rabbit-mq/rabbit-mq";
import { TelegramGptService } from "./services/telegram-gpt.service";
import { TelegramUpdate } from "./controllers/telegram.update";
import { TelegramHuggingFaceUpdate } from "./controllers/telegram-hugging-face.update";
import { TelegramService } from "./services/telegram.service";
import { TelegramHuggingFaceService } from "./services/telegram-hugging-face.service";

@Module({
	imports: [RabbitMQ()],
	controllers: [],
	providers: [
		TelegramUpdate,
		TelegramGptUpdate,
		TelegramHuggingFaceUpdate,
		TelegramService,
		TelegramGptService,
		TelegramHuggingFaceService,
	],
	exports: [],
})
export class TelegramModule {}
