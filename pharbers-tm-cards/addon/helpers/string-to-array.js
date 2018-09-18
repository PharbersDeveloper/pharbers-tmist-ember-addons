import { helper } from '@ember/component/helper';

export function stringToArray(params /*, hash*/ ) {
	let [p, symbol, many] = params;
	if (p === undefined) {
		return []
	} else {
		let value = p.toString();
		let arr = value.split(symbol);
		if (many > 0) {
			if (arr.length > many) {
				arr.length = many;
			}
			return arr;
		} else {
			return arr;
		}
	}
}

export default helper(stringToArray);