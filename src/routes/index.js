import Userlisting from "../components/Userlisting/Userlisting";
import Userprofile from "../components/Userprofile/Userprofile";

//Add all the application routes here
const indexRoutes = [
  { path: "/", component: <Userlisting /> },
  { path: "/:id", component: <Userprofile /> },
];

export default indexRoutes;
