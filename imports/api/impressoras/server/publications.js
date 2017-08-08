// All impressoras-related publications

import { Meteor } from 'meteor/meteor';
import { Impressoras } from '../impressoras.js';

Meteor.publish('impressoras.all', function () {
  return Impressoras.find();
});
