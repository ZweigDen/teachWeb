import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.esm-browser.js';
import loginModal from './loginModal.js';
import customerProduct from './customerProductModal.js';
import showProduct from './showProductModal.js';


const app = createApp({
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io",
            apiPath: "jimnycourse",
            products: [],
            product:{},
        }
    },
    components: {
        loginModal,
        customerProduct,
        showProduct
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        login() {
            this.$refs.login.openModal();
        },
        // 取得顧客商品列表
        getProducts() {
            const api = `${this.apiUrl}/api/${this.apiPath}/products`;
            axios.get(api)
                .then(res => {
                    if (res.data.success) {
                        this.products = res.data.products;
                    }
                })
        },
        showProduct(item) {
            const api = `${this.apiUrl}/api/${this.apiPath}/product/${item.id}`;
            axios.get(api)
                .then(res => {
                    if (res.data.success) {
                        this.product = res.data.product;
                        this.$refs.showModal.openModal();
                    } else {
                        console.log(res);
                    }
                }).catch(err=>{
                    console.log(err);
                })
        }
    }
});
app.mount('#app');