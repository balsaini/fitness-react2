/* eslint-disable max-len, arrow-body-style, no-underscore-dangle, react/no-string-refs, react/self-closing-comp */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    const authorization = `${localStorage.getItem('token')}`;
    this.state = { authorization };
  }

  create(e) {
    e.preventDefault();
    const gender = this.refs.gender.value;
    const age = this.refs.age.value;
    const height = this.refs.height.value;
    const weight = this.refs.weight.value;
    const photo = this.refs.photo.value;
    axios.post('http://localhost:9001/api/users/profile', { gender, age, height, weight, photo }, { headers: { authorization: this.state.authorization } })
    .then(() => {
      browserHistory.push('/profile');
    })
    .catch(() => {
      // notify user registration failed
    });
  }

  render() {
    return (
      <div>

        <h1>Create Profile</h1>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="Gender">Gender</label>
                <input ref="gender" type="text" className="form-control" id="gender" />
              </div>

              <div className="form-group">
                <label htmlFor="Age">Age</label>
                <input ref="age" type="text" className="form-control" id="age" />
              </div>

              <div className="form-group">
                <label htmlFor="Height">Height</label>
                <input ref="height" type="text" className="form-control" id="height" />
              </div>

              <div className="form-group">
                <label htmlFor="Weight">Weight</label>
                <input ref="weight" type="text" className="form-control" id="weight" />
              </div>

              <div className="form-group">
                <label htmlFor="Photo">Photo</label>
                <input ref="photo" type="text" className="form-control" id="photo" />
              </div>

              <button onClick={this.create} type="submit" className="btn btn-default">Create</button>
            </form>
          </div>
          <div className="col-xs-9">
          </div>
        </div>

      </div>
    );
  }
}
