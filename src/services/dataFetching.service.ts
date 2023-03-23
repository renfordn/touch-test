/* eslint-disable no-tabs */
import { Asset, Client } from '@/models/Portfolio';

export default async function fetchData(): Promise<{ assets: Asset[]; clients: Client[] }> {
	const response = await fetch('./investments.json');
	const { assets, clients } = await response.json();

	return { assets, clients };
}
