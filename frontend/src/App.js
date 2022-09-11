import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import hero from "./images/destroy_hero.jpeg";
import hitw from "./images/hitw.jpeg";
import logo from "./images/tnbnewlogo.jpeg";

function App() {
	return (
		<div>
			<Navbar logo={logo} />

			<main>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
