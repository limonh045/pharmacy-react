import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "./Layout/Index";
import Overview from "./pages/Overview";
import Drugs from "./pages/Drugs";
import Vendors from "./pages/Vendors";
import OrderHistory from "./pages/OrderHistory";
import { useSelector } from "react-redux";
function App() {
  
  const loggedIn = useSelector(state=>state.cart.logedIn)
  console.log(loggedIn);
  return (
    <div className="App" id="app">
      <Routes>
        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/overview" /> : <Login />}
        />
        <Route
          path="/"
          exact
          element={
            loggedIn ? <Navigate to="/overview" /> : <Navigate to="/login" />
          }
        ></Route>

        <Route path="/" exact  element={
            loggedIn ? <HomeLayout /> : <Navigate to="/login" />
          }>
          <Route path="/overview" element={<Overview />} />
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Route>

        {/* <Route path="/" element={<HomeLayout />}>

          <Route path="/overview" element={<Overview />} />
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/vendors" element={<Vendors/>} />
          <Route path="/order-history" element={<OrderHistory/>} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
