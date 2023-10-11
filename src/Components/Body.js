import React,{ Component } from "react";
class Body extends Component {
  constructor(){
    super();
    this.state={count:0,};
    
  }
  increment = () => {
    this.setState((prevState) => ({
      count:prevState.count+1}));
  };
  decrement = ()=>{
    this.setState((prevState) => ({
      count:prevState.count - 1}));
    };
  render(){
    return(
      <div align="center">
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button type='click' onClick={this.increment}>Increment</button><br></br>
        <br></br>
        <button type='click' onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

/*const Body = () => {
  return (
    <div>
        <h3 align="center">LOGIN</h3>
        <form align="center">
            <label for="Username">Username:</label>
            <input type="text" id="Username" placeholder="Enter your Username"/><br></br>
            
             <br></br>
            <label for="Password">Password:</label>
            <input type="password" id="Password" placeholder="Enter your Password"/><br></br>

             <br></br>
            <label for="Email">Email:</label>
            <input type="email" id="Email" placeholder="Enter your Email"/><br></br>

             <br></br>
            <label for="Phone">Phone:</label>
            <input type="phone" id="Phone" placeholder="Enter your phone number"/><br></br>

            <br></br>
            <input type="submit" value="submit"/>
        </form>
         
    </div>
        
           
  )
}*/

export default Body