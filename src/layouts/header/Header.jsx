import { useState } from 'react'
import { Link } from 'react-router-dom'
import './HeaderStyle.scss'
import "./HeaderRWDStyle.scss"

const Header = () => {
	const [menuActive, setMenuActive] = useState(false)

	// menyu bosilganda yopiladigan funksiya
	const closeMenu = () => setMenuActive(false)

	return (
		<div className='container'>
			<header className='header'>
				{/* Header Logo */}
				<Link className='header_logo' to='/' onClick={closeMenu}>
					Kashkadarya Travel
				</Link>

				{/* Navbar start */}
				<nav className={`navbar ${menuActive ? 'active' : ''}`}>
					<ol className='nav_list'>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/' onClick={closeMenu}>
								Home
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/about' onClick={closeMenu}>
								About Us
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/destinations' onClick={closeMenu}>
								Destinations
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/tours' onClick={closeMenu}>
								Tours
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/shop' onClick={closeMenu}>
								Shop
							</Link>
						</li>
						<li className='nav_item'>
							<Link className='nav_item_link' to='/blogs' onClick={closeMenu}>
								Blogs
							</Link>
						</li>

						{/* Mobil versiyada login tugmalar ham menyuga tushadi */}
						<div className='mobile_login_btn'>
							<Link to='/signin' className='signIn_btn' onClick={closeMenu}>
								Sign In
							</Link>
							<Link to='/signup' className='signUp_btn' onClick={closeMenu}>
								Sign Up
							</Link>
						</div>
					</ol>
				</nav>
				{/* Navbar end */}

				{/* Login buttons — faqat desktopda */}
				<div className='login_btn'>
					<Link to='/signin' className='signIn_btn'>
						Sign In
					</Link>
					<Link to='/signup' className='signUp_btn'>
						Sign Up
					</Link>
				</div>

				{/* Hamburger icon */}
				<div
					className={`hamburger ${menuActive ? 'active' : ''}`}
					onClick={() => setMenuActive(!menuActive)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</header>
		</div>
	)
}

export default Header
