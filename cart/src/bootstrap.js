import faker from "faker";


const mountCart = (el) => {
  const cartTotal = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

  el.innerHTML = cartTotal;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mountCart(el);
  }
};

export { mountCart };
