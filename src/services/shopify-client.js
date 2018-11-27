import Client from 'shopify-buy';
import { domain, token } from '../conf';

const client = Client.buildClient({
	domain: domain,
	storefrontAccessToken: token
});
export {client};