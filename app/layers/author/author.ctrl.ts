/// <reference path="../main.d.ts"/>

class AuthorCtrl {
    wish: any;
    isEditMode: boolean;
    constructor(
        Wish, /*: loopback.IWish <- interface in the making */
        WishSchema,
        $stateParams: ng.ui.IStateParamsService
    ) {
        if ($stateParams['id']) {
            this.isEditMode = true;
            this.wish = Wish.findById({ id :$stateParams['id'] });
        } else {
            this.wish = new Wish( new WishSchema() );
        }
    }

}

export { AuthorCtrl as default };
