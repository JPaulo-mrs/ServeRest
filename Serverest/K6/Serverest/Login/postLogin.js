import http from 'k6/http';
import { check } from 'k6';

export default function PostLogin() {
  const url = 'http://localhost:3000/login';
  const payload = JSON.stringify({
    email: 'fulano@qa.com',
    password: 'teste',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = http.post(url, payload, params);
  check(res, {
    'login realizado com sucesso': (r) => r.status === 200,
  });
  const token = res.json('token');
  return token;
}