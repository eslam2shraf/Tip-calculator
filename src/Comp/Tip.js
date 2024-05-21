
export default function Tips({handelTip , tip}) {

    return (
      <div>
       <p>How Much Was The Bill ? </p>
       <input type="text" value={tip} onChange={(e)=>handelTip(e.target.value)}/>
      </div>
    );
  }
  