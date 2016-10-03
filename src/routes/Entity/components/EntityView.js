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

var btnClass = classNames(tmpClasses);
export const EntityView = (props) => (
    <div>
        {(() => {
            if (!props.children) {
                return <div>
                    <GridList
                    cellHeight={200}
                    cols={6}
                >
                    <Subheader>Most Recent Edited</Subheader>
                    <GridTile
                        key={"1"}
                        title={"Cruiser Amarr 1"}
                        subtitle={<span>type <b>spaceship</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={"src"}/>
                    </GridTile>
                    <GridTile
                        onClick={props.manageEntityAction}
                        key={"2"}
                        title={"Crystal tower"}
                        subtitle={<span>type <b>tower</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={"src"}/>
                    </GridTile>
                    <GridTile
                        key={"3"}
                        title={"tile.title"}
                        subtitle={<span>by <b> tile.author </b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={"src"}/>
                    </GridTile>
                    <GridTile
                        key={"4"}
                        title={"tile.title"}
                        subtitle={<span>by <b> tile.author </b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={"src"}/>
                    </GridTile>
                    <GridTile
                        key={"5"}
                        title={"tile.title"}
                        subtitle={<span>by <b> tile.author </b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={"src"}/>
                    </GridTile>
                    <GridTile
                        key={"6"}
                        title={"tile.title"}
                        subtitle={<span>by <b> tile.author </b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={"src"}/>
                    </GridTile>
                </GridList>
                    <GridList
                        cellHeight={200}
                        cols={6}
                    >
                        <Subheader>All others</Subheader>
                        <GridTile
                            key={"7"}
                            title={"tile.title"}
                            subtitle={<span>by <b> tile.author </b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={"src"}/>
                        </GridTile>

                    </GridList>
                </div>
            } else {
                return props.children;
            }
        })()}
    </div>
)

export default EntityView
