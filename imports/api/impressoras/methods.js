// Methods related to Impressoras

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Impressoras } from './impressoras.js';

Meteor.methods({
  'impressoras.insert'(serial, mac, modelo) {
    check(serial, String);
    check(mac, String);
    check(modelo, String);

    return Impressoras.insert({
      serial,
        mac,
        modelo
    });
  },
});
