<script setup lang="ts">
useHead({
	title: '欢迎来到布袋公司主页',
});

const swiperOptions = {
	autoplay: true,
	speed: 800,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
};
const onSwiper = (swiper: any) => {
	console.log(swiper);
};
const onSlideChange = () => {
	console.log('slide change');
};
</script>

<template>
	<swiper
		id="swiper"
		class="relative max-h-screen"
		effect="coverflow"
		:navigation="swiperOptions.navigation"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
	>
		<swiper-slide>
			<div class="slide-caption">
				<h1>布袋科技公司</h1>
				<h3>科技生活</h3>
				<button class="explore-btn">探索更多</button>
			</div>
			<div class="shade"></div>
			<img
				src="@/assets/static/images/people-in-couch-1024248.jpg"
				alt=""
			/>
		</swiper-slide>
		<swiper-slide>
			<div class="slide-caption flush-right">
				<h1>科技改变世界</h1>
				<h3>莫得意义..........</h3>
				<button class="explore-btn">搜索更多</button>
			</div>
			<div class="shade"></div>
			<video
				src="@/assets/static/videos/working-man.mp4"
				autoplay
				muted
				loop
			></video>
		</swiper-slide>
		<div class="swiper-button-prev">
      <icon-akar-icons:chevron-left class="w-3 h-3 text-red"/>
    </div>
		<div class="swiper-button-next">
      <icon-akar-icons:chevron-right class="w-3 h-3 text-red"/>
    </div>
	</swiper>
</template>

<style lang="less" scoped>
#swiper {
	position: relative;
	top: -75px;
	z-index: 10;
	.swiper-slide {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		.slide-caption {
			position: absolute;
			z-index: 70;
			color: var(--text-color-lightest);
			h1 {
				font-size: 55px;
				font-weight: 600;
			}

			h3 {
				font-size: 28px;
				font-weight: 400;
				margin: 50px 0;
			}
			.explore-btn {
				background-color: var(--primary-color);
				cursor: pointer;
				outline: none;
				color: var(--text-color-lightest);
				border: 0;
				font-size: 18px;
				border-radius: 4px;
				padding: 14px 30px;
			}
		}
		img,
		video {
			width: 100vw;
			width: 100%;
			height: 100vh;
			object-fit: cover;
		}
		.shade {
			width: 100%;
			height: 100%;
			background-color: var(--backdrop-color);
			position: absolute;
			left: 0;
			top: 0;
			opacity: 0.4;
		}

		.flush-right {
			width: 100%;
			width: 80vw;
			text-align: left;
		}
	}
}
.swiper::v-deep .swiper-pagination .swiper-pagination-bullet {
	background: rgb(0, 0, 0);
}
.swiper::v-deep .swiper-pagination .swiper-pagination-bullet-active {
	background: rgb(255, 255, 255);
}
.swiper-button-next {
}
.swiper-button-prev,
.swiper-button-next {
  padding: 5px 30px;
  color: white;
  border: 1px solid white;
  border-radius: 10px;

}
.swiper-button-prev::after,
.swiper-button-next::after {
	content: '' !important;
}
</style>

<route lang="yaml">
name: home
</route>
