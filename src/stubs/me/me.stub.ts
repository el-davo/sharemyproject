import {name, random, lorem, internet, helpers} from 'faker';
import {Factory} from 'rosie';
import {User} from '../../app/login/login.state';

Factory.define('profile')
  .attr('id', 'abc123');

Factory.define('name')
  .attr('familyName', () => name.lastName())
  .attr('givenName', () => name.firstName());

Factory.define('photo')
  .attr('value', () => internet.avatar());

Factory.define('user')
  .sequence('id')
  .attr('username', () => name.findName());

Factory.define('identity')
  .attr('provider', 'facebook')
  .attr('authScheme', 'auth 2.0')
  .attr('externalId', 'abc123')
  .attr('profile', Factory.build('profile'))
  .attr('name', Factory.build('name'))
  .attr('gender', () => helpers.randomize(['male', 'female']))
  .attr('photos', () => Factory.buildList('photo', 1));

Factory.define('me')
  .attr('user', () => Factory.build('user'))
  .attr('identity', () => Factory.build('identity'));

export const me = Factory.build('me') as User;
