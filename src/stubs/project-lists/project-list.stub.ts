import {name, random, lorem, internet} from 'faker';
import {Factory} from 'rosie';
import {ProjectList} from '../../app/project-list/project-list.state';

Factory.define('project-list')
  .sequence('id')
  .attr('name', () => name.findName())
  .attr('isPrivate', () => random.boolean())
  .attr('description', () => lorem.paragraph());

export const projectList = Factory.buildList('project-list', 10) as ProjectList[];
