/*
 * @Author: lihuan
 * @Date: 2021-11-16 20:17:07
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-18 21:14:34
 * @Email: 17719495105@163.com
 */
import { Dialog, Toast } from 'antd-mobile';
import type { DialogProps } from 'antd-mobile/es/components/dialog/dialog';
import type { ToastProps } from 'antd-mobile/es/components/toast/toast';

export type ToastPropsPartial = Partial<ToastProps> | string;

function createDialogShow(options: Partial<DialogProps>) {
  return Dialog.show(options);
}
function createDialogAlert(options: Partial<DialogProps>) {
  return Dialog.alert(options);
}
function createDialogConfirm(options: Partial<DialogProps>) {
  return Dialog.confirm(options);
}

function creatToastShow(optinos: ToastPropsPartial) {
  return Toast.show(optinos);
}
function creatToastClear() {
  return Toast.clear();
}

/**
 * @description: message
 */
export function customMessage() {
  return {
    createDialogShow,
    createDialogAlert,
    createDialogConfirm,
    creatToastShow,
    creatToastClear,
  };
}
