export default {
    path: "/shop",
    component: _ =>
        import ("@pages/shop"),
    name: "shop",
    meta: {
        flag: true
    }
}