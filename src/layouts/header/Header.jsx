import './HeaderStyle.scss'

const Header = () => {
	return (
		// Header start
		<div className='container'>
			<header className='header'>
				{/* Header Logo */}
				<span className='header_logo'>Kashkadarya travel</span>
				{/* Navbar start */}
				<nav className='navbar'>
					<ol className='nav_list'>
						<li className='nav_item'>Home</li>
						<li className='nav_item'>About Us</li>
						<li className='nav_item'>Destinations</li>
						<li className='nav_item'>Tours</li>
						<li className='nav_item'>Shop</li>
						<li className='nav_item'>Blogs</li>
					</ol>
				</nav>
				{/* Navbar end */}

				{/* Login buttons */}
				<div className='login_btn'>
					<button className='signIn_btn'>Sign In</button>
					<button className='signUp_btn'>Sign Up</button>
				</div>
			</header>
		</div>
		// Header end
	)
}

export default Header
