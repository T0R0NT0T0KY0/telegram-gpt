/**
 * @author: CHIKIRIAY
 * @created: 4/2/23
 * @Time: 6:27 PM
 */

export const stringToBoolean = (str: string | number): boolean => {
	return +str === 1 || (typeof str === "string" && str.toLowerCase() === "true");
};
export const stringToBooleanWithDefault = (str: string, defaultValue: boolean): boolean => {
	return str === undefined ? defaultValue : stringToBoolean(str);
};
