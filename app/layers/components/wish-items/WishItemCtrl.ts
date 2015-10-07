class WishItemCtrl {
    deletedFlag: IFlag;
    wish: any;
    busyFlag: IFlag;
    isEditMode: boolean;
    notify: any
    updateWish() {
      var deferredLoader = this.defer(this.busyFlag.switchOn);
      return this.wish.$save()
          .then(deferredLoader.cancel)
          .then(this.busyFlag.switchOff)
          .then(() => {
            this.notify('success',
              this.isEditMode ? 'wish_updated' : 'wish_created',
              this.wish.title
            );
          })
          .then( () => this.wish );
    }
    deleteWish() {

      var defer = this.$q.defer();
      this.notify('confirm', 'confirm_deletion', this.wish.title)
        .then((yes) => {
          if ( yes ) {
            var deferredLoader = this.defer(this.busyFlag.switchOn);
            this.wish.$delete()
              .then(deferredLoader.cancel)
              .then(this.busyFlag.switchOff)
              .then(this.deletedFlag.switchOn)
              .then(() => {
                this.notify('info', 'wish_deleted', this.wish.title);
              })
              .then(() => { defer.resolve(this.wish) });
          }
        });

      return defer.promise;

    }
    constructor(
      private $q : ng.IQService,
      private $scope : ng.IScope,
      private defer : IDefer,
      notify,
      private Flag: IFlagConstructor
    ) {

      this.notify = notify;
      this.busyFlag = new Flag('isBusy', this);
      this.deletedFlag = new Flag('isDeleted', this);

    }
}

export { WishItemCtrl as default };
