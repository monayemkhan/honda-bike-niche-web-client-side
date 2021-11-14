import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import Purchase from './Pages/Purchase/Purchase';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Shared/Login/Login/Login';
import Register from './Pages/Shared/Login/Register/Register';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import PrivateRoute from './Pages/Shared/Login/PrivateRoute/PrivateRoute';
import MoreBikes from './Pages/MoreBikes/MoreBikes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/bikes">
              <MoreBikes></MoreBikes>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboardHome">
              <DashboardHome></DashboardHome>
            </Route>
            <PrivateRoute path="/purchase/:bikeId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
