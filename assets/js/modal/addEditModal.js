export default {
    template:`<div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
    aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span >新增課程</span>
              <span >編輯課程</span>
            </h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="imageUrl">主要圖片</label>
                  <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                  <img class="img-fluid" :src="tempProduct.imageUrl">
                </div>
                <div class="mb-1">多圖新增</div>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <div class="mb-1" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                    <div class="form-group">
                      <label for="imageUrl">圖片網址</label>
                      <input type="text" class="form-control"
                        placeholder="請輸入圖片連結" v-model="tempProduct.imagesUrl[key]">
                    </div>
                    <img class="img-fluid" :src="image">
                  </div>
                  <div
                    v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]"
                  >
                    <button class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.push('')"
                      >
                      新增圖片
                    </button>
                  </div>
                  <div v-else>
                    <button class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.pop()">
                      刪除圖片
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="createImages"
                    >
                    新增陣列圖片
                  </button>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">課程標題</label>
                  <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題">
                </div>
  
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="category">課程分類</label>
                    <select class="form-control" v-model="tempProduct.category">
                        <option disabled selected>請選擇分類</option>
                        <option>語文</option>
                        <option>數理</option>
                        <option>人生</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">授課講師</label>
                    <select class="form-control" v-model="tempProduct.unit">
                        <option disabled selected>請選擇講師</option>
                        <option>彭校長</option>
                        <option>呼嚕貓</option>
                    </select>
                  </div>
                </div>
  
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">課堂時數</label>
                    <input id="origin_price" v-model.number="tempProduct.origin_price" type="number" min="1"
                      class="form-control" placeholder="請輸入數字">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input id="price" v-model.number="tempProduct.price" type="number" min="0" class="form-control"
                      placeholder="請輸入售價">
                  </div>
                </div>
                <hr>
  
                <div class="form-group">
                  <label for="description">課程描述</label>
                  <textarea id="description" v-model="tempProduct.description" type="text" class="form-control"
                    placeholder="請輸入課程描述">
                </textarea>
                </div>
                <div class="form-group">
                  <label for="content">課程內容</label>
                  <textarea id="description" v-model="tempProduct.content" type="text" class="form-control"
                    placeholder="請輸入說明內容">
                </textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input id="is_enabled" v-model="tempProduct.is_enabled" class="form-check-input" type="checkbox"
                      :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateProduct(this.tempProduct)">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>`,
  props:['product','api'],
  data(){
    return {
      tempProduct:{
      }
    }
  },
  watch:{
    product(){
      this.tempProduct = this.product;
    }
  },
  methods: {
    createImages() {
      this.tempProduct.imagesUrl = [
        ''
      ]
    },
    updateProduct(temp) {
      let api = `${this.api.apiUrl}/api/${this.api.apiPath}/admin/product`;
      let method = 'post';
      if (temp.id) {
        api = `${this.api.apiUrl}/api/${this.api.apiPath}/admin/product/${temp.id}`
        method = 'put';
      }

      axios[method](api, {data: temp})
        .then(res=> {
          if (res.data.success) {
            this.$emit('render');
          } else {
            alert(res.data.message);
          }
        }).catch(err=>{
          console.log(err);
        })
    }
  }
}