import VTour from "./v-tour.vue";
import { events } from "./events";

export default {
  install(Vue, args = {}) {
    if (this.installed) return;

    this.installed = true;
    this.params = args;

    Vue.component(args.componentName || "v-tour", VTour);

    const tour = (params) => {
      if (typeof params != "object" || Array.isArray(params)) {
        let caughtType = typeof params;
        if (Array.isArray(params)) caughtType = "array";

        throw new Error(
          `Options type must be an object. Caught: ${caughtType}. Expected: object`
        );
      }

      if (typeof params === "object") {
        if (
          params.hasOwnProperty("callback") &&
          typeof params.callback != "function"
        ) {
          let callbackType = typeof params.callback;
          throw new Error(
            `Callback type must be an function. Caught: ${callbackType}. Expected: function`
          );
        }
        events.$emit("show", params);
      }
    };
    tour.close = () => {
      events.$emit("close");
    };

    Vue.prototype.$tour = tour;
    Vue["$tour"] = tour;
  },
};
