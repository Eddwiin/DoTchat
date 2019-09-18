import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from '../components/login/login.component';


const routing = (
    <Router>
        <Route exact path="/login" component={LoginComponent}></Route>
        <Route exact path="/registration"></Route>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));