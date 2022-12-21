import { useState } from "react";
import "./App.css";
import{Welcome,double} from"./Welcome";// named import

console.log(double(80));

// App component = view + logic (Declaration)
function App() {
  const names=["Jayakumar","selvi","subha","Manju",];
  const users = [
    {
      name: "Arjun",
      pic:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
      
    },
    {
      name: "selva",
      pic:"https://media.istockphoto.com/id/1074638206/photo/side-view-long-beard-business-man-portrait.jpg?s=612x612&w=is&k=20&c=1ti4s8QpTTET91yt2t1Jokq2GJWIOWhZw1xNcT_jHBY="
    },
    {
      name:"Siva",
      pic:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
    },
  ];
  return(
   <div className="App">
      {/*<User 
      name="Arul"
       pic= "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <User 
      name="Ajay"
       pic="https://media.istockphoto.com/id/1074638206/photo/side-view-long-beard-business-man-portrait.jpg?s=612x612&w=is&k=20&c=1ti4s8QpTTET91yt2t1Jokq2GJWIOWhZw1xNcT_jHBY="
       />
      <User
       name="Siva" 
      pic="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  />*/}
  {/* <Welcome name="Jayakumar"/>
   <Welcome name="selvi"/>
<Welcome name="subha"/>*/}

 { names.map((nm) => (
  <Welcome name={nm} />
 ))} 
 {users.map((usr) => (
  <User name={usr.name} pic={usr.pic} />
 ))}
 </div>
  );
}
function Counter(){
  // camelCase
  let [like,setLike]= useState(0);
  let [dislike,setDislike]= useState(0);
  return(
    <div>
      {/* camelCase*/}
      <button onClick={()=> setLike(like+ 1)}>👍 {like}</button>
      <button onClick={()=> setDislike(dislike+ 1)}>👎 {dislike}</button>
      </div>
  );
}


//object destructuring (ES6)
function User({pic,name}) {
  //console.log(props, typeof props);
  //const {pic,name}=props; // object destructuring (ES6)
  return(
    <section>
      <img className="user-profile-pic" src={pic} alt={name}/>  
      <h2 className= "User-name">
        Hello,<span className="user-first-name"> {name}</span> 🎉🎉🎉🎉👍💕
        </h2>;
        <Counter/>
      </section>
  );
}


// object destructuring (ES6)
//user Component (Declartion)
//function User(props) {
  //console.log(props, typeof props);
  //return(
    //<section>
      //<img className="user-profile-pic" src={props.pic} alt={props.name}/>  
      //<h1 className= "User-name">
        //Hello,<span className="user-first-name"> {props.name}</span> 🎉🎉
        //</h1>;
      //</section>
  //);
//}

export default App; // default export

//ctrl +` -> Terminal open/close
// npm start
//parent (data) -> child (data)
// CI/CD- Continous Integration & Continous Deployment




