import React from "react";
import {HashRouter as Router,Route,Switch,Link} from "react-router-dom";
import Doc from "../pages/Doc/Doc";
import Summary from "../pages/Summary/Summary";
import "../style/style.scss";



const getRouter = () =>(
    <Router>
        <div> 
            <ul className="nav">
                <li><Link to="/">文档</Link></li>
                <li><Link to="/summary">每日总结</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Doc}/>
                <Route path="/summary" component={Summary}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;