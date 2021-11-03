import './App.css';
import Videos from './Videos';
import {data} from './data';

const App = () => {
  return (
    <>
    <Videos videos={data}/>
    </>
  );
}

export default App;
