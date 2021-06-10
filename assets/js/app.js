const apiUrl = 'https://vue3-course-api.hexschool.io';
const apiPath = "jimnycourse";

const app = Vue.createApp({
    data() {
        return {
            products: [],
            product: {},
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                }
            },
            cart: {},
        };
    },
    methods: {
        getProducts() {
            const api = `${apiUrl}/api/${apiPath}/products`;
            axios.get(api)
                .then(res => {
                    if (res.data.success) {
                        this.products = res.data.products;
                    } else{
                        console.log(res);
                    }
                }).catch(err => {
                    console.log(err);
                })
        },
        getCart(){
            const api = `${apiUrl}/api/${apiPath}/cart`;
            axios.get(api)
            .then(res=>{
                if(res.data.success){
                    this.cart = res.data.data
                }
            })
        }
    },
    mounted() {
        this.getProducts();
        this.getCart();
    },
});


app.mount('#app');