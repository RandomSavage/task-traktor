import { useState } from 'react'
import { Link } from 'react-router-dom'

const Lab = () => {
  //2d array generator
  // const make2Darray = (cols, rows) => {
  //   const arr = new Array(cols)
  //   for(let i = 0; i < arr.length; i +=1) {
  //     arr[i] = new Array(rows)
  //   }
  // }

  //gridmaker
  // let cols = 10
  // let rows = 10
  // const myArrs = []

  // for(let i = 0; i < cols; i += 1) {
  //   for(let j = 0; j < rows; j += 1) {
  //     myArrs.push(`${i},${j}`)
  //   }
  // }
  // console.log(`this is ${myArrs[1]}`)

  // From Map to 2d
  const [mappy, setMappy] = useState(
    [
      "xxxxxxxxxx",
      "oxooxxxxxx",
      "  xxooxx  "
    ]
  )

  // for(let i = 0; i < map.length; i += 1) {
  //   let row = document.createElement('div')
  //   row.classList.add('row')
  //   document.body.append(row)
  //   for(let j = 0; j < map[i].length; j +=1) {
  //     let col = document.createElement('div')
  //     col.classList.add('col')
  //     row.append(col)
  //   }
  // }


  return (
    <div className='container'>
      {
        mappy.map((row, index) => {
        return <div className='row' key={index}>{row.split('').map((cell, index) => {
          if(index % 2 === 0) {
            return <div className='column' key={index}>x</div>
          } else {
            return <div className='column odd' key={index}>x</div>
          }
        })}</div>
      })
      }
      <h4>Future Home of 2d Lab</h4>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Lab
