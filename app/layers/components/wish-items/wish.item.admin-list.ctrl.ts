/// <reference path="../../main.d.ts"/>

class wishItemAdminCtrl {
    deletedFlag: IFlag;
    wish: any;
    busyFlag: IFlag;
    updateWish() {
      var deferredLoader = this.defer(this.busyFlag.switchOn);
      return this.wish.$save()
          .then(deferredLoader.cancel)
          .then(this.busyFlag.switchOff);
    }
    deleteWish() {
      alertify.confirm('Er du sikker?', (yes) => {
        if ( yes ) {
          var deferredLoader = this.defer(this.busyFlag.switchOn);
          return this.wish.$delete()
            .then(deferredLoader.cancel)
            .then(this.busyFlag.switchOff)
            .then(this.deletedFlag.switchOn);
        }
      });
    }
    constructor(
      private goToState,
      private $scope : ng.IScope,
      private $timeout : ng.ITimeoutService,
      private defer : IDefer,
      Flag: IFlagConstructor
    ) {

      // TODO: Find a better way to inject the Wish instead of $parent
      this.wish = $scope.$parent['wishItemMainCtrl'].wish;

      this.busyFlag = new Flag('isBusy', this);
      this.deletedFlag = new Flag('isDeleted', this);

    }
}

export { wishItemAdminCtrl as default };
