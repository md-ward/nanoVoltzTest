import { Outlet } from "react-router-dom";
import Header from "./widgets/header";
import SideBar from "./widgets/sidebar";

// ! created the main ui layout
//! -1 header component that holds the app logo with nav bar ,search and profile image
// ! -2 side bar with icons
// ! -3 the Outlet component is render the wrapped child
const Layout = () => {
  console.count()
  return (
    <main className="min-h-screen w-screen overflow-hidden bg-red-100">
      <Header></Header>
      <SideBar></SideBar>
      <Outlet></Outlet>
    </main>
  );
};

export default Layout;
