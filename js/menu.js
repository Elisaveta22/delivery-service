const restaurant = 'food-band';
const cardsMenu = document.querySelector('.cards-menu');

const renderItems = (data) => {
  data.forEach(({ name, description, price, image }) => {
    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `
    <img src="${image}" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">${name}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">${description}</div>
      </div>
      <div class="card-buttons">
        <button class="button button-primary button-add-cart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">${price} ₽</strong>
      </div>
      `;

    cardsMenu.append(div);
  });
};

fetch(`./db/${restaurant}.json`)
  .then((response) => response.json())
  .then((data) => renderItems(data))
  .catch((error) => {
    console.log(error);
  });
