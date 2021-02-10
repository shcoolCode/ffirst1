import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/homepage/Home";
import Student from "./pages/studentpage/Student";
import Parent from "./pages/parentpage/Parent";
import Teacher from "./pages/teacherpage/Teacher";
import Absent from "./pages/absentpage/Absent";
import Adminss from "./pages/Adminss";
import Festival from "./pages/festivalpage/Festival";
import Fire from "./pages/Fire";
import Library from "./pages/librarypage/Library";
import Question from "./pages/Question";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>

        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/student" component={Student} />
            <Route path="/teacher" component={Teacher} />
            <Route path="/parent" component={Parent} />

            <Route path="/festival" component={Festival} />
            <Route path="/library" component={Library} />
            <Route path="/absent" exact component={Absent} />

            <Route path="/question" component={Question} />
            <Route path="/adminss" component={Adminss} />
            <Route path="/fire" component={Fire} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
