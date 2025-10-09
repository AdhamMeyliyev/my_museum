import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './layouts/layout/Layout'

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
			<Layout>
				<Routes>
					<Route path='/' element={<Layout><h1>salom</h1></Layout>} />
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
