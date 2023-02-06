import './App.css';
import ResponsiveAppBar from './components/Navbar'
import BasicTextFields from './components/Search'
// import ResultF from './components/ResultF'
import ResultT from './components/ResultT'



function App() {
  return (
    <div className="App">

      <ResponsiveAppBar />
      <BasicTextFields />
      {/* <ResultF /> */}
      <ResultT />
    </div>

  );
}

export default App;
