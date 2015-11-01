/// <reference path="../main.d.ts"/>

class WishesManager {

	view: string;
	selectedOwner: string;

	constructor() {

		// set defaults
		this.set('view', 'grid');
		this.set('selectedOwner', undefined);

	}

	set(property: string, value) {
		this[property] = value;
	}
}

export {WishesManager as default};
