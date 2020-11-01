var glide = new Glide('.glide')
// 轮播标题依次动画
// const captionSel = document.querySelector('.slide-caption')
// captionSel
// glide.on(["mount.after","run.after"],()=>{
//   const caption = captionSel[glide,index]
//   anime({
//     targets:caption.children,
//     opacity:[0,1]

//   })
// })
glide.mount()

const isotope = new Isotope(".cases", {
  layoutMode: 'fitRows',
  itemSelector: '.case-item'
})

const filterBtns = document.querySelector(".filter-btns")
filterBtns.addEventListener('click', e => {
  const target = e;
  const filterOption = target.getAttribute('data-filter')
  if (filterOption) {
    document.querySelectorAll('.filter-btn.active').forEach(btn => btn.classList.remove('active'))
    target.classList.add('active')
  }
})