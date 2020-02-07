import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./Components/LogIn"
import Policy from './Components/Policy';
import CustomerAndVehicleDetail from './Components/CustomerAndVehicleDetail/CustomerAndVehicleDetail';


 const Router = () => (
     <Switch>
        <Route exact path="/"  component={Login} />
        <Route exact path="/policy"  component={Policy} />
        <Route path="/customerAndVehicleDetail" component={CustomerAndVehicleDetail}/>
        {/* <Route path="/:id" render = {()=> (<p> Page not found 404 </p>)}/> */}
     </Switch>
  )

  export default Router;