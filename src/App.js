import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (

    <Router>
      <div>
        <Header />
        <div className="w-full h-screen mt-16">
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
