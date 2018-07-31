import { test } from '../api';
import request from '../app.service';

export function list(params) {
  return request.get(test.list, { params });
}

export function info(userId) {
  return request.get(`${test.info}/${userId}`);
}

export function update(data) {
  return request.post(test.update, { data });
}

export function del(userId) {
  return request.post(`${test.info}/${userId}`);
}
