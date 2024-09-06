import { check } from 'k6';
import http from 'k6/http';
import PostLogin from '../Login/postLogin.js';

export default function GetProdutos() {
    const token = PostLogin();
    const url = 'http://localhost:3000/produtos';
    const params = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = http.get(url, params);
    check(res, {
        'Produtos listados com sucesso': (r) => r.status === 200,
    });
}
