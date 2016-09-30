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

let tmpClasses = { 'material-icons': true };
tmpClasses[ classes.linkCardMmaterialIcon ] = true;

let jobClass = { 'material-icons': true, 'mdl-color-text--grey-600': true };
jobClass[ classes.linkCardMmaterialIcon ] = true;

jobClass = classNames(jobClass);

let jobClassStatusIcon = {};
jobClassStatusIcon[classes.linkCardStatusIcon] = true;
jobClassStatusIcon = classNames({...jobClassStatusIcon, 'material-icons': true, 'mdl-color-text--grey-600': true });

import { blue400, red400, green400, orange400, purple400, yellow400, lightGreen200, grey200 } from 'material-ui/styles/colors';

var btnClass = classNames(tmpClasses);
export const ProjectView = (props) => (
    <div>
        {(() => {
            if (!props.children) {
                return <Grid>
                    <Row className={paletteClass['mdl-color-text--grey-800']}>
                        <Col md={12} className={'mdl-color-text--grey-800'}>
                            <h4 className={'mdl-typography--display-1'}>Crash site Composition</h4>
                        </Col>
                    </Row>
                    <Row className={'mdl-color-text--grey-800'}>
                        <Col md={2}>
                            <Card className={classes.linkCard}>
                                <CardMedia style={{backgroundColor: blue400}}>
                                    <FontIcon className={btnClass}>layers</FontIcon>
                                </CardMedia>
                                <CardTitle title="Scenes" subtitle="12 configurations"/>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className={classes.linkCard}>
                                <CardMedia style={{backgroundColor: red400}}>
                                    <FontIcon className={btnClass}>landscape
                                    </FontIcon>
                                </CardMedia>
                                <CardTitle title="Terrains" subtitle="1 configurations"/>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className={classes.linkCard}>
                                <CardMedia style={{backgroundColor: green400}}>
                                    <FontIcon className={btnClass}>texture
                                    </FontIcon>
                                </CardMedia>
                                <CardTitle title="Zonings" subtitle="14 configurations"/>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className={classes.linkCard} onClick={props.manageEntitiesAction}>
                                <CardMedia style={{backgroundColor: orange400}}>
                                    <FontIcon className={btnClass}>accessibility
                                    </FontIcon>
                                </CardMedia>
                                <CardTitle title="Entities" subtitle="5 configurations"/>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className={classes.linkCard}>
                                <CardMedia style={{backgroundColor: purple400}}>
                                    <FontIcon className={btnClass}>grain
                                    </FontIcon>
                                </CardMedia>
                                <CardTitle title="Placements" subtitle="23 configurations"/>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className={classes.linkCard}>
                                <CardMedia style={{backgroundColor: yellow400}}>
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
                                <CardMedia style={{backgroundColor: lightGreen200}}>
                                    <FontIcon className={jobClass}>landscape
                                        <FontIcon className={jobClassStatusIcon}>hourglass_full</FontIcon>
                                    </FontIcon>
                                </CardMedia>
                                <CardTitle title="Scene" subtitle="'Lab' generated"/>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className={classes.linkCard}>
                                <CardMedia style={{backgroundColor: lightGreen200}}>
                                    <FontIcon className={jobClass}>landscape
                                        <FontIcon className={jobClassStatusIcon}>hourglass_full</FontIcon>
                                    </FontIcon>
                                </CardMedia>
                                <CardTitle title="Scene" subtitle="'Outdoor 1' generated"/>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className={classes.linkCard}>
                                <CardMedia style={{backgroundColor: grey200}}>
                                    <FontIcon className={jobClass}>accessibility
                                        <FontIcon className={jobClassStatusIcon}>hourglass_empty</FontIcon>
                                    </FontIcon>
                                </CardMedia>
                                <CardTitle title="Entity" subtitle="'Tree 3' scheduled"/>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <h3>Access to the API page for the project</h3>
                            <span>http://procgen.io/project/2/</span>
                        </Col>
                    </Row>
                </Grid>
            } else {
                return props.children;
            }
        })()}
    </div>
)

export default ProjectView
