import { createRouter, createWebHistory } from "vue-router";

import invoiceIndex from '../components/invoices/index.vue';

import invoiceNew from '../components/invoices/new.vue'

import notFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: invoiceIndex,

    }
    ,
    {
        path: '/:pathMatch(.*)*',
        component:notFound
    }
    ,
    {
        path: '/invoices/new',
        component:invoiceNew
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes

})
export default router;
