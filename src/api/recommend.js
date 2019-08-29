/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 13:35:11
 * @LastEditTime: 2019-08-29 10:25:41
 * @LastEditors: Please set LastEditors
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options, paramsRecomment, STATUS_OK } from './config'
import axios from 'axios';

export function getRecommend() {
  let url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";

  let data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });

  return jsonp(url, data, options);
}

export function getDistList() {
  let url = "/api/getDistList"

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    '-': 'recom24274846772655057',
    loginUin: 994583326,
    hostUin: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    format: 'json',
    data: paramsRecomment
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    if (res.status === STATUS_OK) {
      return Promise.resolve(res.data.recomPlaylist)
    } else {
      return Promise.reject()
    }
  })
}