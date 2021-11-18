import React from "react"
import BatingScreen from "./Components/BatingScreen";
import Form from "./Screen/Form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>

      <Switch>
        <Route  path="/" exact  component={ BatingScreen }>
       
        </Route>
        <Route path="/adminpanel" component={Form}>
          
        </Route>
        </Switch>


    {/* <BatingScreen /> */}
    {/* <Form /> */}
    </div>
  );
}

export default App;
