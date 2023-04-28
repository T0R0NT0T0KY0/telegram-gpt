/**
 * @author: CHIKIRIAY
 * @created: 4/5/23
 * @Time: 5:32 PM
 */

export type TGMessage = {
	message_id: number;
	from: TGMessageFrom;
	chat: TGMessageChat;
	date: number;
	text: string;
};

export type TGMessageFrom = {
	id: number;
	is_bot: boolean;
	first_name: string;
	username: string;
	language_code: string;
	is_premium: boolean;
};

export type TGMessageChat = {
	id: number;
	first_name: string;
	username: string;
	type: "private";
};
