import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store' //store.js 파일에서 export에 default를 쓰지 않았으므로 {} 안에 적어주어야 한다.

Vue.config.productionTip = false

new Vue({
    store,  //store를 등록하기
    render: h => h(App),
}).$mount('#app') 

/**
main.js에서는 vue 인스턴스가 생성되며 index.html의 #app과 연결된다.
또한 render함수에서 App.vue를 맨처음 보여주게끔 연결한다.
 */