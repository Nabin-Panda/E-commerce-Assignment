import "./bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./Screens/ProductDetail";
import cartScreen from "./Screens/cartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/product/:id" Component={ProductDetail} />
            <Route path="/cart/:id?" Component={cartScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="register" Component={RegisterScreen} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
