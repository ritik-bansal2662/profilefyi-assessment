import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (

    <Router>
      <div>
        <Header />
        <main className="container w-full h-screen mt-16 p-10">
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
