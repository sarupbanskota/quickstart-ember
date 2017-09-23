import Ember from "ember";

const { Route } = Ember;

export default Route.extend({
  beforeModel() {
    return this.get("session")
      .fetch()
      .catch(function() {});
  },

  actions: {
    login(provider) {
      this.get("session")
        .open("firebase", { provider })
        .then(data => {
          console.log(data.currentUser);
        });
    },
    logout() {
      this.get("session").close();
    }
  }
});
