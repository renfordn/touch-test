/* eslint-disable no-tabs */
import { Asset } from '@/models/Portfolio';
import randomColor from './utils.service';

export interface PiechartData {
	labels: string[];
	datasets: {
		backgroundColor: string[];
		data: number[];
		hoverOffset: number;
		label: string;
	}[];
}

export interface PieChartOptions {
	maintainAspectRatio: boolean;
	responsive: boolean;
}

export function piechart(assets: Asset[]): PiechartData {
	const piechartData: PiechartData = {
		labels: [],
		datasets: [
			{
				backgroundColor: [],
				data: [],
				hoverOffset: 4,
				label: 'Percentage Of portfolio',
			},
		],
	};

	assets.forEach((asset: Asset) => {
		piechartData.labels.push(asset.name);
		piechartData.datasets[0].data.push(asset.percentage_of_portfolio);
		piechartData.datasets[0].backgroundColor.push(`#${randomColor()}`);
	});

	return piechartData;
}

export const options: PieChartOptions = {
	responsive: true,
	maintainAspectRatio: false,
};
