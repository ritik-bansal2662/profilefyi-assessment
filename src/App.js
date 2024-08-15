import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Cart from "./screens/Cart";

function App() {
  return (

    <Router>
      <div>
        <Header />
        <main className="container mx-auto mt-16 p-10">
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
