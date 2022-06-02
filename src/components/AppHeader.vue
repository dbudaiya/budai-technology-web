<script setup lang="ts">
const preferedDark = usePreferredDark();
const isDark = useStorage('isDark', preferedDark.value);
const body = ref<HTMLBodyElement | null>(null);

const toggleDarkMode = () => {
	if (body.value) {
		if (isDark.value) {
			body.value.classList.remove('dark');
		} else {
			body.value.classList.add('dark');
		}
	}
	isDark.value = !isDark.value;
};

onMounted(async () => {
	await nextTick();

	body.value = document.querySelector('body') as HTMLBodyElement;
	if (body.value) {
		if (isDark.value) body.value.classList.add('dark');
	}
});
interface NavType {
	href: string;
	title: string;
}

const nav_list: Array<NavType> = reactive([
	{
		href: '#',
		title: '首页',
	},
	{
		href: '#',
		title: '关于我们',
	},
	{
		href: '#',
		title: '成功案例',
	},
	{
		href: '#',
		title: '服务流程',
	},
	{
		href: '#',
		title: '团队服务',
	},
	{
		href: '#',
		title: '公司动态',
	},
]);
</script>

<template>
	<header class="bg-transparent relative py-5 px-8 pr-0  text-white text-opacity-35 flex items-center z-20" >
		<router-link :to="{ name: 'home' }">
			<div class="font-bold  lg:text-xl md:text-lg text-md">布袋科技</div>
		</router-link>
		<div class="ml-auto flex items-center  h-full ">
			<a
				class="px-10 "
				:href="item.href"
				v-for="item in nav_list"
				:key="item.title"
				>{{ item.title }}</a
			>
			<a href="#" class="pr-5">
				<icon-akar-icons:search />
			</a>
			<button
				class="mx-5 cursor-pointer focus:outline-none"
				@click="toggleDarkMode"
			>
				<icon:bx:bx-moon class="w-6 h-6" v-if="!isDark" />
				<icon:bx:bxs-moon class="w-6 h-6" v-else />
			</button>
		</div>
	</header>
</template>
