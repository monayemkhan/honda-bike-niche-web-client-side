import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import AllBike from './Pages/MoreBikes/MoreBikes';
import Purchase from './Pages/Purchase/Purchase';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AddBike from './Pages/Dashboard/AdminDashboard/AddBike/AddBike';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Shared/Login/Login/Login';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Register from './Pages/Shared/Login/Register/Register';
import ManageAllOrder from './Pages/Dashboard/AdminDashboard/ManageAllOrder/ManageAllOrder';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';

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
              <AllBike></AllBike>
            </Route>
            <Route path="/purchase">
              <Purchase></Purchase>
            </Route>
            <Route path="/addBike">
              <AddBike></AddBike>
            </Route>
            <Route path="/addReview">
              <AddReview></AddReview>
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
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </Route>
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
