import { Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={MoviesPage} />
      <Route path="/movie/:id" exact={true} component={DetailPage} />
    </div>
  );
}

export default App;
