import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LotDetails from "./pages/LotDetails"; // You’ll create this next
import Offers from "./pages/Offers"; // You’ll create this next

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lot/:id" element={<LotDetails />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </Router>
  );
};

export default App;
