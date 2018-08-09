import { helper } from '@ember/component/helper';

export function stringToArray(params /*, hash*/ ) {
	let [p, symbol] = params;
	let value = p.toString();
	let arr = value.split(symbol);
	return arr;
}

export default helper(stringToArray);