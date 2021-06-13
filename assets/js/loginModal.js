export default {
    template: `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">管理者登入</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
            </div>
            <div class="modal-body d-flex align-items-center flex-column">
            <div class="mb-3">
                <label for="userName" class="mr-3">帳號</label>
                <input type="email" id="userName" placeholder="xxxxx@icloud.com" v-model="admin.username">
            </div>
            <div class="mb-3">
                <label for="userPassword" class="mr-3">密碼</label>
                <input type="password" id="userPassword" v-model="admin.password">
            </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary"
                    data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-outline-dark" @click="login">登入</button>
            </div>
        </div>
    </div>
</div>`,
    data() {
        return {
            modal: '',
            admin: {
                "username": "",
                "password": "k485483UIO"
            }
        };
    },
    props:['apiUrl'],
    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modal);
    },
    methods: {
        login() {
            const api = `${this.apiUrl}/admin/signin`;
            axios.post(api, this.admin)
            .then(res=>{
                if(res.data.success){
                    const{ token, expired } = res.data;
                    document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;

                    window.location = 'admin.html';
                } else {
                    alert(res.data.message);
                }
            })
        },
        openModal() {
            this.modal.show();
        },
        hideModal() {
            this.modal.hide();
        },
    },
}