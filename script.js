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
        tile.style.backgroundColor = 'black'
      })
      
    }
    container.appendChild(row)
  }
}



//add a function to change the grid size
  //when you press the button a pop up should appear
  //the prompt should ask how many square you want
  //IF the number is more than 100 set the squares to 100
    //let the user know you can enter a number more than 100
  //IF the number is less than 10 set the squares to 10
  //IF the number is more than 10 but less than or equal to 100 set that number of squares

  //fix this

  changeBtn.addEventListener('click', () => {
  let amount = +prompt('Set the new grid size')

  if (amount > 100){
    alert('Number too high grid set to 100x100')
    amount = 100
    createTiles(amount)

  } else if (amount < 10){
    alert('Number too low grid set to 100x100')
    amount = 10
    createTiles(amount)

  } else if (!amount){
    amount = 10
    createTiles(amount)
    return alert('Grid set to 10x10')

  } else createTiles(amount)

})



//add a function for when the mouse enters
  //when it enters change the colour of the background
  //when it leaves to stop colouring the box

//add a funtion for when you click a box
  //when you click a box the background is 10% black
  //every time the user clicks the same box it gets darker
  //when the user reachs 10 clicks the box is fully black

//add a function for when you right click a coloured box
  //when the user right clicks a box the box gets lighter