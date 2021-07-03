import React from 'react'
import { a } from './store'
import { useParams } from 'react-router'
const Disc = () => {
  const z = useParams()
  // console.log('Paramas value', z.id)
  const b = [...a, a]
  console.log(b[3])
  return (
    <article
      className='disc_css'
      style={{
        display: 'flex',
      }}
    >
      <img
        src={b[z.id - 1].image}
        alt=''
        style={{
          flex: '0.2',
          marginTop: '20px',
          marginLeft: '20px',
        }}
      />
      <div style={{ flex: '0.6' }}>
        <h1>Hello World</h1>
      </div>
    </article>
  )
}

export default Disc

// {
//   a.map(({ name, image, price, emoji, text, id }) => (
//     <article>
//       <div>
//         <img src={image} alt='' style={{ width: '100%', height: 'auto' }} />
//       </div>
//     </article>
//   ))
// }