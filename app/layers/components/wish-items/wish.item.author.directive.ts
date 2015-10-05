/// <reference path="../../main.d.ts"/>

import WishItemCtrl from './WishItemCtrl';

class WishItemAuthorCtrl extends WishItemCtrl {

    owners: any;
    wish: any;
    isUserDone: boolean; // updated in view

    submit( ) {
        this.updateWish()
          .then(() => {
            if ( this.isUserDone ) {
              this.goToState.admin();
            } else {
              this.$state.reload();
            }
          });
    }
    constructor(
      // super's dependencies
      $q: ng.IQService,
      $scope : ng.IScope,
      defer : IDefer,
      notify,
      Flag: IFlagConstructor,

      // local dependencies
      private goToState,
      private $state: ng.ui.IStateService,
      Owner /*: loopback.IOwner <- interface in the making */
    ) {

      super($q, $scope, defer, notify, Flag);
      this.isUserDone = false;
      this.owners = Owner.find();

    }
}

function wishItemAuthor() {
  return {
    restrict: 'E',
    scope: {
      wish: '=',
      isEditMode: '='
    },
    transclude: true,
    templateUrl: 'layers/components/wish-items/wish.item.author.directive.view.html',
    controller: WishItemAuthorCtrl,
    controllerAs: 'vm',
    bindToController: true
  }
}

export { wishItemAuthor as default};