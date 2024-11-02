import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import Product_Inside from "./pages/Product_Inside";
import About from "./pages/About";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/product" element={<Product_Inside />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/check" element={<CheckOut />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myaccount" element={<MyAccount />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;