import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import {Tracker} from 'meteor/tracker';

import '../imports/db/client/collections/activeBucketCollections/ActiveList';
import '../imports/db/client/collections/reserveBucketCollections/ReserveList';


import Prototype from  "../imports/js/app/Prototype.js";

Meteor.startup(() => {
    Tracker.autorun(() => {
        render(<Prototype/>, document.getElementById('container'));
    });
});