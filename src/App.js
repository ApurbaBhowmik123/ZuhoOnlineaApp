import Navbar from "./component/Navbar";
import Beauty from "./page/Beauty";
import Gadgets from "./page/Gadgets";
import Grocery from "./page/Grocery";
import Jewellery from "./page/Jewellery";
import Kids from "./page/Kids";
import Men from "./page/Men";
import Women from "./page/Women";
import Watch from "./page/Watch";
import Travel from "./page/Travel";
import Addtocart from "./page/Addtocart";
import Wishlist from "./page/Wishlist";
import User from "./page/User";
import Login from "./page/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./page/Signup";
import Home from "./page/Home";
import Footer from "./component/Footer";
import UserProfileModal from "./component/UserProfileModal"
import Myprofile from "./component/Myprofile";




function App() {
  return (
    // <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Addtocart />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/user" element={<UserProfileModal />} /> */}
        <Route path="/myprofile" element={<Myprofile />} />



      </Routes>
      <Footer />
    </BrowserRouter>
    // </>
  );
}

export default App;
