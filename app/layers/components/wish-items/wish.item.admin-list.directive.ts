/// <reference path="../../main.d.ts"/>

import WishItemCtrl from './WishItemCtrl';

class wishItemAdminListCtrl extends WishItemCtrl {
  constructor(
    // super's dependencies
    $q: ng.IQService,
    $scope : ng.IScope,
    defer : IDefer,
    notify,
    Flag: IFlagConstructor,

    // local dependencies
    private viewport
  ) {
      super($q, $scope, defer, notify, Flag);
      this.isEditMode = true;
  }
}

function wishItemAdminList() {
  return {
    restrict: 'E',
    scope: {
      wish: '='
    },
    transclude: true,
    templateUrl: 'layers/components/wish-items/wish.item.admin-list.directive.view.html',
    controller: wishItemAdminListCtrl,
    controllerAs: 'vm',
    bindToController: true
  }
}

export { wishItemAdminList as default};
