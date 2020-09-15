import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      component:()=>import("@/views/Login"),
      meta:{title:"登录"}
     },
     {
      path: '/',
       component:()=>import("@/views/Layout"),
       meta:{title:"小晴管理系统"},
       redirect:"/index",
       children:[
        {
          path: '/index',
           component:()=>import("@/views/Index"),
           meta:{title:"后台首页"}
          },
          {
            path: '/menu',
             component:()=>import("@/views/System/Menu"),
             meta:{title:"菜单管理"}
            },
            {
              path: '/role',
               component:()=>import("@/views/System/Role"),
               meta:{title:"角色管理"}
              },
              {
                path: '/user',
                 component:()=>import("@/views/System/User"),
                 meta:{title:"管理员管理"}
                },
            
       ]

      }
     
  ]
})


router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next();
})

export default router;
