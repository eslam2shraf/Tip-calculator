
export default function FriendRate({handelFrendPres,FriendPres}) {
    return (
      <div >
               <p>How Did Your Friend Like The Services ? </p>
      <select onChange={(e)=>handelFrendPres(e.target.value)}>
           
      <option value="0" >Dissatisfaied(0%)</option>
         <option value="5">It Was OK(5%)</option>
         <option value="10"  >It Was good(10%)</option>
         <option value="20"  >Amazing(20%)</option>

      </select>
      </div>
    );
  }
  