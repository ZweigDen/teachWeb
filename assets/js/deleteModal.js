export default {
    template:`<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog"
    aria-labelledby="mySmallModalLabel" aria-hidden="true" id="delModal">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">是否刪除該產品？</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                產品：{{ product.title }}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteProduct">確定刪除</button>
            </div>
        </div>
    </div>
</div>`,
props: ['product','api'],
methods:{
    deleteProduct(){
        const api = `${this.api.apiUrl}/api/${this.api.apiPath}/admin/product/${this.product.id}`;
        axios.delete(api)
        .then(res=>{
            if(res.data.success){
                this.$emit('render');
            } else{
                alert(res.data.message);
            }
        }).catch(err=>{
            console.log(err)
        })
    }
}
}