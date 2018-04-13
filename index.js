// @flow

'use strict';

const RNI18n = require('react-native').NativeModules.RNI18n;
const I18nJs = require('i18n-js');

if (typeof RNI18n !== 'undefined') {
  I18nJs.locale = RNI18n.locale || 'en';
} else if (__DEV__) {
  console.warn('react-native-i18n module is not correctly linked');
  I18nJs.locale = 'en'
}

export const getLanguages = () => []; // not supported
export default I18nJs;
