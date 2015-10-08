class WishesCtrl {
  wishes: any;
  owners: any;
  view: string;

  setView(view) {
    this.view = view;
  }
  isGridView() {
    return this.view === 'grid';
  }
  isListView() {
    return this.view === 'list';
  }

  constructor(
      Owner, /*: loopback.IOwner <- interface in the making */
      Wish /*: loopback.IWish <- interface in the making */
  ) {

      this.view = 'grid';

      this.owners = Owner.find();
      this.wishes = Wish.find();
  }

}

export { WishesCtrl as default };
