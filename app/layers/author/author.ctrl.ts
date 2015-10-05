/// <reference path="../main.d.ts"/>

class AuthorCtrl {
    wish: any;
    isEditMode: boolean;
    constructor(
        Wish, /*: loopback.IWish <- interface in the making */
        wishSchema,
        $stateParams: ng.ui.IStateParamsService
    ) {
        if ($stateParams['id']) {
            this.isEditMode = true;
            this.wish = Wish.findById({ id :$stateParams['id'] });
        } else {
            this.wish = new Wish( wishSchema );
        }
    }

}

export { AuthorCtrl as default };
