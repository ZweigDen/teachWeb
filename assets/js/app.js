import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.esm-browser.js';
import loginModal from './loginModal.js';


const app = createApp({
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io",
            apiPath: "jimnycourse",
        }
    },
    components: {
        loginModal
    },
    mounted() {
    },
    methods: {
        login(){
            this.$refs.login.openModal();
        },
    }
});
app.mount('#app');