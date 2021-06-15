export default {
    template: `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-window-close"></i></button>
          </div>
          <div class="modal-body">
          <div>
          <table class="table mt-4">
              <thead>
                  <tr>
                      <th width="90">名稱</th>
                      <th width="60">
                          售價
                      </th>
                      <th width="60">
                          數量
                      </th>
                      <th width="60">
                          總價
                      </th>
                      <th width="60">
                          刪除
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <template v-for="item in tempProduct.carts" :key="item.id">
                      <tr>
                          <td>{{ item.product.title }}</td>
                          <td>{{ item.product.price }}</td>
                          <td>{{ item.qty }}</td>
                          <td>{{ item.total }}</td>
                          <td><button type="button" class="btn btn-outline-danger" @click="$emit('delete-product', item.id)">刪除</button>
                          </td>
                      </tr>
                  </template>
              </tbody>
          </table>
          <div class="d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-danger" @click="$emit('delete-all')">移除所有購物車</button>
            總價格＄{{ this.tempProduct.total }}
          </div>
      </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">繼續購物</button>
            <a href="checkout.html" class="btn btn-secondary">結帳</a>
          </div>
        </div>
      </div>
    </div>`,
    props: ['carts'],
    data() {
        return {
            modal: '',
            tempProduct: {},
        }
    },
    watch: {
        carts() {
            this.tempProduct = this.carts;
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modal);
    },
    methods: {
        openModal() {
            this.modal.show();
        },
        hideModal() {
            this.modal.hide();
        },
    }
}