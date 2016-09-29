import React from 'react'
import Project1Image from '../../Home/assets/tim-kaminski-crash-web-2.jpg'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import classes from './ProjectView.scss'

import typoClass from 'material-design-lite/src/typography/_typography.scss';
import paletteClass from 'material-design-lite/src/palette/_palette.scss';

import classNames from 'classnames';

const { Grid, Row, Col } = require('react-flexbox-grid');

let tmpClasses = {'material-icons': true, 'mdl-color-text--grey-800': true};
tmpClasses[classes.linkCardMmaterialIcon] = true;

let jobClass = {'material-icons': true, 'mdl-color-text--grey-600': true};
jobClass[classes.linkCardMmaterialIcon] = true;

jobClass = classNames(jobClass);

var btnClass = classNames(tmpClasses);
export const ProjectView = () => (
    <div>
        <Grid>
            <Row className={paletteClass['mdl-color-text--grey-800']}>
                <Col md={12} className={'mdl-color-text--grey-800'}>
                    <h4 className={'mdl-typography--display-1'}>Project Composition</h4>
                </Col>
            </Row>
            <Row className={'mdl-color-text--grey-800'}>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia>
                            <FontIcon className={btnClass}>layers</FontIcon>
                        </CardMedia>
                        <CardTitle title="Scenes" subtitle="12 configurations"/>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia>
                            <FontIcon className={btnClass}>landscape
                            </FontIcon>
                        </CardMedia>
                        <CardTitle title="Terrains" subtitle="1 configurations"/>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia>
                            <FontIcon className={btnClass}>texture
                            </FontIcon>
                        </CardMedia>
                        <CardTitle title="Zonings" subtitle="14 configurations"/>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia>
                            <FontIcon className={btnClass}>accessibility
                            </FontIcon>
                        </CardMedia>
                        <CardTitle title="Entities" subtitle="5 configurations"/>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia>
                            <FontIcon className={btnClass}>grain
                            </FontIcon>
                        </CardMedia>
                        <CardTitle title="Placements" subtitle="23 configurations"/>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia>
                            <FontIcon className={btnClass}>public
                            </FontIcon>
                        </CardMedia>
                        <CardTitle title="Assets" subtitle="34 files"/>
                    </Card>
                </Col>
            </Row>
            <Row className={paletteClass['mdl-color-text--grey-800']}>
                <Col md={12} className={'mdl-color-text--grey-800'}>
                    <h4 className={'mdl-typography--display-1'}>Last Finished Jobs</h4>
                </Col>
            </Row>
            <Row className={'mdl-color-text--grey-800'}>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia>
                            <FontIcon className={jobClass}>landscape</FontIcon>
                        </CardMedia>
                        <CardTitle title="Scene" subtitle="'Lab' generated"/>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className={classes.linkCard}>
                        <CardMedia>
                            <FontIcon className={jobClass}>landscape
                            </FontIcon>
                        </CardMedia>
                        <CardTitle title="Scene" subtitle="'Outdoor 1' generated"/>
                    </Card>
                </Col>
            </Row>
        </Grid>


        <span>List of recents jobs done</span>
        <span>Access to the API page for the project</span>
    </div>
)

export default ProjectView
