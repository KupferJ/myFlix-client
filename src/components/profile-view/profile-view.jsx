
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import { UserData } from './user-data';
import { UpdateUser } from './update-user';
import { FavoriteMovies } from './favorite-movies';

import './profile-view.scss';

export function ProfileView(props) {

  const [userdata, setUserdata] = useState('');
  const [updatedUser, setUpdatedUser] = useState('');
  const [favoriteMovieList, setFavoriteMovieList] = useState(['']);


  //default Authorization for axios request
  let token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  //get data from API
  const getUserData = (cancelToken, username) => {
    axios.get(`https://movie-api-777.herokuapp.com/users/${username}`, {
      cancelToken: cancelToken
    })
    .then(response => {
      setUserdata(response.data);
      setFavoriteMovieList(props.movies.filter(m => response.data.FavoriteMovies.includes(m._id)));
    })
    .catch(error => {
      console.log(error);
    });
  }

  //useEffect hook to get user data
  useEffect(() => {
    let source = axios.CancelToken.source();

    if (token !== null) {
      getUserData(source.token, props.user);
    } else {
      console.log('Unauthorized');
    }

    return () => {
      source.cancel();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //update user data
    axios.put(`https://movie-api-777.herokuapp.com/users/${userdata.Username}`,
        updatedUser
    )
    .then(response => {
      setUserdata(response.data);
      alert('Profile has been updated');
    })
    .catch(error => {
      console.log(error);
    });
  }

  // handles updates in input fiels, adding to updatedUser variable 
  const handleUpdate = (e) => {
    setUpdatedUser({
      updatedUser,
      [e.target.name]: e.target.value
    });
}

  //function to delete user
  const deleteProfile = (e) => {
    axios.delete(`https://movie-api-777.herokuapp.com/users/${userdata.Username}`)
      .then(response => {
        alert('The profile has been deleted');
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        window.open('/', '_self');
      })
      .catch(error => {
        console.log(error);
    });
}

  //remove movie from list
  const removeFav = (id) => {
    axios.delete(`https://movie-api-777.herokuapp.com/users/${userdata.Username}/movies/${id}`)
      .then(() => {
        //change state of favoriteMovieList to rerender component
        setFavoriteMovieList(favoriteMovieList.filter(movie => movie._id != id));
      })
      .catch(e => {
        console.log(e);
    });
  }


  return (
    <Container>
      <Row>

        <Col lg={12}>
            <FavoriteMovies favoriteMovieList={favoriteMovieList} removeFav={removeFav} />
          <Button variant="outline-success float-right" onClick={() => { props.onBackClick() }}>Back to movie list</Button><br/><br/><br/>
        </Col>

        <Col xs={12} md={5}>
          <Card>
            <Card.Body>
            <UserData userdata={userdata} />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={7}>
          <Card>
            <Card.Body>
            <UpdateUser userdata={userdata} handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
            </Card.Body>
          </Card><br/>
        </Col>

        <Col md={12}>  
          <Button id="delete_profile-btn" variant="danger float-right" type="submit" onClick={deleteProfile}>
            Delete Profile
          </Button>
        </Col>

      </Row>

    </Container>
  );

}
