import './Global.scss';
import './Responsive.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Federation from './Pages/Federation';
import Gallary from './Pages/Gallary';
import Musobaqa from './Pages/Musobaqa';
import News from './Pages/News';
import Contact from './Pages/Contact';
// import ErrorPage from './Pages/ErrorPage';
import Header from './Components/Home/Header';
import Nav from './Components/Home/Nav';
import FooterNav from './Components/Home/FooterNav';
import FooterBottom from './Components/Home/FooterBottom';

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Nav />
        <Route path='/' element={<Home />}/>
        <Route path='/federation' element={<Federation />}/>
        <Route path='/gallary' element={<Gallary />}/>
        <Route path='/musobaqa' element={<Musobaqa />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/allnews' element={<News />}/>
        {/* <Route path='*' element={<ErrorPage />}/> */}
      </Routes>
        <FooterBottom />
        <FooterNav />
    </div>
  );
}

export default App;
