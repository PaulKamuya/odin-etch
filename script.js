const container = document.querySelector('#container')
const changeBtn = document.querySelector('#change-grid')


function createTiles(){
  for (let i = 0; i < 16; i++){
    const row = document.createElement('div')
    row.className = 'row'
    for (let j = 0; j < 16; j++){
      const col = document.createElement('div')
      col.className = 'tile'
      row.appendChild(col)
    }
    container.appendChild(row)
  }
}

createTiles()

//add a function for when the mouse enters
  //when it enters change the colour of the background
  //when it leave revert/remove the colour

//add a funtion for when you click a box
  //when you click a box the background is 10% black
  //every time the user clicks the same box it gets darker
  //when the user reachs 10 clicks the box is fully black

//add a function for when you right click a coloured box
  //when the user right clicks a box the box gets lighter
  