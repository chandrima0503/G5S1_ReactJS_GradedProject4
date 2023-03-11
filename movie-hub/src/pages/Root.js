import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/sharedComponents/MainNavigation";

const Root = () => {
  const entireSearchData = useLoaderData();
  // console.log(movieDetailArray);
  return (
    <>
      <MainNavigation entireSearchData={entireSearchData} />
      <Outlet />
    </>
  );
};
export default Root;
