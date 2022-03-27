import Userlisting from "../components/Userlisting";
import Userprofile from "../components/Userprofile";

const indexRoutes = [
  { path: "/", component: <Userlisting /> },
  { path: "/:id", component: <Userprofile /> },
];

export default indexRoutes;
