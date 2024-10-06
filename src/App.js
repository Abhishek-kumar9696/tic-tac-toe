

import Board from './components/Board';
import './App.css'
// import Button from './components/Button';
// import CounterComponet from './components/CounterComponet';
import Header from './components/Header';
import Footer from './components/Footer';
// import List from './components/List';




function App() {
  return (
  //  <div className='div-container'>
  //   <Header/>
  //   <CounterComponet/>
  //   <List text = "eat"/> 
  //   <List text = "sleep"/> 
  //   <List text = "coding"/> 
  //   <List text = "repeat"/> 
  //   <Button/>
  //  </div>
    <div className = "app">
      <Header/>
      <Board /> 
      <Footer/>
    </div>

  );
}

export default App;
