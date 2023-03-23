<template>
	<div class="selectAssetClient">
		<img class="logo" alt="touch logo" src="../assets/touch-logo.png" />
		<p class="my-2">
			Please select below if you would like <br />
			to view information about clients <strong>or</strong> assets
		</p>
		<div class="grid-x">
			<div class="cell">
				<router-link data-test="clientsLink" to="/clients">
					<button data-test="clientsButton" role="link">Clients</button>
				</router-link>
			</div>

			<div class="cell">
				<router-link data-test="assetsLink" to="/assets">
					<button data-test="assetsButton" role="link">Assets</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SelectAssetClient',
});
</script>

<style lang="scss" scoped>
.logo {
	height: auto;
	margin: 0 auto;
	max-width: 15em;
	width: 100%;
}

.my-2 {
	margin: 2em 0;
}

button {
	appearance: none;
	background-color: #fff;
	border: thin solid gray;
	box-shadow: 1px 2px 5px 2px #ccc;
	color: grey;
	cursor: pointer;
	margin: 1em;
	padding: 2em 3em;

	&::selection {
		outline: red solid thin;
	}
}
</style>
