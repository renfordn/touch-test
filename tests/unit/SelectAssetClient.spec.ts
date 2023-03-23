import { mount, VueWrapper } from '@vue/test-utils';
import SelectAssetClient from '@/components/SelectAssetClient.vue';
import router from '@/router';

describe('SelectAssetClient.vue', () => {
	const mockRoute = {
		to: jest.fn(),
	};
	const mockRouter = {
		push: jest.fn(),
	};

	it('renders component with logo and asset & client buttons', () => {
		const wrapper: VueWrapper = mount(SelectAssetClient, {
			global: {
				mocks: {
					$router: mockRouter,
				},
				plugins: [router],
			},
		});

		const clientsBtn = wrapper.get('[data-test="clientsBtn"]');
		const assetsBtn = wrapper.get('[data-test="assetsBtn"]');

		expect(wrapper.find('img')).toBeTruthy();

		expect(clientsBtn.text()).toBe('Clients');
		expect(assetsBtn.text()).toBe('Assets');
	});

	it('should navigate to the "/clients" route when clicking on the "Clients" button', async () => {
		const wrapper: VueWrapper = mount(SelectAssetClient, {
			global: {
				mocks: {
					$route: mockRoute,
					$router: mockRouter,
				},
				plugins: [router],
			},
		});

		const clientsBtn = await wrapper.get('[data-test="clientsButton"]');
		const clientsLink = await wrapper.get('[data-test="clientsLink"]');
		const assetsBtn = await wrapper.get('[data-test="assetsButton"]');
		const assetsLink = await wrapper.get('[data-test="assetsLink"]');

		expect(assetsBtn.text()).toBe('Assets');
		expect(assetsLink.attributes('href')).toBe('#/assets');
		expect(clientsBtn.text()).toBe('Clients');
		expect(clientsLink.attributes('href')).toBe('#/clients');
	});
});
