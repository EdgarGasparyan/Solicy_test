import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header.jsx";
import Instructions from "./Components/Instructions";
import Main from "./Components/Main";
import { initialState, reducer } from "./state/state";
import { createContext, useReducer } from "react";


export const ReducerContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ReducerContext.Provider value={{ state, dispatch }}>
        <div className="app">
          <div className="left">
            <Header />
            <div className="main_container">
              <Main />
            </div>
            <Footer />
          </div>
          <div className="right">
            <Instructions />
          </div>
        </div>
      </ReducerContext.Provider>
    </>
  );
}

export default App;
