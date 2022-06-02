// 轮播效果
const glide = new Glide('.glide')
const captionsEl = document.querySelectorAll('.slide-caption')

glide.on(['mount.after', 'run.after'], () => {
  const caption = captionsEl[glide.index]
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 400,
    easing: 'linear',
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger([40, 10]), 0]
  })
})

glide.on(['run.before'],()=>{
  document.querySelectorAll('.slide-caption > *').forEach(el=>{
    el.getElementsByClassName.opacity = 0;
  })
})
glide.mount()


// 同位数排列
const isotope = new Isotope("#cases", {
  layoutMode: 'fitRows',
  itemSelector: '.case-item'
})

const filterBtns = document.querySelector(".filter-btns")
console.log(filterBtns)
filterBtns.addEventListener('click', e => {
  const { target } = e;
  const filterOption = target.getAttribute('data-filter')
  if (filterOption) {
    document.querySelectorAll('.filter-btn.active').forEach(btn => btn.classList.remove('active'))
    target.classList.add('active')
  }
})
