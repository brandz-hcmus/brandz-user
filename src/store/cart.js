import { makeObservable, action, observable, computed } from 'mobx';

class Cart {
  cartItems = [];
  showModal = false;
  dataVersion = 0;
  constructor() {
    makeObservable(this, {
      dataVersion: observable,
      addItem: action,
      cartItems: observable,
      cartLen: computed,
      deleteItems: action,
      showModal: observable,
      toggleModal: action,
      increaseQuantity: action,
      decreaseQuantity: action,
    });
  }

  get cartLen() {
    return this.cartItems.length;
  }

  addItem(item) {
    const found = this.cartItems.findIndex((e) => e.id === item.id);

    if (found !== -1) {
      this.cartItems[found].quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.dataVersion++;
  }

  increaseQuantity(id) {
    const found = this.cartItems.findIndex((e) => e.id === id);
    this.cartItems[found].quantity++;
    this.dataVersion++;
  }

  decreaseQuantity(id) {
    const found = this.cartItems.findIndex((e) => e.id === id);
    if (this.cartItems[found].quantity > 1) {
      this.cartItems[found].quantity--;
    }
    this.dataVersion++;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  deleteItems(ids) {
    let temp = [...this.cartItems];
    ids.forEach((id) => {
      temp = temp.filter((item) => item.id !== id);
    });
    this.cartItems = temp;
    this.dataVersion++;
  }
}

export const cart = new Cart();
