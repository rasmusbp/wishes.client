/// <reference path="../../main.d.ts"/>

import WishItemCtrl from './WishItemCtrl';

class WishGridItemCtrl extends WishItemCtrl {
    owner: any;
    isDeleted: boolean;
    constructor(
        // super's dependencies
        $injector
    ) {
        super($injector);
        this.isEditMode = true;
    }

}

function wishItem() {
    return {
        restrict: 'E',
        scope: {
            wish: '=',
            owner: '=',
            onDelete: '&',
            onSave: '&'
        },
        templateUrl: 'layers/components/wish-items/wish-grid-item.directive.view.html',
        controller: WishGridItemCtrl,
        controllerAs: 'vm',
        bindToController: true
    }
}

export {wishItem as default};
