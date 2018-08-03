import React,{Component} from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import A from "./A";
import B from "./B";
import C from "./C";

export default class Doc extends Component {
    render(){
        return (
            <Router>
                <div>
                    <ul className="box1">
                        <li><Link to="/">SQL规范</Link></li>
                        <li><Link to="/doc/b">Java基础开发规范</Link></li>
                        <li><Link to="/doc/c">Java后端服务开发规范</Link></li>
                    </ul> 
                    <Switch>
                        <Route exact path="/" component={A}/>
                        <Route path="/doc/b" component={B}/>
                        <Route path="/doc/c" component={C}/>
                    </Switch>
                </div>
                
            </Router>
        )
    }
}