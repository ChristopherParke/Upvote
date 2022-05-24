import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faPlus, faUpLong, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faPlus, faUpLong, faArrowUp);

createApp(App).use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
