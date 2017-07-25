import {name, random, lorem, internet} from 'faker';
import {Factory} from 'rosie';
import {ProjectList} from '../../app/project-list/project-list.state';

Factory.define('project-list')
  .sequence('id')
  .attr('name', () => name.findName())
  .attr('description', () => lorem.paragraph())
  .attr('projects', () => Factory.buildList('project', 5));

export const projectList = Factory.buildList('project-list', 10) as ProjectList[];
