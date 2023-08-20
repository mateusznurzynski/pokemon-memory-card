function MenuItem({text, onClick}) {
	return ( <div onClick={onClick} className="menu-item">{text}</div> );
}

export default MenuItem;