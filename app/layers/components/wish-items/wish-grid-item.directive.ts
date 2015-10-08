/// <reference path="../../main.d.ts"/>

import WishItemCtrl from './WishItemCtrl';

class WishGridItemCtrl extends WishItemCtrl {
  constructor(
    // super's dependencies
    $injector
  ) {
      super($injector);
  }
}

function wishItem() {
  return {
    restrict: 'E',
    scope: {
      wish: '='
    },
    templateUrl: 'layers/components/wish-items/wish-grid-item.directive.view.html',
    controller: WishGridItemCtrl,
    controllerAs: 'vm',
    bindToController: true
  }
}

export {wishItem as default};
