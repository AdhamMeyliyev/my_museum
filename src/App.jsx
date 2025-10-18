import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './layouts/layout/Layout'
import About from './pages/about/About'

// Sahifalar
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Destinations from "./pages/Destinations";
// import Tours from "./pages/Tours";
// import Shop from "./pages/Shop";
// import Blogs from "./pages/Blogs";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout><h1>salom</h1></Layout>} />
				<Route path='/about' element={<About/>} />
			</Routes>
		</Router>
	)
}

export default App
