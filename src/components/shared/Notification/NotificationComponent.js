import { connect } from "react-redux";
import toastr from "toastr";
import {
  SHOW_ERROR,
  SHOW_INFO,
  SHOW_SUCCESS,
  SHOW_WARNING
} from "../../../redux/constants/Shared/Notification/notificationConstants";

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
};

const showNotification = notification => {
  switch (notification.type) {
    case SHOW_ERROR:
      toastr.error(notification.text);
      break;
    case SHOW_INFO:
      toastr.info(notification.text);
      break;
    case SHOW_SUCCESS:
      toastr.success(notification.text);
      break;
    case SHOW_WARNING:
      toastr.warning(notification.text);
      break;
    default:
      toastr.info(notification.text);
      break;
  }
};

export const Notification = props => {
  showNotification(props.notification);
  return null;
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
