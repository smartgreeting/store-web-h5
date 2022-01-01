/*
 * @Author: lihuan
 * @Date: 2021-12-31 22:13:11
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-31 22:14:17
 * @Email: 17719495105@163.com
 */
export const sleep = (delay = 1500) => new Promise(resolve => setTimeout(resolve, delay));
