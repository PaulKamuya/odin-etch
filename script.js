const container = document.querySelector('#container')
const changeBtn = document.querySelector('#change-grid')
const tileEffectBtn = document.querySelector('#rainbow')
const clearBtn = document.querySelector('#clear')

let tileAmount = 16

function createTiles(n){

  tileAmount = n

  container.textContent = '' 

  const tilePercentage = 100 / n
  const totalTiles = n*n;
  
  const fragment = new DocumentFragment(); 

  for (let i = 0; i < totalTiles; i++){
    const tile = document.createElement('div')

    tile.className = 'tile'
    tile.style.width = `${tilePercentage}%`
    tile.style.height = `${tilePercentage}%`

    let tileColour = null
    let hitCounter = 0

    tile.addEventListener('mouseenter', () => {
      if (hitCounter === 0){
        tileColour = randomHexColour()
        tile.style.backgroundColor = tileColour
      }

      if (hitCounter < 10){
        hitCounter = hitCounter + 1
        tile.style.opacity = hitCounter * 0.1
      }
    })
    
    fragment.append(tile)
  }
  container.appendChild(fragment)
}


function randomHexColour(){

  if(tileEffectBtn.textContent === 'Rainbow'){
    const randomColour = Math.floor(Math.random() * 16777216)
    let hex = randomColour.toString(16)
    while (hex.length < 6){
      hex = '0' + hex
    }
    return '#' + hex
  } else {
    return '#000'
  }
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

  tileAmount = amount
  createTiles(tileAmount)
})

createTiles(16)

let effects = true

tileEffectBtn.addEventListener('click', () => {
  effects = !effects

  effects ? tileEffectBtn.textContent = 'Rainbow'
    : tileEffectBtn.textContent = 'Black'
})


clearBtn.addEventListener('click', () => {
  createTiles(tileAmount)
})

