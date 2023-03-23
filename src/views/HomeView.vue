<template>
	<div class="home">
		<SelectAssetClient />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectAssetClient from '@/components/SelectAssetClient.vue'; // @ is an alias to /src

export default defineComponent({
	name: 'HomeView',
	components: {
		SelectAssetClient,
	},
});
</script>
