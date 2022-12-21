import { useState } from "react";
export function Counter() {
  // camelCase
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  //conditional styling
  const likeStyles ={
    color: like >= 10 ?"green" :"deepskyblue",
    fontSize:"18px",
  };
  const disLikeStyles ={
    color: disLike >= 10 ?"red" :"deepskyblue",
    fontSize:"18px",
  };
  return (
    <div>
      {/* camelCase*/}
      {like-disLike >=10 ? <h3>You are Awesome 🤩🤩</h3> : null}
      <button style={likeStyles} onClick={() => setLike(like + 1)}>
        👍 {like}
        </button>
      <button style={disLikeStyles} onClick={() => setDisLike(disLike + 1)}>
        👎 {disLike}
      </button>
    </div>
  );
}
