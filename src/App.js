import React from "react";
import { Route, NavLink } from "react-router-dom";
import { Tab } from "semantic-ui-react";

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import LocationList from "./components/LocationsList.js";
// import SearchForm from "./components/SearchForm.js";

import "./App.css";
import EpisodeList from "./components/EpisodeList.js";

// import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <NavLink exact to="/">
          Home Page
        </NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/locations">Locations</NavLink>
        <NavLink to="/episodes">Episodes</NavLink>
      </nav>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationList} />
      <Route path="/episodes" component={EpisodeList} />

      {/* <TabNav /> */}
      {/* <AppRouter /> */}
    </main>
  );
}
