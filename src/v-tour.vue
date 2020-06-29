<template>
  <div>Test</div>
</template>

<script>
import Vue from "vue";
import { events } from "./events";

const Component = {
  name: "VTour",
  data() {
    return {};
  },
  methods: {
    onOpen(params) {
      console.log(params);
    },
  },
  mounted() {
    if (!document) return;
    events.$on("show", this.onOpen);
    events.$on("close", this.onClose);
  },
};

export default Component;
</script>

<style></style>
