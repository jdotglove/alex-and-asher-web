import { createRouter, createWebHistory } from 'vue-router'
import PaymentManagementView from '@/views/PaymentManagementView.vue'
import ManagementView from '@/views/ManagementView.vue'
import RedirectToHtml from '@/components/RedirectToHtml.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: RedirectToHtml,
      props: { url: '/index.html' },
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: RedirectToHtml,
      props: { url: '/about-us.html' },
    },
    {
      path: '/shop',
      name: 'Shop',
      component: RedirectToHtml,
      props: { url: '/shop.html' },
    },
    {
      path: '/services',
      name: 'Services',
      component: RedirectToHtml,
      props: { url: '/services.html' },
    },
    {
      path: '/user-agreement',
      name: 'User Agreement',
      component: RedirectToHtml,
      props: { url: '/user-agreement.html' },
    },
    {
      path: '/payment-management',
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
