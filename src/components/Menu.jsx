import MenuItem from './MenuItem'
import '../styles/MenuPage.css'
import ScoreDisplay from './ScoreDisplay'

const repoLink = 'https://github.com/mateusznurzynski/pokemon-memory-card'

const openRepo = () => {
  window.open(repoLink, '_blank')
}

function Menu({ onStatusChange, highScore }) {
  return (
    <div className='menu'>
      <MenuItem
        text='START'
        onClick={() => {
          onStatusChange('game')
        }}
      />
      <MenuItem
        text='HOW TO PLAY?'
        onClick={() => {
          onStatusChange('instructions')
        }}
      />
      <MenuItem
        text='GITHUB REPO'
        onClick={() => {
          openRepo()
        }}
      />
      <ScoreDisplay highScore={highScore} />
    </div>
  )
}

export default Menu
