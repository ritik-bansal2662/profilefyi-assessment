import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Cart from "./screens/Cart";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (

    <Router>
      <div>
        <Header />
        <ToastContainer />
        <main className="mx-auto mt-16 lg:p-10 md:p-5 p-0">
          <Routes>
            <Route path='/profilefyi-assessment/' element={<HomeScreen />} />
            <Route path='/profilefyi-assessment/cart' element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
