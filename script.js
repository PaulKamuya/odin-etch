const container = document.querySelector('#container')
const changeBtn = document.querySelector('#change-grid')

function createTiles(value){

  container.textContent = '' //this makes a new grid every time the function is called

  for (let i = 0; i < value; i++){
    const row = document.createElement('div')
    row.className = 'row'
    
    for (let j = 0; j < value; j++){
      const col = document.createElement('div')
      col.className = 'tile'
      row.appendChild(col)

      col.addEventListener('mouseover', (e) => {
        const tile = e.target
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        tile.style.backgroundColor = '#' + randomColor
      })

    }
    container.appendChild(row)
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

  createTiles(amount)

})


//add a funtion for everytime you hover a box
  //make the background 10% opacity
  //every time the user hovers the same box it gets darker
  //when the user reachs 10 clicks the box is fully that color