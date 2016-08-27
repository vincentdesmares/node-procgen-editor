import React from 'react'
import Project1Image from '../../Home/assets/tim-kaminski-crash-web-2.jpg'
import classes from './EditView.scss'
import FontIcon from 'material-ui/FontIcon';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const {Grid, Row, Col} = require('react-flexbox-grid');

export const EditView = () => (
  <div>
    <h4>Welcome!</h4>
    <Grid>
      <Row>
        <Col md={2}/>
        <Col md={8}>
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
        <Col md={2}/>
      </Row>
    </Grid>
  </div>
)

export default EditView
