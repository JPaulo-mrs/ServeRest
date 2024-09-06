import GetProdutos from '/Serverest/Produtos/getProdutos.js';

export const options = {
    stages: [
        { duration: '1m', target: 500 },
        { duration: '10m', target: 500 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
      'http_req_duration': ['p(95)<200'],
      'checks': ['rate>0.95'],
    },
};

export default function () {
    GetProdutos();
}
