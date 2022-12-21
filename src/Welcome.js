export function Welcome({name}) {
    // named export
    //console.log(props, typeof props);
    //const {pic name}= props;// Object destructuring (ES6)
    return(
      <section> 
        <h1 className= "User-name">
          Hello,<span className="user-first-name"> {name}</span> 🎉🎉👍💕
          </h1>
          </section>
    );
  }

  const double=(n)=>n*2;

  export{ Welcome,double};

