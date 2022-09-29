import logo from './logo.svg';
import './App.css';
import Element from './components/Element/Element';
import Header from './components/Header/Header';
import AddedElement from './components/AddedElement/AddedElement';
function App() {
  return (
    <div className='App.css'>
        <Header></Header>
        <div className='product-part'>
          <Element></Element>
        </div>
    </div>
  );
}

export default App;
