import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/product/:id" Component={ProductScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}
