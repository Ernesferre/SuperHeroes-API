
import {useState} from 'react';
import AppRouter from './routers/AppRouter';
import {InfoContext} from './Context/index'

function App() {

  const [info, setInfo] = useState([]);
  // const [ arrayHeroes, setArrayHeroes ] = useState([1,2,3,4]);
 
  return (
 
   <InfoContext.Provider value={{
     info,
     setInfo,
     
    }}>
      
      <AppRouter/>
    </InfoContext.Provider>
   
  )
}

export default App;
