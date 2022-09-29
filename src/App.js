import './App.css';
import Catagory from './components/Catagory/Catagory';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
function App() {
  return (
    <div className='App.css'>
        <Header></Header>
        <Catagory></Catagory>
        <Question></Question>
    </div>
  );
}

export default App;
