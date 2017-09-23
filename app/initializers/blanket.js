export function initialize(application) {
  application.inject("route", "session", "service:session");
  application.inject("component", "session", "service:session");
  application.inject("controller", "session", "service:session");

  application.inject(
    "component",
    "notifications",
    "service:notification-messages"
  );
  application.inject(
    "controller",
    "notifications",
    "service:notification-messages"
  );
}

export default {
  name: "blanket",
  initialize
};
