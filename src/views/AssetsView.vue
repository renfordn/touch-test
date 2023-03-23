<template>
	<Suspense></Suspense>
	<div class="assets">
		<div class="grid-container">
			<h1>A<span class="brand-red">s</span>set(s)</h1>

			<div class="grid-x">
				<div class="cell small-12">
					<div class="data-table">
						<table>
							<thead>
								<th>Asset Name</th>
								<th>Asset ISIN</th>
								<th>Invested Clients</th>
							</thead>
							<tbody>
								<tr v-for="asset in assetsForTemplate" :key="asset.id">
									<td>{{ asset.name }}</td>
									<td>{{ asset.asset_isin }}</td>
									<td>
										<ul>
											<li v-for="client in asset.clients" :key="client.id">
												<!-- TODO: make these links to the clientsView page and pass state -->
												{{ client.name }}
											</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Asset, Client, ClientsListing } from '@/models/Portfolio';
import fetchData from '@/services/dataFetching.service';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ClientsView',
	async setup() {
		// eslint-disable-next-line operator-linebreak
		const { assets, clients }: { assets: Asset[]; clients: Client[] } =
			await fetchData();
		return {
			assets,
			clients,
		};
	},
	data(): { assetsForTemplate: Asset[] | undefined } {
		return {
			assetsForTemplate: undefined,
		};
	},
	methods: {
		/*
			A rather convulated method that adds the matching clients
			to the assets
		*/
		attachClients(): Asset[] {
			// loop through all the assets
			const assetsWithClients = this.assets.map((asset: Asset) => {
				const clientList: ClientsListing[] = [];

				// loop through clients and match them to the assets
				this.clients.forEach((client: Client) => {
					const found = client.assets.find((el: Asset) => el.id === asset.id);

					if (found) {
						clientList.push({ name: client.name, id: client.id });
					}
				});

				return { ...asset, clients: clientList };
			});
			return assetsWithClients;
		},
	},
	mounted() {
		this.assetsForTemplate = this.attachClients();
	},
});
</script>

<style lang="scss" scoped>
span {
	font-size: 1.2em;
}

.inline-block {
	display: inline-block;
}

.text-align-left {
	text-align: left;
}

table {
	border-collapse: separate;
	margin-top: 1em;

	thead {
		background-color: #b5002a;
		color: #fff;

		th {
			border-spacing: 0.2em;
			text-align: center;
		}
	}

	td {
		border-spacing: 0.2em;
		text-align: center;
	}
}
</style>
