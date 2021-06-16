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

</div>`,
    props: ['product'],
    data() {
        return {
            user:{
                name:"",
                email:"",
                tel:"",
                address:"",
            },
            tempProduct: {},
        }
    },
    watch: {
        product() {
            this.tempProduct = this.product;
        }
    },
}