import VueRouter from "vue-router";
import  routes from "./routes"
let router = new VueRouter({
    routes,
    linkActiveClass:"current"
})
export default router