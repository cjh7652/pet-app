
import {Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage';
import AboutPage from './page/AboutPage';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import QuickButton from './componenets/QuickButton';

function App() {
  return (
    <div className="App">
		<Header />
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/about" element={<AboutPage />} />
		</Routes>
		<Footer />
		<QuickButton />
    </div>
  );
}

export default App;
