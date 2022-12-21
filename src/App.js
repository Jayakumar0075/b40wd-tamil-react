import "./App.css";
import { User } from "./User";
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
      

 { /*names.map((nm) => (
  <Welcome name={nm} />
 ))*/} 
 {users.map((usr) => (
  <User name={usr.name} pic={usr.pic} />
 ))}
 </div>
  );
}
export default App; // default export






