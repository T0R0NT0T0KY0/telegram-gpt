/**
 * @author: CHIKIRIAY
 * @created: 4/3/23
 * @Time: 1:53 PM
 */
import { Ctx, Hears, Help, On, Start, Update } from "nestjs-telegraf";
import { Context } from "../../../common/interfaces/context.interface";
import { TelegramService } from "../services/telegram.service";

@Update()
export class TelegramUpdate {
	constructor(private readonly telegramService: TelegramService) {}

	@Start()
	async start() {
		return this.telegramService.sendStart();
	}

	@Help()
	async help(@Ctx() ctx: Context) {
		await ctx.reply("Send me a sticker");
	}

	@On("sticker")
	async on(@Ctx() ctx: Context) {
		await ctx.reply("👍");
	}

	@Hears(["hi", "hello", "hey", "qq"])
	async hears(@Ctx() ctx: Context) {
		await ctx.reply("Hey there");
	}
}
