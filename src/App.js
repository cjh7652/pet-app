import { createContext, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage';
import AboutPage from './page/AboutPage';
import AboutPage1 from './page/AboutPage1';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import QuickButton from './componenets/QuickButton';
import SignUpForm from './page/SignUpForm';
import data from './data/data'

const DataContext=createContext();
function App() {
	let [petdata] = useState(data);
	//console.log(petdata)
  return (
    <DataContext.Provider value={{petdata}}>
    	<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/about/:id" element={<AboutPage1 />} />
				<Route path="/signup" element={<SignUpForm />} />
				{/* <Route path="/about/:id" element={<AboutPage1 />} /> */}
			</Routes>
			<Footer />
			<QuickButton />
	    </div>
    </DataContext.Provider>
  );
}

export default App;
export {DataContext};
