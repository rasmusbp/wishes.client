class WishItemCtrl {
    deletedFlag: IFlag;
    wish: any;
    busyFlag: IFlag;
    isEditMode: boolean;

    notify: any;
    private MyUser: any;
    private $q: ng.IQService;
    defer :any;
    Flag: IFlagConstructor;

    isAuthenticated() {
      return this.MyUser.isAuthenticated();
    }
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
      private $injector
    ) {

      this.MyUser = $injector.get('User');
      this.$q = $injector.get('$q')
      this.defer = $injector.get('defer');
      this.notify = $injector.get('notify');
      this.Flag = $injector.get('Flag');

      this.busyFlag = new this.Flag('isBusy', this);
      this.deletedFlag = new this.Flag('isDeleted', this);

    }
}

export { WishItemCtrl as default };
