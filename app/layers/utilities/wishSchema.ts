class WishSchema {

  ownerId: string;
  title: string;
  description: string;
  imageUrl: string;
  shopUrl: string;
  price: number;
  isActive: boolean;
  addedDate: string;
  modifiedDate: string;
  buyAt: string[];

  constructor() {
    
      this.ownerId = '';
      this.title = '';
      this.description = '';
      this.imageUrl = '';
      this.shopUrl = '';
      this.price = 0;
      this.isActive = true;
      this.addedDate = new Date().toString();
      this.modifiedDate = new Date().toString();
      this.buyAt = [];

  }
}

export {WishSchema as default};
