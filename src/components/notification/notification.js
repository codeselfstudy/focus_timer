/**
 * TODO: this is a mess. Deal with notifications later.
 */
import React from "react";
import { Notification as Notif } from "react-web-notification";

// import bellOgg from "../../assets/sounds/bell.ogg";
// import bellMp3 from "../../assets/sounds/bell.mp3";

// import "./notification.scss";

const Notification = ({ title }) => <Notif title={title} />;

export default Notification;
// options={{icon: someicon}}
// options={this.state.options}
// ignore={this.state.ignore && this.state.title !== ""}
// notSupported={this.handleNotSupported.bind(this)}
// onPermissionGranted={this.handlePermissionGranted.bind(this)}
// onPermissionDenied={this.handlePermissionDenied.bind(this)}
// onShow={this.handleNotificationOnShow.bind(this)}
// onClick={this.handleNotificationOnClick.bind(this)}
// onClose={this.handleNotificationOnClose.bind(this)}
// onError={this.handleNotificationOnError.bind(this)}
// timeout={5000}
// swRegistration={this.props.swRegistration}
// <audio id="sound" preload="auto">
//     <source src=".mp3" type="audio/mpeg" />
//     <source src="./sound.ogg" type="audio/ogg" />
//     <embed
//         hidden={true}
//         autostart="false"
//         loop={false}
//         src="./sound.mp3"
//     />
// </audio>
