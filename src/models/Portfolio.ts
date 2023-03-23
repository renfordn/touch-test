/* eslint-disable camelcase */
export interface ClientsListing {
	id: number;
	name: string;
}

export interface Asset {
	asset_isin: string;
	clients: ClientsListing[];
	id: number;
	name: string;
	percentage_of_portfolio: number;
}

export interface Client {
	assets: Asset[];
	id: number;
	name: string;
	portfolio_value: number;
}
