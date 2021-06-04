<template>
  <div class="btn-container">
    <button class="btn" @click="handleAddEmployee(!showForm)">
      Add Employee
    </button>
  </div>
  <div class="form-container" v-show="showForm">
    <h3  v-show="isEdit">Update Employee</h3>
    <h3  v-show="!isEdit">Add Employee</h3>
    <EmployeeForm
      v-on:handleShowForm="handleShowForm"
      :employeeEditData="employeeData"
    />
  </div>
  <div class="tableContainer">
    <table class="table">
      <thead>
        <tr>
          <th>Emp Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Department</th>
          <th class="text-left">Technology</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td class="text-left">{{ employee.name }}</td>
          <td class="text-left">{{ employee.department }}</td>
          <td class="text-left">{{ employee.technology }}</td>
          <td>
            <i class="far fa-edit" @click="handleEditEmployee(employee)"></i>
          </td>
          <td>
            <i
              class="far fa-trash-alt"
              @click="deleteEmployee(Number(employee.id))"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { mapActions, useStore } from "vuex";
import { defineComponent } from "vue";
import { EmployeeGetModel, EmployeePostModel } from "../Models/EmployeeModel";
import EmployeeForm from "./EmployeeForm.vue";

export default defineComponent({
  name: "EmployeeTable",
  components: {
    EmployeeForm
  },
  props: {
    employees: {
      type: Object as () => EmployeeGetModel,
      required: true,
    },
  },
  data() {
    return {
      showForm: false as boolean,
      isEdit: false as boolean,
      employeeData: {} as EmployeeGetModel,
    };
  },
  methods: {
    handleShowForm: function (value: boolean) {
      this.showForm = value;
    },
    handleAddEmployee: function (value: boolean) {
      this.employeeData = {} as EmployeeGetModel;
      this.isEdit = false;
      this.handleShowForm(value);
    },
    handleEditEmployee: function (employee: EmployeeGetModel) {
      this.employeeData = employee;
      this.isEdit = true;
      this.handleShowForm(true);
    },
    ...mapActions({ deleteEmployee: "deleteEmployee" }),
  },
});
</script>

<style scoped>
.tableContainer {
  width: 100%;
  display: flex;
}
table {
  width: 100%;
  border: 1px solid black;
}
thead {
  background: #bbb8b8;
}

th {
  padding: 1%;
}
td {
  padding: 1%;
}
.text-left {
  text-align: left;
}
.form-container {
  padding: 2%;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1%;
}

.btn {
  padding: 10px;
}
</style>
