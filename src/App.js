
import { Switch, Route, BrowserRouter} from "react-router-dom";
import { Component } from "react";
import Main from "./Main";
import Leftnav from "./Leftnav";
import Main2 from "./Main2";
import Main3 from "./Main3";

 class App extends Component{

  render(){
    return <BrowserRouter>
          <div>
    <Leftnav />
      <Switch>
       <Route  exact path="/" component={Main} />
       <Route  path="/main2"  component={Main2} />
       <Route  path="/main3"  component={Main3} />
      </Switch>
    </div>
    </BrowserRouter>
  }
  
 
}
export default App

