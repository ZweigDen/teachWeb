export default {
  props: ['page'],
  template: `<nav aria-label="Page navigation example">
  <ul class="pagination mb-0 pb-0 ">
    <li class="page-item" :class="{ 'disabled':page.current_page === 1}"><a class="page-link text-dark" href="#" @click="$emit('get_product', page.current_page-1)">Previous</a></li>
    <li class="page-item" :class="{ 'active': item === page.current_page }" v-for="item in page.total_pages" :key="item"><a class="page-link text-dark" href="#" @click="$emit('get_product', item)">{{ item }}</a></li>
    <li class="page-item" :class="{ 'disabled': page.current_page === page.total_pages }"><a class="page-link text-dark" href="#" @click="$emit('get_product', page.page_current+1)">Next</a></li>
  </ul>
</nav>`,
  created() {
    console.log(this.page);
  }
}