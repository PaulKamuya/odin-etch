const container = document.querySelector('#container')


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