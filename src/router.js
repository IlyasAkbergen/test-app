import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from "./pages/Dashboard";
import CardForm from "./pages/CardForm";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          redirect: {
              name: 'dashboard'
          }
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard'
        },
        {
            path: '/card-form',
            component: CardForm,
            name: 'cardForm'
        }
    ]
})