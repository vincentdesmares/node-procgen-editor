import React from 'react'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import classes from './EntityView.scss'

import paletteClass from 'material-design-lite/src/palette/_palette.scss';
import Subheader from 'material-ui/Subheader';
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
const { Grid, Row, Col } = require('react-flexbox-grid');

import { GridList, GridTile } from 'material-ui/GridList';

let tmpClasses = { 'material-icons': true };
tmpClasses[ classes.linkCardMmaterialIcon ] = true;

let jobClass = { 'material-icons': true, 'mdl-color-text--grey-600': true };
jobClass[ classes.linkCardMmaterialIcon ] = true;

jobClass = classNames(jobClass);

import { blue400, red400, green400, orange400, purple400, yellow400 } from 'material-ui/styles/colors';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

var btnClass = classNames(tmpClasses);
export const EntityManage = () => (
    <div>
       <span>preview entity 2</span>
        <Drawer width={400} openSecondary={true} open={true} >
            <AppBar title="AppBar" />
            <h3>Entity 2</h3>
            <h5>Script Configuration</h5>
            <h5>Metadata Bindings</h5>
        </Drawer>
    </div>
)

export default EntityManage
