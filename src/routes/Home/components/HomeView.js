import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import Project1Image from '../assets/tim-kaminski-crash-web-2.jpg'
import Project2Image from '../assets/mack-sztaba-the-hunt.jpg'
import classes from './HomeView.scss'
import FontIcon from 'material-ui/FontIcon';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const {Grid, Row, Col} = require('react-flexbox-grid');

const iconStyles = {
  marginRight: 24,
};

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <Grid>
      <Row>
        <Col md={2}/>
        <Col md={8}>
          <Grid>
            <Row>
              <Col md={4}>
                <Card>
                  <CardMedia>
                    <img src={Project1Image} />
                  </CardMedia>
                  <CardTitle title="Crash site" subtitle="Generation based on a tim-kaminski's art" />
                  <CardActions>
                    <FlatButton label="Delete" />
                    <FlatButton label="Edit" />
                  </CardActions>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardMedia>
                    <img src={Project2Image} />
                  </CardMedia>
                  <CardTitle title="The Hunt" subtitle="Generation based on a mack-szatba's art" />
                  <CardActions>
                    <FlatButton label="Delete" />
                    <FlatButton label="Edit" />
                  </CardActions>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardMedia>
                    <FontIcon
                      className="muidocs-icon-action-home"
                      style={iconStyles}
                    />
                  </CardMedia>
                  <CardActions>
                    <FlatButton label="Create" />
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Col>
        <Col md={2}/>
      </Row>
    </Grid>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
  </div>
)

export default HomeView
