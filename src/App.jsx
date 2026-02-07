import { useState } from "react";
import "./App.css";
import FilterOption from "./components/FilterOption";
import Users from "./pages/Users";

function App() {
  const [filterBy, setFilterBy] = useState("");
  const [filterSelected, setFilterSelected] = useState(false);
  return (
    <>
      <FilterOption
        setFilterBy={setFilterBy}
        setFilterSelected={setFilterSelected}
      />
      <Users filterBy={filterBy} filterSelected={filterSelected} />
    </>
  );
}

export default App;
