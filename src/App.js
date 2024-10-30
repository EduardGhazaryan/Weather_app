import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCuurentWeather } from './Redux/Slices/CurrentWeather/CurrentWeatherThunk';
import HomePage from './Pages/HomePage/HomePage';
import NotFound from './Components/NotFound/NotFound';
import NotFoundPage from './Pages/NotFoundPage.jsx/NotFoundPage';




function App() {

  const {loadingStatus} = useSelector((state)=>state.currentWeatherData)


  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getCuurentWeather({city:"Yerevan"}))

  },[])  

  return (
    <div className="App">
       <Nav/>
      <Routes>
        <Route path='/' element={loadingStatus === "rejected" ? <NotFound/> : loadingStatus === "fulfilled" ? <HomePage/> : ""}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
