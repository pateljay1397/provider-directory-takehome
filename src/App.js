import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import indexRoutes from "./routes";
import { createHashHistory } from "history";

function App() {
  const history = createHashHistory();
  return (
    <Router history={history}>
      <Routes>
        {indexRoutes.map((route, key) => {
          return (
            <Route path={route.path} element={route.component} key={key} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
