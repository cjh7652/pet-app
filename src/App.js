
import {Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage';
import AboutPage from './page/AboutPage';
import AboutPage1 from './page/AboutPage1';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import QuickButton from './componenets/QuickButton';
import SignUpForm from './page/SignUpForm';

function App() {
  return (
    <div className="App">
		<Header />
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/signup" element={<SignUpForm />} />
			{/* <Route path="/about/:id" element={<AboutPage1 />} /> */}
		</Routes>
		<Footer />
		<QuickButton />
    </div>
  );
}

export default App;
