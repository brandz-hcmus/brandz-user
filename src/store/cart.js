import { makeObservable, action, observable, computed } from 'mobx';

class Cart {
  cartItems = [];
  constructor() {
    makeObservable(this, {
      addItem: action,
      cartItems: observable,
      cartLen: computed,
      deleteItems: action,
    });
  }

  get cartLen() {
    return this.cartItems.length;
  }

  addItem(item) {
    const found = this.cartItems.findIndex((e) => e.id === item.id);

    if (found !== -1) {
      item.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
  }

  deleteItems(ids) {
    let temp = [...this.cartItems];
    ids.forEach((id) => {
      temp = temp.filter((item) => item.id !== id);
    });
    this.cartItems = temp;
  }
}

export const cart = new Cart();
