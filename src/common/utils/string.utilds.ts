/**
 * @author: CHIKIRIAY
 * @created: 4/27/23
 * @Time: 3:01 AM
 */

export const fixTelegramCommandText = (text: string, separator = " ") => {
	const indexOf = text.indexOf(separator);
	if (indexOf === -1) {
		return "";
	}
	return text.substring(indexOf + 1);
};