/**
 * @author: CHIKIRIAY
 * @created: 4/2/23
 * @Time: 7:01 PM
 */
import { BaseMessageDto } from "../../../common/message-broker/base-message.dto";

export class AnswerGptDto extends BaseMessageDto {
	answer: string;
}
