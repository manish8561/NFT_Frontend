import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from 'react-bootstrap/Spinner'

class LoaderComponent extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div>
          <Spinner animation="border" />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: (state && state.loading && state.loading.loading) || false
  };
};

export default connect(mapStateToProps)(LoaderComponent);
