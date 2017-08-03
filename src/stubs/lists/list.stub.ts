import {name, random, lorem, internet} from 'faker';
import {Factory} from 'rosie';
import {List} from '../../app/lists/list.state';

Factory.define('list')
  .sequence('id')
  .attr('name', () => name.findName())
  .attr('isPrivate', () => random.boolean())
  .attr('description', () => lorem.paragraph());

export const lists = Factory.buildList('list', 10) as List[];
