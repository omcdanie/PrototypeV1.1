import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import Prototype from  "../imports/js/app/Prototype.js";

Meteor.startup(() => {
    render(<Prototype/>, document.getElementById('container'));
});