/*
 * @Description: 保留小数位数
 * @Author: your name
 * @Date: 2019-08-28 15:18:43
 * @LastEditTime: 2019-08-28 15:39:12
 * @LastEditors: Please set LastEditors
 */
export function toDecimal(number = 1, units = 1, bit = 1) {
  if (!number || !units) {
    return
  }
  let str = (number / units).toString();
  let reg = new RegExp('([0-9]+.[0-9]{' + Math.abs(bit) + '})[0-9]*')
  let newStr = str.replace(reg, "$1");
  if (!bit) {
    newStr += '0';
  }
  return newStr;
}