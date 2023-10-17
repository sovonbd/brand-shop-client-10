import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1>This is layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
