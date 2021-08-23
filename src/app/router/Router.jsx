import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../component/Home";
import Layout from "../component/Layout";
import TicketDetail from "../component/TicketAdd";
import TicketAdd from "../component/TicketDetail";

const BasePage = () => {
    return (
        <Router>
            <Switch>
                <Route path="/ticket/add" component={TicketAdd}/>
                <Route path="/ticket/detail" component={TicketDetail} />
                <Route path="/" component={Home} exact/>
            </Switch>
        </Router>
    )

}
export default BasePage;