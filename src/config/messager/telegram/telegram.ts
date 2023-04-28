/**
 * @author: CHIKIRIAY
 * @created: 4/3/23
 * @Time: 1:43 PM
 */
import { TelegrafModule } from "nestjs-telegraf";
import { Envs } from "../../envs";
import { TELEGRAM_BOT_NAME } from "../../../common/constants/telegram-bot";

export const Telegram = () => {
	return TelegrafModule.forRoot({
		token: Envs.TELEGRAM_BOT_TOKEN,
		botName: TELEGRAM_BOT_NAME,
	});
};
