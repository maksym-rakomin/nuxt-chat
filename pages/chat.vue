<template>
  <h1>Chat page {{ user.name }}</h1>
</template>

<script>
import { mapState } from "vuex";
export default {
  middleware: ["chat"],
  head() {
      return {
          title: `комната ${this.user.room}`
      }
    
  },
  computed: mapState(["user"])
};
</script>
