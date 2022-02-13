import { authStore } from "../../store/authStore";


export default (to, from, next) => {
    // alert(;hello)
    if(to.meta.authenticated)
    {
        const user = authStore();
        user
        .fetchProfile()
        .then(r => {
          if (r.status == 200) {
            return next({name: profile});
          }
        })
        .catch(() => {
            console.log('hey');
            next('/login');
        });
    }

        if (!to.meta.authenticated) {
            return next();
        }
        next('/login');
    }
