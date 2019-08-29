/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 11:25:54
 * @LastEditTime: 2019-08-29 11:27:37
 * @LastEditors: Please set LastEditors
 */
export default class Singer {
  constructor({id ,name}){
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}