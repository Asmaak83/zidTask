import { createRouter, createWebHistory } from "vue-router";
import HomeApp from "@/components/global/HomeApp.vue"
import StatsApp from "@/components/global/StatsApp.vue"
import SkillsApp from "@/components/global/SkillsApp.vue";


const routes = [
 {
  path: "/",
  name: "HomeApp",
  component: HomeApp,
 },
 {
  path:"/about",
  name:"StatsApp",
  component: StatsApp,
 },
 {
  path :"/help",
  name:"app",
  component: SkillsApp,
 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
