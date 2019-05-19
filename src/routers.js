// components imports
import Home from './components/Home';
import Technologies from './components/Technologies';
import mySkills from './components/mySkills';
import connectMe from './components/connectMe';
import myProjects from './components/myProjects.vue';

// PROJECTS
import occassionToday from './components/projects/occasonToday.vue';
import zoomZoom from './components/projects/zoomZomm.vue';
export const routes = [
  { path: '', component: Home },
  { path: '/technologies', component: Technologies },
  { path: '/mySkills', component: mySkills },
  { path: '/connectMe', component: connectMe },
  { path: '/myProjects', component: myProjects },
  { path: '/project/occassionToday', component: occassionToday },
  { path: '/project/zoomZoom', component: zoomZoom }
];
