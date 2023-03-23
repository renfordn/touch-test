<template>
	<NavBar v-if="this.$route.path !== '/'" />
	<Suspense>
		<router-view />
		<template #fallback> Loading... </template>
	</Suspense>
</template>

<style lang="scss">
body {
	font-size: 16px;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	padding: 2em;
}

span.brand-red {
	color: #b5002a;
	font-size: unset !important;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

export default {
	components: {
		NavBar,
	},
};
</script>
