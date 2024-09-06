import FluxoPrincipal from '/Serverest/Fluxo/fluxoPrincipal.js';

export const options = {
    vus: 3,
    duration: '1m',
    thresholds: {
      'http_req_duration': ['p(95)<200'],
      'checks': ['rate>0.95'],
    },
};

export default function () {
    FluxoPrincipal();
}
