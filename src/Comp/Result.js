
export default function Result({tip,myPres,FriendPres,handelReset}) {
    const avg=((myPres/100)+(FriendPres/100))/2;
    const total=tip+(tip*avg)
    return (
      <div>
       <p>You Pay{total}({tip}+{tip*avg}) </p>
       <button onClick={handelReset}>Reset</button>
      </div>
    );
  }
  