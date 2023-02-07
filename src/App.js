import './App.css';
import ResponsiveAppBar from './components/Navbar'
import SearchFields from './components/Search'
import ResultF from './components/ResultF'
import ResultT from './components/ResultT'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'



function App() {


  const [result, setResult] = useState(null);
  const state = useSelector((state) => state.store.result);

  useEffect(() => {
    setResult(state)
  }, [state, result]);

  const handleResult = res => {
    setResult(res);
  };

  return (
    <div className="App">

      <ResponsiveAppBar />
      <SearchFields handleResult={handleResult} />
      {result !== null ? result ? <ResultT /> : <ResultF /> : ''}

    </div>

  );
}

export default App;
