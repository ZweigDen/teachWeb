export default {
    template: `
    <div class="px-7">
        <table class="table">
            <thead>
                <tr>
                    <th width="90">名稱</th>
                    <th width="60">售價</th>
                    <th width="60">數量</th>
                    <th width="60">總價</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="item in tempProduct.carts">
                    <tr>
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.product.price }}</td>
                        <td>{{ item.qty }}</td>
                        <td>{{ item.total }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
        <div class="text-right mb-8 h3">總價格＄{{ this.tempProduct.total }}元</div>
    </div>

    <v-form v-slot="{ errors }" @submit="createOrder" class="container">
        <div class="row mb-4">
            <div class="mb-3 col-6">
                <label for="name">姓名</label>
                <v-field id="name" name="姓名" type="text" class="form-control"
                    :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名"
                    rules="required" v-model="form.user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3 col-6">
                <label for="email">E-mail</label>
                <v-field id="email" name="email" type="email" class="form-control"
                    :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                    rules="email|required" v-model="form.user.email"></v-field>
                <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3 col-6">
                <label for="address" class="form-label">電話</label>
                <v-field id="address" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="請輸入電話" :rules="isPhone" v-model="form.user.tel"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3 col-6">
                <label for="address">地址</label>
                <v-field id="address" name="地址" type="text" class="form-control"
                    :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址"
                    rules="required" v-model="form.user.address"></v-field>
                <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
        </div>
        <div class="d-flex justify-content-center"><button type="submit" class="btn btn-dark mb-4">付款去～</button></div>
    </v-form>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="d-flex flex-column align-items-center">
                <div class="mb-3">
                    <button type="submit" class="btn btn-outline-primary" @click="postOrder(1)">信用卡刷卡</button>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-outline-secondary" @click="postOrder(21)">線上轉帳</button>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-outline-success" @click="postOrder(3)">超商帳單代收</button>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-outline-danger" @click="postOrder(4)">7-11 ibon</button>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-outline-warning" @click="postOrder(6)">FamiPort</button>
                </div>
            </div>
        </div>
    </div>
`,
    props: ['product'],
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io",
            apiPath: "jimnycourse",
            // 表單資訊
            form: {
                "user": {
                    "name": "123",
                    "email": "123@ic.com",
                    "tel": "0987654321",
                    "address": "kjfdfghj",
                },
            },
            orderData:{},
            tempProduct: {},
            // 測試
            payment: {
                url: "https://ssl.smse.com.tw/ezpos_test/mtmk_utf.asp",
                rvg2c: "1",
                dcvc: "107",
                od_sob: "123456",
                invoice_name: "訊航科技股份有限公司",
                invoice_num: "80129529",
                roturl: "http://172.0.0.1:5000/test"
            }
        }
    },
    watch: {
        product() {
            this.tempProduct = this.product;
        },
        form() {
            this.tempForm = this.form;
        }
    },
    methods: {
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的手機號碼'
        },
        // 創建訂單
        createOrder() {
            const order = this.form;
            const api = `${this.apiUrl}/api/${this.apiPath}/order`;
            axios.post(api, { data: order })
                .then(res => {
                    if (res.data.success) {
                        console.log(res);
                        this.orderData = res.data;
                    } else {
                        alert(res.message)
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        // 測試付款
        postOrder(pay){
            //測試用
            const url = `${this.payment.url}?Rvg2c=${this.payment.rvg2c}&Dcvc=${this.payment.dcvc}
            &Od_sob=${this.payment.od_sob}&Amount=${this.tempProduct.total}&Pur_name=${this.form.user.name}
            &Tel_number=037376006&Mobile_number=${this.form.user.phone}&Address=${this.form.user.address}
            &Email=${this.form.user.email}&Invoice_name=${this.payment.invoice_name}&Invoice_num=${this.payment.invoice_num}&Remark=備註&Roturl=${this.payment.roturl}&Pay_zg=${pay}`;
            axios.post(url)
            .then(res=>{
                console.log(res);
            });
            window.location = window.location.href = url;
        }
    }
}