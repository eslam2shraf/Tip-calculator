import './App.css';
import Tips from './Comp/Tip';
import MtRate from './Comp/MyRate';
import FriendRate from './Comp/FriendRate';
import Result from './Comp/Result';
import { useState } from 'react';
function App() {

  /////////////////////////////

  const[tip,setTip]=useState(0)
function handelTip(e){
    const newTip = parseFloat(e) ||"";
    setTip(newTip);
    console.log(newTip);
}

  //////////////////////////////
  const [myPres,setMyPres]=useState(0)

  function handelPres(e){
      console.log(e)
  setMyPres(Number(e))
  
  }
  
  //////////////////////////////

  const [FriendPres,setFriendPres]=useState(0)

  function handelFrendPres(e){
      console.log(e)
      setFriendPres(Number(e))
  
  }

function handelReset(){
  setFriendPres(0)
  setMyPres(0)
  setTip(0);

}
  ///////////////////////////
  return (
    <div className="App">
     <Tips tip={tip}  handelTip={handelTip}/>
     <MtRate myPres={myPres} handelPres={handelPres} ><p>How Did You Like The Services ? </p></MtRate>
     {/* <FriendRate FriendPres={FriendPres} handelFrendPres={handelFrendPres} /> */}
     <MtRate myPres={FriendPres} handelPres={handelFrendPres} > <p>How Did You Friend The Services ? </p></MtRate>
     {tip>0 ?
   <Result tip={tip} myPres={myPres} FriendPres={FriendPres} handelReset={handelReset} />
   :""
     }
     
  
    </div>
  );
}

export default App;
