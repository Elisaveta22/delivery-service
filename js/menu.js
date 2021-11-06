const restaurant = 'food-band';

const renderItems = (data) => {
  data.forEach((element, index) => {
    console.log(data[index]);
  });
};

fetch(`./db/${restaurant}.json`)
  .then((response) => response.json())
  .then((data) => renderItems(data))
  .catch((error) => {
    console.log(error);
  });