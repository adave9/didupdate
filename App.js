import React from 'react';
import './App.css';
class App extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={favouritecolor:"red"};
    }
    componentDidMount(){
      setTimeout(() => 
      this.setState({favouritecolor:"yellow"}),1000
      )
    }
   
    componentDidUpdate(){
      document.getElementById("mydiv").innerHTML=
      "After update:"+this.state.favouritecolor;
    }
  render(){
    return <div>
                <p>
                    My favourite color is {this.state.favouritecolor}.
                </p>
                <div id="mydiv"></div>
            </div>;
  }
}
export default App;
