<template>
	<div class="client">
		<div class="grid-container">
			<h1>C<span class="brand-red">l</span>ient(s)</h1>
			<div class="grid-x">
				<div class="cell text-align-left">
					<span class="inline-block">Please select a client: </span>
					<ul aria-busy="false" class="list-pills inline-block">
						<li v-for="(client, index) in clients" :key="client.id">
							<button
								:tabindex="index"
								@click="assignDetailedData(index)"
								@keypress="assignDetailedData(index)"
							>
								{{ client.name }}
							</button>
						</li>
					</ul>
				</div>
			</div>

			<div v-if="detailedData" class="grid-x">
				<div class="cell small-11">
					<div id="data-table" role="tabpanel" class="data-table">
						<table>
							<thead>
								<th>Client</th>
								<th>Portfolio Value</th>
								<th>Assets</th>
							</thead>
							<tbody>
								<td>{{ detailedData.name }}</td>
								<td>{{ money(detailedData.portfolio_value) }}</td>
								<td><Pie :data="piechartData" :options="options"></Pie></td>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';
import fetchData from '@/services/dataFetching.service';
import {
	piechart,
	options,
	PiechartData,
	PieChartOptions,
} from '@/services/graphs.service';
import { Client } from '@/models/Portfolio';

declare interface ClientsViewData {
	activeIndex: number;
	detailedData: null | Client;
	piechartData: PiechartData | null;
	options: PieChartOptions;
}

ChartJS.register(ArcElement, Tooltip, Legend);

export default defineComponent({
	name: 'ClientsView',
	async setup() {
		const { clients }: { clients: Client[] } = await fetchData();

		return {
			clients,
		};
	},
	components: {
		Pie,
	},
	data(): ClientsViewData {
		return {
			activeIndex: -1,
			options,
			detailedData: null,
			piechartData: null,
		};
	},
	methods: {
		assignDetailedData(index: number) {
			if (index === this.activeIndex) {
				return;
			}
			this.activeIndex = index;

			this.detailedData = this.clients[index];
			this.piechartData = piechart(this.clients[index].assets);
		},
		money(number: number): string {
			const formatter = new Intl.NumberFormat('en-GB', {
				style: 'currency',
				currency: 'GBP',
			});

			return formatter.format(number);
		},
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
</style>
