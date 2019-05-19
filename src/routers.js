// components imports
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import mySkills from "./components/mySkills";
import connectMe from "./components/connectMe";
export const routes = [
  { path: "", component: Home },
  { path: "/technologies", component: Technologies },
  { path: "/mySkills", component: mySkills },
  { path: "/connectMe", component: connectMe }
];
