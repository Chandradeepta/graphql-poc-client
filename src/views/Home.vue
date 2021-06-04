<template>
  <div class="home">
    <header>
      <h1>Employee Directory</h1>
      <button @click="logout">Logout</button>
    </header>
    <EmployeeTable :employees="employees" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmployeeTable from "@/components/EmployeeTable.vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    EmployeeTable,
  },
  mounted() {
    this.getEmployees();
  },
  computed: {
    ...mapState({ employees: "employees" as string }),
  },
  methods: {
    ...mapActions({ getEmployees: "getEmployees" as string }),
    logout: function () {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
button {
  padding: 0.5rem;
  background: dodgerblue;
  color: white;
  border: none;
  border-radius: 5px;
}
.home {
  width: 100%;
  padding: 2%;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 1%;
  padding-right: 0;
}

</style>
