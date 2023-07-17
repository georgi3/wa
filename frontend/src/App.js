import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import {HomeScreen} from "./screens/HomeScreen";
import {AboutScreen} from "./screens/AboutScreen";
import {GalleryScreen} from "./screens/GalleryScreen";
import React from "react";
import EventScreen from "./screens/EventScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import PressScreen from "./screens/PressScreen";
import DonateScreen from "./screens/DonateScreen";
import VolunteeringScreen from "./screens/VolunteeringScreen";
import ActivityScreen from "./screens/ActivityScreen";
import WeeklyVolunteering from "./screens/WeeklyVolunteering";
import ClubVolunteering from "./screens/ClubVolunteering";
import EssentialsDonationScreen from "./screens/EssentialsDonationScreen";
import FundraiserScreen from "./screens/FundraiserScreen";
import FundraiserEventScreen from "./screens/FundraiserEventScreen";


function App() {
  return (
      <BrowserRouter>
          <Container className="w-100 p-0 m-0" fluid>
              <Routes>
                  <Route path="/" element={<HomeScreen />} exact/>
                  <Route path="/about" element={<AboutScreen />} />
                  <Route path="/about/gallery" element={<GalleryScreen />}/>
                  <Route path="/volunteer" element={<VolunteeringScreen />}/>
                  <Route path="/activity" element={<ActivityScreen />}/>
                  <Route path="/activity/weekly-volunteering" element={<WeeklyVolunteering />}/>
                  <Route path="/activity/fundraising" element={<FundraiserScreen />} />
                  <Route path="/activity/fundraising/:id" element={<FundraiserEventScreen />} />
                  <Route path="/activity/club-volunteering" element={<ClubVolunteering />}/>
                  <Route path="/activity/donate-essentials" element={<EssentialsDonationScreen />}/>
                  <Route path="/activity/:id" element={<EventScreen />}/>
                  <Route path="/press" element={<PressScreen />}/>
                  <Route path="/donate" element={<DonateScreen />}/>
                  <Route path="/signup" element={<SignUpScreen />}/>
                  <Route path="/signin" element={<SignInScreen />}/>
              </Routes>
          </Container>
      </BrowserRouter>
  );
}

export default App;
