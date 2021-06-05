import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";
import ContactUs from "./pages/Contact";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router";
import JoinForm from "./components/JForm";
import SummerProgram from "./pages/SummerProgram";
import CourseView from "./components/CourseView";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <Homepage />
                <Aboutpage />
              </>
            );
          }}
        />
        <Route path="/join-bb" component={JoinForm} />
        <Route path="/summer-program" component={SummerProgram} />
        <Route path="/course" component={CourseView} />
      </Switch>
    </>
  );
};
//<ContactUs />
//<Footer />

export default App;
