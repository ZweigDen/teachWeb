import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.esm-browser.js';
import loginModal from './loginModal.js';
import customerProductModal from './customerProductModal.js';


const app = createApp({
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io",
            apiPath: "jimnycourse",
            products:[],
        }
    },
    components: {
        loginModal,
        customerProductModal
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        login(){
            this.$refs.login.openModal();
        },
        // 取得顧客商品列表
        getProducts(){
            const api = `${this.apiUrl}/api/${this.apiPath}/products`;
            axios.get(api)
            .then(res=>{
                if(res.data.success){
                    this.products = res.data.products;
                }
            })
        }
    }
});
app.mount('#app');