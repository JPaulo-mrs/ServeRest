import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest } from '../services/baseRest.js';
import { BaseChecks } from '../support/base/baseChecks.js';

export const options = {
  vus: 1,
  duration: '10s', 
};

const base_uri = 'http://localhost:3000';
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
    const jsonData = JSON.parse(open('../data/static/user.json'));
    return jsonData.users;
});

const payload = {
  "nome": "Joao Paulo",
  "email": "joaopaulo@qa.com.br",
  "password": "teste",
  "administrador": "true"
}

export function setup() {
  const res = baseRest.post('/usuarios', payload);
  baseChecks.checkStatusCode(res, 201);
  baseChecks.checkMessage(res, "Cadastro realizado com sucesso")
  return {responseData : res.json()}
}

export default function () {
  let userIndex = __ITER % data.length;
  let user = data[userIndex]
  const res = baseRest.get('/usuarios')
  baseChecks.checkStatusCode(res, 200);
  sleep(1);
}

export function teardown(responseData) {
  const userId = responseData.responseData._id
  const res = baseRest.delete(`/usuarios/${userId}`)
  baseChecks.checkStatusCode(res, 200);
  baseChecks.checkMessage(res, "Registro excluído com sucesso");
}