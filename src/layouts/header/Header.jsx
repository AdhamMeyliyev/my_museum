import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderStyle.scss'
import './HeaderRWDStyle.scss'

const Header = () => {
 const [menuActive, setMenuActive] = useState(false);

	// menyu yopish funksiyasi
	const closeMenu = () => setMenuActive(false);

	return (
		<div className='container'>
			<header className='header'>
				{/* Header Logo */}
				<NavLink className='header_logo' to='/' onClick={closeMenu}>
					Kashkadarya Travel
				</NavLink>

				{/* Navbar */}
				<nav className={`navbar ${menuActive ? 'active' : ''}`}>
					<ol className='nav_list'>
						<li className='nav_item'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? 'nav_item_link active' : 'nav_item_link'
								}
								onClick={closeMenu}
							>
								Home
							</NavLink>
						</li>
						<li className='nav_item'>
							<NavLink
								to='/about'
								className={({ isActive }) =>
									isActive ? 'nav_item_link active' : 'nav_item_link'
								}
								onClick={closeMenu}
							>
								About Us
							</NavLink>
						</li>
						<li className='nav_item'>
							<NavLink
								to='/destinations'
								className={({ isActive }) =>
									isActive ? 'nav_item_link active' : 'nav_item_link'
								}
								onClick={closeMenu}
							>
								Destinations
							</NavLink>
						</li>
						<li className='nav_item'>
							<NavLink
								to='/tours'
								className={({ isActive }) =>
									isActive ? 'nav_item_link active' : 'nav_item_link'
								}
								onClick={closeMenu}
							>
								Tours
							</NavLink>
						</li>
						<li className='nav_item'>
							<NavLink
								to='/shop'
								className={({ isActive }) =>
									isActive ? 'nav_item_link active' : 'nav_item_link'
								}
								onClick={closeMenu}
							>
								Shop
							</NavLink>
						</li>
						<li className='nav_item'>
							<NavLink
								to='/blogs'
								className={({ isActive }) =>
									isActive ? 'nav_item_link active' : 'nav_item_link'
								}
								onClick={closeMenu}
							>
								Blogs
							</NavLink>
						</li>

						{/* Mobil versiyada login tugmalar */}
						<div className='mobile_login_btn '>
							<NavLink to='/signin' className='signIn_btn' onClick={closeMenu}>
								Sign In
							</NavLink>
							<NavLink to='/signup' className='signUp_btn' onClick={closeMenu}>
								Sign Up
							</NavLink>
						</div>
					</ol>
				</nav>

				{/* Login buttons — desktop uchun */}
				<div className='login_btn'>
					<NavLink to='/signin' className='signIn_btn'>
						Sign In
					</NavLink>
					<NavLink to='/signup' className='signUp_btn'>
						Sign Up
					</NavLink>
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
