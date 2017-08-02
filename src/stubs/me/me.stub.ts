import {name, random, lorem, internet, helpers} from 'faker';
import {Factory} from 'rosie';
import {SocialUser} from '../../app/login/social/social-user.interface';
import {FacebookIdentity} from '../../app/login/social/facebook.interface';

Factory.define('profile')
  .attr('id', 'abc123')
  .attr('gender', () => helpers.randomize(['male', 'female']))
  .attr('photos', () => Factory.buildList('photo', 1));

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
  .attr('name', Factory.build('name'));

Factory.define('info')
  .attr('user', () => Factory.build('user'))
  .attr('identity', () => Factory.build('identity'));

Factory.define('me')
  .attr('info', () => Factory.build('info'));

export const me = Factory.build('me') as SocialUser<FacebookIdentity>;
