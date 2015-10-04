/// <reference path="../main.d.ts"/>

class AuthorCtrl {
    wish: any;

    constructor(
        Wish, /*: loopback.IWish <- interface in the making */
        wishSchema,
        $stateParams: ng.ui.IStateParamsService
    ) {
        if ($stateParams['id']) {
            this.wish = Wish.findById({ id :$stateParams['id'] });
        } else {
            this.wish = new Wish( wishSchema );
        }
        console.log(this.wish);
    }

}

export { AuthorCtrl as default };
