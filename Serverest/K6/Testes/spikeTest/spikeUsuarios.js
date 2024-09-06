import GetUsuarios from '/Serverest/Usuarios/getUsuarios.js';

export const options = {
    stages: [
        { duration: '1m', target: 2000 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
      'http_req_duration': ['p(95)<200'],
      'checks': ['rate>0.95'],
    },
};

export default function () {
    GetUsuarios();
}
