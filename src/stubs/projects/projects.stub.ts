import {name, random, lorem, internet} from 'faker';
import {Factory} from 'rosie';
import {Project} from '../../app/projects/projects.state';

Factory.define('project')
  .sequence('id')
  .attr('name', () => name.findName())
  .attr('description', () => lorem.paragraph())
  .attr('url', () => internet.url());

export const projects = Factory.buildList('project', 10) as Project[];
