import React,{Component} from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import D from "./D";
import E from "./E";
import F from "./F";

export default class Summary extends Component {
    render(){
        return (
            <Router>
                <div>
                    <ul className="box1">
                        <li><Link to="/summary">后端</Link></li>
                        <li><Link to="/summary/e">前端</Link></li>
                        <li><Link to="/summary/f">移动中心</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/summary" component={D}/>
                        <Route path="/summary/e" component={E}/>
                        <Route path="/summary/f" component={F}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}