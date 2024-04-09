import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./Components/TopHeader";
import useTheme from "./Components/hooks/useTheme";
import Categories from "./Components/Categories";
import List from "./Components/List";
import Which from "./Components/Which";
import useCats from "./Components/hooks/useCats";

function App() {
  const { value, themeHandler } = useTheme();
  const [whichComponent, setWhichComponent] = useState("cats");
  //debounce
  //agar koi value do baar print ho rhi tu debounce ya strict mode ko remove krdo

  return (
    <div
      className={`${value === "dark" ? "darkBg" : ""}
      `}
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <TopHeader value={value} themeHandler={themeHandler} />

        <Which
          whichComponent={whichComponent}
          setWhichComponent={setWhichComponent}
        />
        {whichComponent === "cats" ? (
          <Categories/>
        ) : (
          <List />
        )}
      </div>
    </div>
  );
}

export default App;
