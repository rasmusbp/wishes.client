class WishesCtrl {
  wishes: any;
  owners: any;
  view: string;

  isBusyFlag: IFlag;

  selectedOwner: string;

  isAuthenticated() {
    return this.MyUser.isAuthenticated();
  }

  setView(view) {
    this.view = view;
  }
  isGridView() {
    return this.view === 'grid';
  }
  isListView() {
    return this.view === 'list';
  }

  getOwner( wish ) {
    if ( !wish ) return;
    return this.owners.find(( owner ) => owner.id === wish.ownerId );
  }

  filterGridBy = this.selectedOwner;
  sortGridByOptions = ['owner-name'];
  sortGridBy = 'owner-name';

  removeWishFromArray( removedWish ) {
      this.wishes.forEach(( wish, index ) => {
        if ( wish === removedWish ) {
          this.wishes.splice( index, 1 );
        }
      });
  }

  onWishDelete( wish ) {
    this.$timeout(() => this.removeWishFromArray( wish ), 1000);
  }

  constructor(
      private MyUser,
      private $timeout : ng.ITimeoutService,
      Flag : IFlagConstructor,
      Owner, /*: loopback.IOwner <- interface in the making */
      Wish /*: loopback.IWish <- interface in the making */
  ) {

      this.isBusyFlag = new Flag('isBusy', this, true);

      this.view = 'grid';
      this.wishes = undefined;

      this.selectedOwner = undefined;

      // Resolve `owners` and `wishes` and set isBusy state to false,
      this.owners = Owner.find(null, ( owners ) => {
        Wish.find(null, ( wishes ) => {

          this.wishes = wishes.filter(( wish ) => {
            return owners.some(( owner ) => owner.id === wish.ownerId);
          });

          this.isBusyFlag.switchOff();

        });
      });

  }

}

export { WishesCtrl as default };
