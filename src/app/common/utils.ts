import {URL_REGEX} from './regex-constants';

export function isUrl(url) {
  const regex = new RegExp(URL_REGEX);

  return (url || '').match(regex);
}
