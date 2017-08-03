import {name, random, lorem, internet} from 'faker';
import {Factory} from 'rosie';
import {List} from '../../app/lists/list.state';

Factory.define('user')
  .sequence('id')
  .attr('username', () => name.findName())
  .attr('lists', () => Factory.buildList('list', 10))
  .attr('links', () => Factory.buildList('link', 10));

export const users = Factory.buildList('user', 10) as List[];
