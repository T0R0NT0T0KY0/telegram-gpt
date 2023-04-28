/**
 * @author: CHIKIRIAY
 * @created: 4/2/23
 * @Time: 6:31 PM
 */

export const toNumberOrDefault = (str: string, defaultValue: number): number => {
	return str === undefined ? defaultValue : +str;
};
