import {internet, lorem, name, random} from 'faker';
import {Factory} from 'rosie';

Factory.define('user')
  .sequence('id')
  .attr('username', () => name.findName())
  .attr('lists', () => Factory.buildList('list', 10))
  .attr('links', () => Factory.buildList('link', 10));

export const users = {users: Factory.build('user'), logout: {stuff: 200}};
