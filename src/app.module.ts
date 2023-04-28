import { Module } from "@nestjs/common";
import { PostgreSQL } from "./config/database/postgresql/postgresql";
import { Telegram } from "./config/messager/telegram/telegram";
import { TelegramModule } from "./modules/telegram/telegram.module";

@Module({
	imports: [PostgreSQL(), Telegram(), TelegramModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
