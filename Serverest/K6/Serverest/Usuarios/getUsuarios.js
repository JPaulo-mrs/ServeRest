import { check } from 'k6';
import http from 'k6/http';

export default function GetUsuarios() {
    const url = 'http://localhost:3000/usuarios';
    const params = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    const res = http.get(url, params);
    check(res, {
        'Usuarios listados com sucesso': (r) => r.status === 200,
    });
}
