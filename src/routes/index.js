import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage';
import Map from '../views/Map';
import Testimonials from '../views/Testimonials';
import RecipeDetails from '../views/RecipeDetails';
import SearchResults from '../views/SearchResults'
import AboutUs from '../views/AboutUs'
import ContactUs from '../views/ContactUs';
Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/index',
        name: 'index',
        component: HomePage
        },
        {
            path: '/',
            name: '',
            component: HomePage
            },
        {
            path: '/Map',
            name: 'Map',
            component: Map
            },
         {
            path: '/Testimonials',
            name: 'Testimonials',
            component: Testimonials
            },
        {
            path: '/RecipeDetails',
            name: 'RecipeDetails',
            component: RecipeDetails
        },
        {
            path: '/SearchResults',
            name: 'SearchResults',
            component: SearchResults
        },
        {
            path: '/AboutUs',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/ContactUs',
            name: 'ContactUs',
            component: ContactUs 
        }

]
});


export default router