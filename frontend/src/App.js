import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import {HomeScreen} from "./screens/HomeScreen";
import {AboutScreen} from "./screens/AboutScreen";
import {GalleryScreen} from "./screens/GalleryScreen";
import React from "react";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import PressScreen from "./screens/PressScreen";
import DonateScreen from "./screens/DonateScreen";

function App() {
  return (
      <BrowserRouter>
          <MyNavbar />
          <Container className="w-100 p-0 m-0" fluid>
              <Routes>
                  <Route path="/" element={<HomeScreen />} exact/>
                  <Route path="/about" element={<AboutScreen />} />
                  <Route path="/about/gallery" element={<GalleryScreen />}/>
                  <Route path="/press" element={<PressScreen />}/>
                  <Route path="/donate" element={<DonateScreen />}/>
                  <Route path="/signup" element={<SignUpScreen />}/>
                  <Route path="/signin" element={<SignInScreen />}/>
              </Routes>
          </Container>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
