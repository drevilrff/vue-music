import jsonp from "common/js/jsonp"
import { commonParams, options } from "./config";
import axios from "axios";

/*
 * @Description: 获取歌手数据
 * @Author: drevilly
 * @Date: 2019-08-29 09:43:57
 * @LastEditTime: 2019-08-29 10:29:49
 * @LastEditors: Please set LastEditors
 */
export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}