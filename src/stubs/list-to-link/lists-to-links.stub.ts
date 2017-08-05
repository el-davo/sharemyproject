import {name, random, lorem, internet} from 'faker';
import {Factory} from 'rosie';
import {Link} from '../../app/links/links.state';

Factory.define('listsToLinks')
  .sequence('id')
  .attr('listId', () => name.findName())
  .attr('linkId', () => random.boolean())
  .attr('link', () => Factory.build('link'));

export const listsToLinks = Factory.buildList('listsToLinks', 10) as Link[];
