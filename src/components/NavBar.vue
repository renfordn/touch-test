<template>
	<div class="grid-container">
		<nav>
			<div class="logo">
				<router-link to="/"
					><img class="logo" alt="touch logo" src="../assets/touch-logo.png"
				/></router-link>
			</div>
			<div aria-label="main menu" class="links">
				<ul>
					<li>
						<router-link :active="isActive" to="/assets">Assets</router-link>
					</li>
					<li>
						<router-link :active="isActive" to="/clients">Clients</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
};
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	flex-direction: row;
	margin-bottom: 2em;
}

.logo img {
	height: 4em;
	width: 100%;
}

.links {
	display: flex;
	align-items: center;
	justify-content: center;

	ul {
		height: auto;
		list-style: none;
		margin: 0;

		li {
			display: inline-block;
			padding: 0.5em 0.75em;

			a {
				color: #111;
				text-decoration: none;

				&.router-link-active {
					color: #b5002a;
				}

				&:hover {
					font-weight: bold;
				}
			}
		}
	}
}
</style>
