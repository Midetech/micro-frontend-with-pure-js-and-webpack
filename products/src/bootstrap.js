import faker from "faker";

const mount = (el) => {
  let products = "";
  for (let i = 0; i < 2; i++) {
    const name = faker.commerce.productName();
    const description = faker.commerce.productDescription();
    const price = faker.commerce.price();
    products += `<div style="border: 1px solid black; margin-bottom: 10px; padding: 20px;">
    <h6>Name: ${name}</h6>
    <p>Description: ${description}</p>
    <p>Amount: #${price}</p>
    </div>`;
  }

  el.innerHTML = products;
};


if (process.env.NODE_ENV === 'development') {

    const el = document.querySelector('#products-list');


    //Assuming we don't have an element 

    if (el) {
        mount(el);
    }
}

export { mount };
