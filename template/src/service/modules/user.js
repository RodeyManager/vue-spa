import { user } from '../api';
import request from '../app.service';

export function list(params) {
  return request.get(user.list, { params });
}

export function info(userId) {
  return request.get(`${user.info}/${userId}`);
}

export function update(data) {
  return request.post(user.update, { data });
}

export function del(userId) {
  return request.post(`${user.info}/${userId}`);
}

export const VIP = {
  list(params) {
    return request.get(user.vip.list, { params });
  },
  info(userId) {
    return request.get(`${user.vip.info}/${userId}`);
  },
  update(data) {
    return request.post(user.vip.update, { data });
  },
  del(userId) {
    return request.post(`${user.vip.del}/${userId}`);
  }
};
