import Userlisting from "../components/Userlisting";
import Userprofile from "../components/Userprofile";

//Add all the application routes here
const indexRoutes = [
  { path: "/", component: <Userlisting /> },
  { path: "/:id", component: <Userprofile /> },
];

export default indexRoutes;
