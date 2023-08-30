import { useState } from 'react'

function LoadingScreen() {
  const [tail, setTail] = useState('')

  const updateTail = () => {
    switch (tail.length) {
      case 0:
        setTail('.')
        break
      case 1:
        setTail('..')
        break
      case 2:
        setTail('...')
        break
      case 3:
        setTail('')
        break
      default:
        setTail('')
    }
  }

  setTimeout(() => {
    updateTail()
  }, 100)

  return (
    <div className='loading-screen'>
      <h2>Loading{tail}</h2>
    </div>
  )
}

export default LoadingScreen
