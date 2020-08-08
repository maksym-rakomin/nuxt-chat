<template>
  <div>
    <ul>
      <li v-for="m in messages" >
        m.text
      </li>
    </ul>
  </div>
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
  computed: mapState(["user", "messages"])
};
</script>
