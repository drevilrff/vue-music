/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 10:55:39
 * @LastEditTime: 2019-08-28 17:12:38
 * @LastEditors: Please set LastEditors
 */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from "vue-lazyload"

import './common/stylus/index.styl'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router
})
