class AdminCtrl {
    wishes: any;
    owners: any;

    constructor(
        Owner, /*: loopback.IOwner <- interface in the making */
        Wish /*: loopback.IWish <- interface in the making */
    ) {
        this.owners = Owner.find();
        this.wishes = Wish.find();
    }

}

export { AdminCtrl as default };
