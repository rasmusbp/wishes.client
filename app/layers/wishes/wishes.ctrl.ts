class WishesCtrl {
  wishes: any;
  constructor(
    Wish /*: loopback.IWish <- interface in the making */
  ) {
    this.wishes = Wish.find();
  }

}

export { WishesCtrl as default };
