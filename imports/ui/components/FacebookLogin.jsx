import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

//styles
import styleFacebook from "../styles/Facebook.less";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    };
    this.componentClicked = this.componentClicked.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  responseFacebook(response) {
    console.log(response);
    let accessToken = response.authResponse.accessToken;
    // this.setState({
    //   isLoggedIn: true,
    //   userID: response.userID,
    //   name: response.name,
    //   email: response.email,
    //   picture: response.picture.data.url
    // });
  }

  componentClicked() {
    console.log("clicked");
  }
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="2112840515668065"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return (
      <div className={styleFacebook.facebookContainer}>
        {fbContent}
      </div>
    );
  }
}

export default Facebook;
