import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { propTypes } from 'react-bootstrap/esm/Image';
import mehdi from './mehdi.jpg';


function Profile(props) {
  return (
    <div className='container'>
      <Card >
        <Card.Img variant="top" src={mehdi} />
        <Card.Body>
          <Card.Title  style={props.style} >
            {props.fullName}
            <br></br>
            {props.profession}
          </Card.Title>
          <Card.Text>
            {props.bio}
          </Card.Text>
          <Button variant="primary" onClick={props.onClick}>Submit</Button>
        </Card.Body>
      </Card>
    </div>
  );
}


//child.defaultProps = { fullName : "there is no name" , bio : "please enter your bio" , profession : "no profession entered " }
//child.propTypes = {fullName : propTypes.string , }
export default Profile;