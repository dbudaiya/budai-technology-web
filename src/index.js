// 轮播效果
var glide = new Glide('.glide')
glide.mount()


// 同位数排列
new Isotope(".cases", {
  layoutMode: 'fitRows',
  itemSelector: '.case-item'
})

const filterBtns = document.querySelector(".filter-btns")
console.log(filterBtns)
filterBtns.addEventListener('click', e => {
  const {target} = e;
  const filterOption = target.getAttribute('data-filter')
  if (filterOption) {
    document.querySelectorAll('.filter-btn.active').forEach(btn => btn.classList.remove('active'))
    target.classList.add('active')
  }
})
