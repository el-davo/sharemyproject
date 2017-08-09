import {Factory} from 'rosie';

Factory.define('results')
  .attr('lists', () => Factory.buildList('list', 10));

Factory.define('search')
  .attr('results', () => Factory.build('results'));

export const search = Factory.build('search');
