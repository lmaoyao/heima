export default [
    {
      path:"/",
      redirect:"/home"
    },
    {
        path:"/home",
        component:()=>import("../components/home.vue")
    },
    {
        path:"/list",
        component:()=>import("../components/list.vue")
    },
    {
        path:"/add",
        component:()=>import("../components/add.vue")
    },
    {
        path:"/my",
        component:()=>import("../components/my.vue")
    }
]