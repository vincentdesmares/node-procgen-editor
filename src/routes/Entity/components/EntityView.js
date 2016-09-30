import React from 'react'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import classes from './EntityView.scss'

import paletteClass from 'material-design-lite/src/palette/_palette.scss';

import classNames from 'classnames';

const { Grid, Row, Col } = require('react-flexbox-grid');

let tmpClasses = {'material-icons': true};
tmpClasses[classes.linkCardMmaterialIcon] = true;

let jobClass = {'material-icons': true, 'mdl-color-text--grey-600': true};
jobClass[classes.linkCardMmaterialIcon] = true;

jobClass = classNames(jobClass);

import {blue400, red400, green400, orange400, purple400, yellow400} from 'material-ui/styles/colors';

var btnClass = classNames(tmpClasses);
export const EntityView = () => (
    <div>
        <Grid>
            <Row className={'mdl-color-text--grey-800'}>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia style={{backgroundColor: blue400}}>
                            <FontIcon className={btnClass}>layers</FontIcon>
                        </CardMedia>
                        <CardTitle title="Scenes" subtitle="12 configurations"/>
                    </Card>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default EntityView
