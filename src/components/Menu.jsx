import MenuItem from "./MenuItem";

const openRepo = ()=>{
	window.open('https://github.com/mateusznurzynski/pokemon-memory-card', '_blank')
}

function Menu() {
	return ( <div className="menu">
		<MenuItem text='START' />
		<MenuItem text='HOW TO PLAY?' />
		<MenuItem text='GITHUB REPO' onClick={()=>{openRepo()}}/>
	</div> );
}

export default Menu;