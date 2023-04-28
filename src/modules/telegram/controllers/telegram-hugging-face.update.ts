/**
 * @author: CHIKIRIAY
 * @created: 4/3/23
 * @Time: 1:53 PM
 */
import { Command, Message, Update } from "nestjs-telegraf";
import { TGMessage } from "../types/tg-message.type";
import { RabbitPayload, RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { AnswerGptDto } from "../dto/answer-gpt.dto";
import { TelegramHuggingFaceService } from "../services/telegram-hugging-face.service";
import { fixTelegramCommandText } from "@Utils/string.utilds";

@Update()
export class TelegramHuggingFaceUpdate {
	constructor(private readonly telegramGptService: TelegramHuggingFaceService) {}

	@Command("hf_req")
	async onText(@Message() { text, chat }: TGMessage) {
		const string = fixTelegramCommandText(text);

		if (!string) {
			return "Задай вопрос!";
		}
		await this.telegramGptService.askAndReply(string, chat.id);
	}

	@RabbitSubscribe({
		queue: "hugging_face_reply",
		createQueueIfNotExists: true,
		exchange: "hugging_face",
		routingKey: "hugging_face_reply",
		allowNonJsonMessages: false,
	})
	askWithAnswer(@RabbitPayload() answer: AnswerGptDto): Promise<void> {
		return this.telegramGptService.sendAnswer(answer.requestId, answer.answer);
	}
}
