import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.esm-browser.js';
import deleteModal from "./deleteModal.js";
import addEditModal from "./addEditModal.js";
import pageModal from "./paginationModal.js";

let productModal = {}; // 定義接近全域變數
let delModal;

const app = createApp({
    data() {
        return {
            api: {
                apiUrl: "https://vue3-course-api.hexschool.io",
                apiPath: "jimnycourse"
            },
            products: [],
            product: {},
            isNew: false,
            pagination: {}
        }
    },
    components: {
        deleteModal,
        addEditModal,
        pageModal
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common['Authorization'] = token;

        // Bootstrap 實體
        productModal = new bootstrap.Modal(document.getElementById('productModal'));
        delModal = new bootstrap.Modal(document.getElementById('delModal'));

        this.getProducts();
    },
    methods: {
        // get產品列表
        getProducts(page = 1) {
            const url = `${this.api.apiUrl}/api/${this.api.apiPath}/admin/products?page=${page}`;
            axios.get(url) // 請求
                .then((res) => {
                    if (res.data.success) {
                        this.products = res.data.products;
                        this.pagination = res.data.pagination;
                        console.log(this.pagination)
                    } else {
                        alert(res.data.message); // 帶入錯誤
                    }
                }).catch(err => {
                    console.log(err);
                })
        },
        // 刪除單產品
        deleteProduct(item) {
            this.product = item;
            delModal.show();
        }, 
        // 打開修改或新增
        openModal(isNew, item) {
            this.isNew = isNew;
            if (this.isNew) {
              this.product = {
                // imagesUrl: [],
              };
            } else {
              this.product = {...item};
            }
            productModal.show();
          },
        // 登出
        logout(){
      
            window.location = 'index.html';
          }
    }
});
app.mount('#app');