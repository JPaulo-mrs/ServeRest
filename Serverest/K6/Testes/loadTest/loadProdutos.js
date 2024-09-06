import GetProdutos from '/Serverest/Produtos/getProdutos.js';

export const options = {
    stages: [
        { duration: '2m', target: 300 },
        { duration: '5m', target: 500 },
        { duration: '2m', target: 300 },
    ],
    thresholds: {
      'http_req_duration': ['p(95)<200'],
      'checks': ['rate>0.95'],
    },
};

export default function () {
    GetProdutos();
}
