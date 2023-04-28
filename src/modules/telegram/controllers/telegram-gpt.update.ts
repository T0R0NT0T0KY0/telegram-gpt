/**
 * @author: CHIKIRIAY
 * @created: 4/3/23
 * @Time: 1:53 PM
 */
import { Command, Message, Update } from "nestjs-telegraf";
import { TelegramGptService } from "../services/telegram-gpt.service";
import { TGMessage } from "../types/tg-message.type";
import { RabbitPayload, RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { AnswerGptDto } from "../dto/answer-gpt.dto";
import { fixTelegramCommandText } from "@Utils/string.utilds";

@Update()
export class TelegramGptUpdate {
	constructor(private readonly telegramGptService: TelegramGptService) {}

	@Command("gpt_req")
	async onText(@Message() { text, chat }: TGMessage) {
		const string = fixTelegramCommandText(text);

		if (!string) {
			return "Задай вопрос!";
		}
		await this.telegramGptService.askAndReply(string, chat.id);
	}

	@RabbitSubscribe({
		queue: "gpt_reply",
		createQueueIfNotExists: true,
		exchange: "gpt",
		routingKey: "gpt_reply",
		allowNonJsonMessages: false,
	})
	askWithAnswer(@RabbitPayload() answer: AnswerGptDto): Promise<void> {
		return this.telegramGptService.sendAnswer(answer.requestId, answer.answer);
	}
}
