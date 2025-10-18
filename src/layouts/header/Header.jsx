import { Link } from 'react-router-dom'
import './HeaderStyle.scss'

const Header = () => {
	return (
		// Header start
		<div className='container'>
			<header className='header'>
				{/* Header Logo */}

				<Link className='header_logo' to='/'>
					Kashkadarya Travel
				</Link>

				{/* Navbar start */}
				<nav className='navbar'>
					<ol className='nav_list'>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/about'>
								About Us
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/destinations'>
								Destinations
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/tours'>
								Tours
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/shop'>
								Shop
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/blogs'>
								Blogs
							</Link>
						</li>
					</ol>
				</nav>
				{/* Navbar end */}

				{/* Login buttons */}
				<div className='login_btn'>
					<Link to='/signin' className='signIn_btn'>
						Sign In
					</Link>
					<Link to='/signup' className='signUp_btn'>
						Sign Up
					</Link>
				</div>

				
			</header>
		</div>
		// Header end
	)
}

export default Header
