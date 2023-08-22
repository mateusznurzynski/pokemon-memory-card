import MenuItem from "./MenuItem";

const repoLink = 'https://github.com/mateusznurzynski/pokemon-memory-card'

const openRepo = ()=>{
	window.open(repoLink, '_blank')
}

function Menu() {
	return ( <div className="menu">
		<MenuItem text='START' />
		<MenuItem text='HOW TO PLAY?' />
		<MenuItem text='GITHUB REPO' onClick={()=>{openRepo()}}/>
	</div> );
}

export default Menu;