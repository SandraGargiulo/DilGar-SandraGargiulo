import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/>} />
          <Route path='/detail/:productId/' element= {<ItemDetailContainer />}/>
    
        </Routes>
        {/**<footer/> */}
      </BrowserRouter>

    </div>
  );
}

export default App;