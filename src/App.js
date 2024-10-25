import {createContext, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage';
import AboutPage from './page/AboutPage';
import AboutPage2 from './page/AboutPage2';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import QuickButton from './componenets/QuickButton';
import SignUpForm from './page/SignUpForm';
import data from './data/data';
import UploadPage from './componenets/UploadPage';
import ProductPage from './componenets/ProductPage';

const DataContext=createContext();
function App() {
	let [petdata]=useState(data);
	//console.log(petdata);

  return (

    	<DataContext.Provider value={{petdata}}>
    		<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/about/:id" element={<AboutPage2 />} />
					<Route path="/signup" element={<SignUpForm />} />
					<Route path="/uploadpage" element={<UploadPage />} />
					<Route path="/products/:id" element={<ProductPage />} />
				</Routes>
				<Footer />
				<QuickButton />
		    </div>
    	</DataContext.Provider>

  );
}

export default App;
export {DataContext}
