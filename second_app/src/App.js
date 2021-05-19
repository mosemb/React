import AllmeetUpsPage from "./pages/Allmeetups";
import NewmeetUpsPage from "./pages/Newmeetups";
import FavoritesPage from "./pages/Favorites"
import { Route } from "react-router";
import Layout from "./components/layout/Layout";



function App() {
  return (

    <Layout>
      <switch>
      <Route path = "/" exact={true}>
        <AllmeetUpsPage/>
      </Route>

      <Route path = "/newmeetups">
        <NewmeetUpsPage/>
      </Route>

      <Route path = "/favorites">
        <FavoritesPage/>
      </Route>
      </switch>
    </Layout>
  );
}

export default App;
