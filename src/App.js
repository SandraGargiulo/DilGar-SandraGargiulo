import './App.css';

import Navbar from './components/NavBar/NavBar';
// import Counter from './Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div className="App">
      <Navbar />
      {/* <Counter /> */}
      <ItemListContainer greeting='1' />
    </div>
  );
}

export default App;