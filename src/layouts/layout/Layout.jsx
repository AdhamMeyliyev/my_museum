import Footer from '../footer/Footer'
import Header from '../header/Header'
import './LayoutStyle.scss'

const Layout = ({children}) => {
	return (
		<div className='layout_wrapper'>
			<div className='layout_header'>
				<Header />
			</div>
			<main className='layout_main'>{children}</main>
			<div className='layout_footer'>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
