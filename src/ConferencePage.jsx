import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ConferenceDetails from "./ConferenceDetails";
import ConferenceList from "./ConferenceList";

const ConferencePage = ({ conferences }) => {
    return (<Router> 
        <Switch>
            <Route exact path="/:id" >
                <ConferenceDetails conferences={conferences} />
            </Route>
            <Route path="/">
            <ConferenceList conferences={conferences} />
            </Route>
        </Switch> 
    </Router>)
}

export default ConferencePage;