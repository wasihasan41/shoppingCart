const cardsContainer = document.querySelector('.cards-container')
cardsContainer.className = 'cardsContainer'
const products = [
  {
    image  : './assets/bag.png',
    rate : 40,
  },
  {
    image  : './assets/cloth.png',
    rate : 20,
  },
  {
    image  : './assets/shoes.png',
    rate : 80,
  },
  {
    image  : './assets/spects.png',
    rate : 60,
  }
];

function createCard(products){
  const card = document.createElement('div')
  card.className = 'card'

  const image = document.createElement('img')
  image.src = products.image
  card.appendChild(image)

  const rate = document.createElement('div')
  rate.className = 'rate'
  rate.innerHTML = products.rate
  card.appendChild(rate)

  const button = document.createElement('button')
  button.className = 'cartBtn'
  button.textContent = 'Add to Cart'
  card.appendChild(button)
  button.addEventListener('click', counterBtn)

  return card
}
products.forEach((product)=>{
  const card = createCard(product)
  cardsContainer.appendChild(card)
})

function counterBtn(event){

  event.target.remove()
  const test = document.createElement('button');
}
