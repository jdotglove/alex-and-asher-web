import { createRouter, createWebHistory } from 'vue-router'
import PaymentManagementView from '@/views/PaymentManagementView.vue'
import ManagementView from '@/views/ManagementView.vue'
import RedirectToHtml from '@/components/RedirectToHtml.vue'
import HomeView from '@/views/HomeView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ShopView from '@/views/ShopView.vue'
import UserAgreementView from '@/views/UserAgreementView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUsView,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView,
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView,
    },
    {
      path: '/user-agreement',
      name: 'User Agreement',
      component: UserAgreementView,
    },
    {
      path: '/payment-management/:updateAuthToken',
      name: 'payment-management',
      component: PaymentManagementView
    },
    {
      path: '/alex-and-asher-admin',
      name: 'payment-management-admin',
      component: ManagementView
    }
  ]
})

export default router
