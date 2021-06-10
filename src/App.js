import React, { useState } from "react";
import { Route, Switch } from "react-router";

import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import ContactUs from "./pages/Contact";
import Footer from "./components/Footer";

import JoinForm from "./components/JForm";
import CourseView from "./components/CourseView";

import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";
import SummerProgram from "./pages/SummerProgram";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Dropdown open={open} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <Homepage />
                <Aboutpage />
                <ContactUs />
              </>
            );
          }}
        />
        <Route path="/join-bb" component={JoinForm} />
        <Route path="/summer-program" component={SummerProgram} />
        <Route path="/course/:sub/:course" component={CourseView} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/cookie-policy" component={CookiePolicy} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
