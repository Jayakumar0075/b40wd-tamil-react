import { Counter } from "./Counter";

//object destructuring (ES6)
export function User({ pic, name }) {
  //console.log(props, typeof props);
  //const {pic,name}=props; // object destructuring (ES6)
  return (
    <section>
      <img className="user-profile-pic" src={pic} alt={name} />
      <h2 className="User-name">
        Hello,<span className="user-first-name"> {name}</span> 🎉🎉🎉🎉👍💕
      </h2>;
      <Counter />
    </section>
  );
}
