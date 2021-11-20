import React from "react"
import BatingScreen from "./Components/BatingScreen";
import Form from "./Screen/Form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminDashBoard from "./Screen/AdminDashBoard";
function App() {
  return (
    <div style={{width:"100%"}}>

      <Switch>
        <Route  path="/" exact  component={ BatingScreen }>
       
        </Route>
        <Route path="/adminpanel" component={Form}>
        </Route>
        <Route  path="/matchDet"  component={AdminDashBoard} />
        </Switch>


    {/* <BatingScreen /> */}
    {/* <Form /> */}
    </div>
  );
}

export default App;
