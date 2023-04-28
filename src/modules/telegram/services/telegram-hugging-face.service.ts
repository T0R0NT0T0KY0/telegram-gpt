/**
 * @author: CHIKIRIAY
 * @created: 4/5/23
 * @Time: 5:02 PM
 */
import { Injectable } from "@nestjs/common";
import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
import { RabbitMqHFName } from "../../../common/constants/rabbit-mq.constants";
import { AskGptDto } from "../dto/ask-gpt.dto";
import { InjectBot } from "nestjs-telegraf";
import { TELEGRAM_BOT_NAME } from "../../../common/constants/telegram-bot";
import { Telegraf } from "telegraf";
import { Context } from "../../../common/interfaces/context.interface";

@Injectable()
export class TelegramHuggingFaceService {
	constructor(
		private readonly amqpConnection: AmqpConnection,
		@InjectBot(TELEGRAM_BOT_NAME)
		private readonly bot: Telegraf<Context>,
	) {}

	async askAndReply(content: string, chatId: number): Promise<void> {
		await this.amqpConnection.publish(RabbitMqHFName, "hugging_face_question", {
			content,
			requestId: chatId,
		} as AskGptDto);
	}

	async sendAnswer(chatId: number, answer: string): Promise<void> {
		await this.bot.telegram.sendMessage(chatId, answer ? JSON.stringify(answer): "Произошла ошибка");
	}
}
