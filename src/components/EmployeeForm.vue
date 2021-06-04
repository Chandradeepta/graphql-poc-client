<template>
  <form @submit="handleSubmit">
    <input type="text" placeholder="Name" v-model="formValues.name" />
    <input
      type="text"
      placeholder="Department"
      v-model="formValues.department"
    />
    <input
      type="text"
      placeholder="Technology"
      v-model="formValues.technology"
    />
    <button type="submit" style="width: 10%">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapActions } from "vuex";
import { EmployeeGetModel, EmployeePostModel } from "../Models/EmployeeModel";

export default defineComponent({
  name: "EmployeeForm",
  props: {
    employeeEditData: {
      type: Object as () => EmployeeGetModel,
    },
  },
  data(props) {
    return {
      formValues: {
        name: "",
        department: "",
        technology: "",
      } as EmployeePostModel,

      isEdit: false as boolean,
    };
  },
  watch: {
    employeeEditData: {
      immediate: true,
      handler() {
        const editableData: EmployeePostModel = {
          ...this.employeeEditData,
        } as EmployeePostModel;
        this.formValues = editableData;
        if (Object.keys(editableData).length) {
          this.isEdit = true;
        } else {
          this.isEdit = false;
        }
      },
    },
  },
  methods: {
    ...mapActions(["addEmployee", "updateEmployee"]),
    handleSubmit: function (e: Event) {
      e.preventDefault();
      this.isEdit
        ? this.updateEmployee(Object.assign({}, this.formValues))
        : this.addEmployee(Object.assign({}, this.formValues));
      this.$emit("handleShowForm", false);
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
input {
  width: 35ch;
  margin: 1ch;
  padding: 10px;
}
</style>