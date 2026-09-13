const container = document.querySelector('#container')
const changeBtn = document.querySelector('#change-grid')

function createTiles(n){

  container.textContent = '' //this makes a new grid every time the function is called
  container.style.display = 'flex' // shows the container when the button is pressed

  const tilePercentage = 100 / n
  const totalTiles = n*n;
  

  for (let i = 0; i < totalTiles; i++){
    const tile = document.createElement('div')
    tile.className = 'tile'
    tile.style.width = `${tilePercentage}%`
    tile.style.height = `${tilePercentage}%`
    tile.addEventListener('mouseover', setColour)
    container.appendChild(tile)
  }
}

const setColour = (e) => { 
  const tile = e.target
  const colourString = randomHexColour()
  console.log(colourString)
  tile.style.backgroundColor = colourString
}

function randomHexColour(){
  const randomColour = Math.floor(Math.random() * 16777216)
  let hex = randomColour.toString(16)
  while (hex.length < 6){
    hex = '0' + hex
  }
  return '#' + hex
}

changeBtn.addEventListener('click', () => {
  let amount = +prompt('Set the new grid size')

  if (amount > 100){
    alert('Number too high grid set to 100x100')
    amount = 100

  } else if (amount < 10 || !amount){
    alert('Grid set to 10x10')
    amount = 10

  } else {
    alert(`Grid set to ${amount}x${amount}`)
  }

  createTiles(amount)

})