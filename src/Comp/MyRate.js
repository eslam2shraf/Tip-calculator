export default function MtRate({handelPres , myPres ,children}) {

    return (
      <div>
         {children}
      <select value={myPres} onChange={(e)=>handelPres(e.target.value)}>
           
         <option value="0" >Dissatisfaied(0%)</option>
         <option value="5">It Was OK(5%)</option>
         <option value="10"  >It Was good(10%)</option>
         <option value="20"  >Amazing(20%)</option>

      </select>
      </div>
    );
  }
  