import { sleep } from 'k6';
import { group } from 'k6';
import { BaseRest, BaseChecks, ENDPOINTS, testConfig } from '../../../support/base/baseTeste.js';

export const options = testConfig.options.loadTest;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default () => {
  group('Listar produtos', () => {
    const res = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT);
    baseChecks.checkStatusCode(res, 200);
    baseChecks.checkErrorRate(res); 
    baseChecks.checkResponseTime(res);
    sleep(1);
  });
};
