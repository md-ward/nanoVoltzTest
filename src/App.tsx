import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import ChartsPage from "./dashboard/view/charts_page";
import NotFoundPage from "./not_found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="dashboard"
          element={<ChartsPage></ChartsPage>}
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
