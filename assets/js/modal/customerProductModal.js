export default {
    template: `<section class="p-7" id="language">
    <div class="mb-3 border-bottom border-dark">
        <p class="h1 d-flex text-dark"><span style="animation-delay: calc(1s * 0.1);"
                data-aos="animate__rotateInDownLeft"><i class="fas fa-language mr-3"></i></span><span
                style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">語</span><span
                style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">文</span><span
                style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">類</span><span
                style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft"><i
                    class="fas fa-exclamation ml-3"></i></span></p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <template v-for="item in tempProduct" :key="item.id">
            <div class="col mb-3" v-if="item.category=='語文'">
                <div class="card h-100 hoverShadow">
                    <div class="border-0 p-0 m-0 btn" @click="$emit('show_product', item)">
                        <img :src="item.imageUrl" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 class="card-title">{{ item.title }}</h3>
                            <p class="card-text">講師：{{ item.unit }}</p>
                            <h5 class="card-text">價格$ {{ item.price }}｜課堂時數 {{ item.origin_price }} 小時</h5>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border d-none" role="status" :class="{ 'd-block': status == item.id }"></div>
                        <button type="button" class="btn btn-outline-dark w-100" :class="{ 'd-none': status == item.id }" @click="$emit('add-cart', item.id, qty)">加入購物車</button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</section>
<section class="p-7" id="math">
    <div class="mb-3 border-bottom border-dark">
        <p class="h1 d-flex text-dark align-items-center"><span class="pb-2"
                style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"><i
                    class="fas fa-cogs mr-1 bg-dark text-light h2 p-1 borderRadiusLeft"></i><i
                    class="fas fa-flask mr-3 bg-dark text-light h2 p-1 borderRadiusRight"></i></span><span
                style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">數</span><span
                style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">理</span><span
                style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">類</span><span
                style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft"><i
                    class="fas fa-exclamation ml-3"></i></span></p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <template v-for="item in tempProduct" :key="item.id">
            <div class="col mb-3" v-if="item.category=='數理'">
                <div class="card h-100 hoverShadow">
                    <div class="border-0 p-0 m-0 btn" @click="$emit('show_product', item)">
                        <img :src="item.imageUrl" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">講師：{{ item.unit }}</p>
                        <h5 class="card-text">價格$ {{ item.price }}｜課堂時數 {{ item.origin_price }} 小時</h5>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border d-none" role="status" :class="{ 'd-block': status == item.id }"></div>
                        <button type="button" class="btn btn-outline-dark w-100" :class="{ 'd-none': status == item.id }" @click="$emit('add-cart', item.id, qty)">加入購物車</button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</section>
<section class="p-7" id="life">
    <div class="mb-3 border-bottom border-dark">
        <p class="h1 d-flex text-dark align-items-center">
            <span class="pb-2" style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">
                <i class="fas fa-seedling mr-1 bg-dark text-light h2 p-1 borderRadiusLeft"></i>
                <i class="fas fa-cat mr-3 bg-dark text-light h2 p-1 borderRadiusRight"></i></span>
            <span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">人</span>
            <span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">生</span>
            <span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">類</span>
            <span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">
                <i class="fas fa-exclamation ml-3"></i>
            </span>
        </p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <template v-for="item in tempProduct" :key="item.id">
            <div class="col mb-3" v-if="item.category=='人生'">
                <div class="card h-100 hoverShadow">
                    <div class="border-0 p-0 m-0 btn" @click="$emit('show_product', item)">
                        <img :src="item.imageUrl" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 class="card-title">{{ item.title }}</h3>
                            <p class="card-text">講師：{{ item.unit }}</p>
                            <h5 class="card-text">價格$ {{ item.price }}｜課堂時數 {{ item.origin_price }} 小時</h5>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border d-none" role="status" :class="{ 'd-block': status == item.id }"></div>
                        <button type="button" class="btn btn-outline-dark w-100" :class="{ 'd-none': status == item.id }" @click="$emit('add-cart', item.id, qty)">加入購物車</button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</section>`,
    props: ['products', 'loading'],
    data() {
        return {
            tempProduct: {},
            qty: 1,
            status: {}
        };
    },
    watch: {
        products() {
            this.tempProduct = this.products;
        },
        loading() {
            this.status = this.loading
        }
    },
    mounted() {
    },
    methods: {
    }
}