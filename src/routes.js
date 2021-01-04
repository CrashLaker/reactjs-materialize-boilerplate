

import Home from './Views/Home'
import About from './Views/About'

export default [
  {
    path: '/about', 
    component: About,
    props: {},
    title: 'About',
  },
  {
    path: '/', 
    component: Home,
    props: {},
    title: 'Home',
  },
]