import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getMovies} from "./actions/moviesActions"
import { CharactersPage } from './components/pages/characters/characters';
import { Movies } from './components/pages/home/home';
import { NavBar } from './components/navBar/navBar'; 
import './App.css';

function App() {

  const dispatch = useDispatch()
  dispatch(getMovies())

  return (
    <div className='App'> 
        <NavBar/>
      <Routes>
        <Route path='/' element={<Movies />}/>
        <Route path='/characters' element={<CharactersPage />}/>
      </Routes>
    </div>
  );
}

export default App;
