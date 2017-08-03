import {name, random, lorem, internet} from 'faker';
import {Factory} from 'rosie';
import {Link} from '../../app/links/links.state';

Factory.define('link')
  .sequence('id')
  .attr('name', () => name.findName())
  .attr('isPrivate', () => random.boolean())
  .attr('description', () => lorem.paragraph())
  .attr('url', () => internet.url());

export const links = Factory.buildList('link', 10) as Link[];
