import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import Project1Image from '../assets/tim-kaminski-crash-web-2.jpg'
import Project2Image from '../assets/mack-sztaba-the-hunt.jpg'
import classes from './HomeView.scss'
import FontIcon from 'material-ui/FontIcon';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';

const { Grid, Row, Col } = require('react-flexbox-grid');

const searchInputStyle = {
  marginTop: 20,
  marginBottom: 20,
  paddingLeft: 50,
  paddingRight: 10,
  position: 'relative'
};

const iconSearch = {
  position: 'absolute',
  left: 15,
  top: 12,
  color: '#CCCCCC'
};

export default class HomeView extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render () {
    return (
      <div>
        <Row>
          <Col md={2}/>
          <Col md={8}>
            <Paper style={searchInputStyle} zDepth={1} id="searchContainer">
              <FontIcon className="material-icons" style={iconSearch}>search</FontIcon>
              <AutoComplete
                hintText="Search a project"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                floatingLabelText=""
                fullWidth={true}
              />
            </Paper>
          </Col>
          <Col md={2}/>
        </Row>
        <Row>
          <Col md={2}/>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <Card>
                  <CardMedia>
                    <img src={Project1Image}/>
                  </CardMedia>
                  <CardTitle title="Crash site" subtitle="Generation based on a tim-kaminski's art"/>
                  <CardActions>
                    <FlatButton label="Delete"/>
                    <RaisedButton label="Edit" onTouchTap={this.props.editAction}/>
                  </CardActions>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardMedia>
                    <img src={Project2Image}/>
                  </CardMedia>
                  <CardTitle title="The Hunt" subtitle="Generation based on a mack-szatba's art"/>
                  <CardActions>
                    <FlatButton label="Delete"/>
                    <FlatButton label="Edit"/>
                  </CardActions>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardMedia>
                    <FontIcon
                      className="muidocs-icon-action-home"
                    />
                  </CardMedia>
                  <CardActions>
                    <FlatButton label="Create"/>
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={2}/>
        </Row>
      </div>
    )
  }
}
