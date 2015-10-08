/// <reference path="../../main.d.ts"/>

import WishItemCtrl from './WishItemCtrl';

class WishListItemListCtrl extends WishItemCtrl {
  constructor(
    // super's dependencies
    $injector,

    // local dependencies
    private viewport
  ) {
      super($injector);
      this.isEditMode = true;
  }
}

function wishItemAdminList() {
  return {
    restrict: 'E',
    scope: {
      wish: '='
    },
    templateUrl: 'layers/components/wish-items/wish-list-item.directive.view.html',
    controller: WishListItemListCtrl,
    controllerAs: 'vm',
    bindToController: true
  }
}

export { wishItemAdminList as default};
