import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

// ekranlar
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import SBMList from "./components/SBMList";

// router
import {BrowserRouter,Route,Switch} from 'react-router-dom'

// redux
import {Provider} from 'react-redux'
import {configureStore} from './store/configureStore'

const store = configureStore();

store.dispatch({
    type : "FETCH_USERS_PENDING",
    payload : axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response);
            return  response.data;
            })
            .catch((err) => {

            })
});

const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/list" component={SBMList} />
                    <Route render={() => {
                        return (<h1>Böyle bir sayfa yok</h1>)
                    }} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

var root = document.getElementById('app');
ReactDOM.render(<App />, root);
