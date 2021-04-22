import "./assets/reset.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Header from "./components/Header.vue";
import Triangle from "./components/Triangle.vue";
import InputText from "./components/Input-text.vue";
import RightSideNav from "./components/Right-side-nav.vue";
import LeftSideNavEntreprise1 from "./components/Left-side-nav-entreprise1.vue";
import LeftSideNavEntreprise2 from "./components/Left-side-nav-entreprise2.vue";
import LeftSideNavProfile1 from "./components/Left-side-nav-profile1.vue";
import LeftSideNavProfile2 from "./components/Left-side-nav-profile2.vue";
import LeftSideNavProfile3 from "./components/Left-side-nav-profile3.vue";

createApp(App)
  .use(router)
  .mount("#app");

createApp.config.productionTip = false;
createApp.component("Header", Header);

createApp.config.productionTip = false;
createApp.component("Triangle", Triangle);

createApp.config.productionTip = false;
createApp.component("InputText", InputText);

createApp.config.productionTip = false;
createApp.component("RightSideNav", RightSideNav);

createApp.config.productionTip = false;
createApp.component("LeftSideNavEntreprise1", LeftSideNavEntreprise1);

createApp.config.productionTip = false;
createApp.component("LeftSideNavEntreprise2", LeftSideNavEntreprise2);

createApp.config.productionTip = false;
createApp.component("LeftSideNavProfile1", LeftSideNavProfile1);

createApp.config.productionTip = false;
createApp.component("LeftSideNavProfile2", LeftSideNavProfile2);

createApp.config.productionTip = false;
createApp.component("LeftSideNavProfile3", LeftSideNavProfile3);
