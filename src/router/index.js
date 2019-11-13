import Vue from "vue";
import VueRouter from "vue-router";
import shouye from "./shouye";
import goupiao from "./goupiao";
import hot from "./hot";
import future from "./future";
import city from "./city";
import shop from "./shop"
import find from "./find"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: "/",
            redirect: "/shouye"
        },
        shouye,
        goupiao,
        hot,
        future,
        city,
        shop,
        find,
        {
            path: "/mine",
            component: _ =>
                import ("@pages/mine"),
            name: "mine",
            meta: {
                flag: false,
                requiredAuth: true
            }

        },
        {
            path: "/login",
            component: _ =>
                import ("@pages/login"),
            name: "login",
            meta: {
                flag: false,
                requiredAuth: false
            }

        },
        {
            path: "/list",
            component: _ =>
                import ("@pages/list"),
            name: "list",
            meta: {
                flag: false,
                requiredAuth: false
            }

        },
        {
            props: true,
            path: "/detail/:id/:name",
            component: _ =>
                import ("@pages/detail"),
            name: "detail",
            meta: {
                flag: false,
                requiredAuth: false
            }

        }
    ]
})
router.beforeEach((to, from, next) => {
    //console.log(to, from)
    if (to.path != "/login" && to.meta.requiredAuth) {
        if (localStorage.getItem("token")) {
            next()
        } else {
            next({ name: "login", params: { to: to.path } })
        }
    } else {
        next()
    }
})
export default router;