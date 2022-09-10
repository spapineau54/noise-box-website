import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />

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
