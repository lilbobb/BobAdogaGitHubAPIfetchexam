import { createApp } from "vue";
import App from "./App.vue";
import myHome from "./components/myHome.vue";
import myRepoList from "./components/myRepoList.vue";
import RepoDetails from "./components/RepoDetails.vue";
import { createRouter, createWebHistory } from "vue-router";
import pageNotFound from "./components/pageNotFound.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: myHome,
    },
    {
      path: "/myRepoList",
      component: myRepoList,
    },
    {
      path: "/data/:id",
      component: RepoDetails,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
    {
      path: "/:catchAll(.*)",
      component: pageNotFound,
    },
  ],
});

createApp(App).use(router).mount("#app");