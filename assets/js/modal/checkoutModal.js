export default {
    template: `<div class="px-7">
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
<div>
    <form class="container">
        <div class="row mb-5">
            <div class="mb-3 col-6">
                <label for="name" class="form-label">姓名</label>
                <input type="text" class="form-control" id="name" >
            </div>
            <div class="mb-3 col-6">
                <label for="phone" class="form-label">電話</label>
                <input type="number" class="form-control" id="phone" >
            </div>
            <div class="mb-3 col">
                <label for="address" class="form-label">地址</label>
                <input type="text" class="form-control" id="address" >
            </div>
            <div class="mb-3 col">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" >
            </div>
        </div>
        <div class="d-flex flex-column align-items-center">
            <div class="mb-3">
                <button type="button" class="btn btn-outline-primary" >信用卡刷卡</button>
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-outline-secondary" >線上轉帳</button>
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-outline-success">超商帳單代收</button>
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-outline-danger" >7-11 ibon</button>
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-outline-warning" >FamiPort</button>
            </div>
        </div>
    </form>
</div>`,
    props: ['product'],
    data() {
        return {
            tempProduct: {},
        }
    },
    watch: {
        product() {
            this.tempProduct = this.product;
        }
    },
}