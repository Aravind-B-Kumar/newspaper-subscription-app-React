import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AddSub from './components/AddSub';
import ViewSub from './components/ViewSub';
import SearchSub from './components/SearchSub';
import DeleteSub from './components/DeleteSub';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddSub/>}/>
        <Route path='/view' element={<ViewSub/>}/>
        <Route path='/search' element={<SearchSub/>}/>
        <Route path='/delete' element={<DeleteSub/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
