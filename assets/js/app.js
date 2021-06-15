import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.esm-browser.js';
import loginModal from './modal/loginModal.js'; //登入模型
import customerProduct from './modal/customerProductModal.js'; //產品列表模型
import showProduct from './modal/showProductModal.js'; //產品資訊模型
import cartModal from './modal/cartModal.js'; //購物車模型
import checkout from './modal/checkoutModal.js'; //付款模型


const app = createApp({
    data() {
        return {
            // 讀取效果
            loadingStatus: "",
            apiUrl: "https://vue3-course-api.hexschool.io",
            apiPath: "jimnycourse",
            products: [],
            product: {},
            // 表單
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
            // 購物車列表
            carts: {},

        }
    },
    components: {
        loginModal,
        customerProduct,
        showProduct,
        cartModal,
        checkout
    },
    mounted() {
        this.getProducts();
        this.getCart();
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
        addCart(id, qty = 1) {
            this.loadingStatus = id;
            const cart = {
                product_id: id,
                qty
            };
            const api = `${this.apiUrl}/api/${this.apiPath}/cart`;
            axios.post(api, { data: cart })
                .then(res => {
                    if (res.data.success) {
                        // 改購物車icon
                        this.loadingStatus = '';
                        this.getCart();
                    } else {
                        console.log(res)
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        // 產品明細
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
                }).catch(err => {
                    console.log(err);
                })
        },
        // 取得購物車列表
        getCart() {
            const api = `${this.apiUrl}/api/${this.apiPath}/cart`;
            axios.get(api)
                .then(res => {
                    if (res.data.success) {
                        this.carts = res.data.data;
                    } else {
                        console.log(res)
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        // 購物車
        openCart() {
            this.$refs.cart.openModal();
        },
        // 身除單品項
        deleteProduct(id) {
            const api = `${this.apiUrl}/api/${this.apiPath}/cart/${id}`;
            axios.delete(api)
                .then(res => {
                    if (res.data.success) {
                        this.getCart();
                    } else {
                        console.log(res)
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        // 刪除所有購物車
        deleteAllCart() {
            const api = `${this.apiUrl}/api/${this.apiPath}/carts`;
            axios.delete(api)
                .then(res => {
                    if (res.data.success) {
                        this.getCart();
                    } else {
                        console.log(res);
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }
});
app.mount('#app');