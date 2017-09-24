export function initialize(application) {
  let inject = (property, value) => {
    application.inject("controller", property, value);
    application.inject("component", property, value);
    application.inject("route", property, value);
  };

  inject("session", "service:session");
  inject("notifications", "service:notification-messages");
}

export default {
  name: "blanket",
  initialize
};
