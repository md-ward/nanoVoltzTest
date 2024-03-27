import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import NotFoundPage from "./not_found";
import DashboardPage from "./dashboard/view/Dashboard_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
