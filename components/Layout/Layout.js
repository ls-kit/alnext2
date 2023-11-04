// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import init, { loadGeneral } from "../../modules/init";
// import { getSetting } from "../../utils/Helpers";

// const Layout = ({ children }) => {
//   const dispatch = useDispatch();
//   const general = useSelector((state) => state.INIT.general);

//   useEffect(() => {
//     dispatch(loadGeneral());
//   }, []);
//   return (
//     <>
//       <Navbar general={general} />
//       <div>{children}</div>
//       <Footer general={general} />
//     </>
//   );
// };
// export default Layout;
