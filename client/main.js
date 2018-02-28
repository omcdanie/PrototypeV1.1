import React from 'react';
import { Meteor } from 'meteor/meteor';

import Prototype from  "../imports/js/app/Prototype.js";

Meteor.startup(() => {
    Prototype.startup();
});
