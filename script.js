const cardsContainer = document.querySelector('.cards-container')
const calcBox = document.querySelector('.calc')
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
  rate.innerHTML = `${products.rate} rs`
  card.appendChild(rate)

  const button = document.createElement('button')
  button.className = 'cartBtn'
  button.textContent = 'Add to Cart'
  card.appendChild(button)
  button.addEventListener('click', () => counterBtn(button, products.rate))

  return card
}
products.forEach((product)=>{
  const card = createCard(product)
  cardsContainer.appendChild(card)
})


function counterBtn (button, rate) {
  const div = document.createElement('div');
  div.className = 'counterBtn'

  const minBtn = document.createElement('button')
  div.appendChild(minBtn)
  minBtn.className = 'minBtn'
  minBtn.textContent = '-'
  minBtn.addEventListener('click', ()=> minNum(counter, div, rate))

  const counter = document.createElement('p')
  div.appendChild(counter)
  counter.className = 'counter'
  counter.textContent = 0

  const addBtn = document.createElement('button')
  div.appendChild(addBtn)
  addBtn.className = 'addBtn'
  addBtn.textContent = '+'
  addBtn.addEventListener('click', ()=> addNum(counter, rate))

  button.replaceWith(div)
}

function addNum(counter, rate){
  counter.textContent++
  console.log(rate* counter.textContent)
  calcBox.textContent = rate* counter.textContent;
}

function minNum(counter, div, rate){
  counter.textContent--;
  calcBox.textContent = rate* counter.textContent;
  if(counter.textContent== 0){
    const button = document.createElement('button')
    button.className = 'cartBtn'
    button.textContent = 'Add to Cart'
    button.addEventListener('click', () => counterBtn(button, rate))
    div.replaceWith(button)
  }
}
