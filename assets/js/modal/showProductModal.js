export default {
  template: `<div class="modal fade" id="productModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h2 class="modal-title" id="exampleModalLabel" data-aos="animate__bounceInRight" data-aos-offset="10">
            <span>{{ tempProduct.title }}</span>
          </h2>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"><i class="fas fa-window-close"></i></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
            </div>
            <div class="col-sm-6 d-flex flex-column justify-content-between">
              <div>
              <span class="badge bg-primary rounded-pill mb-3">{{ tempProduct.category }}</span>
              <p class="h3 mb-3">商品描述：{{ tempProduct.description }}</p>
              <p class="h4">商品內容：{{ tempProduct.content }}</p>
              <div class="h5">價格＄{{ tempProduct.price }} 元</div>
              <div class="h5">課堂時數{{ tempProduct.origin_price }} 小時</div>
              </div>
              <div>
                <div class="input-group d-flex justify-content-center">
                  <input type="number" class="form-control"
                        v-model.number="qty" min="1" style="max-width:100px">
                  <div class="spinner-border d-none ml-4" role="status" :class="{ 'd-block': status == tempProduct.id }"></div>
                  <button type="button" class="btn btn-secondary" :class="{ 'd-none': status == tempProduct.id }"
                  @click="$emit('add-cart', tempProduct.id, qty)"
                          >加入購物車</button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>`,
  props: ['product','loading'],
  data() {
    return {
      status: {},
      tempProduct: {},
      modal: '',
      qty: 1,

    };
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
    loading(){
      this.status = this.loading;
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
  },
}