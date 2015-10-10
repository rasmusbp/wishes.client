/// <reference path="../../main.d.ts"/>

import WishItemCtrl from './WishItemCtrl';

class WishQuickActions {
  constructor(
    private goToState
  ) {
  }
}

function wishQuickActions() {
  return {
    restrict: 'E',
    scope: {
      controller: '='
    },
    templateUrl: 'layers/components/wish-items/wish-quick-actions.directive.view.html',
    controller: WishQuickActions,
    controllerAs: 'vm',
    bindToController: true
  }
}

export { wishQuickActions as default};
