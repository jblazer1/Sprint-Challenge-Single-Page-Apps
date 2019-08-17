import React from "react";
import { Route, NavLink } from "react-router-dom";

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
// import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
      {/* <TabNav /> */}
      {/* <AppRouter /> */}
    </main>
  );
}
