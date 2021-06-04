import { createStore } from "vuex";
import { EmployeeGetModel } from "@/models/EmployeeModel";
import { MutationTypes } from "./mutation-types";
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "@/services/EmployeeService";

export default createStore({
  state: {
    employees: [] as EmployeeGetModel[],
  },
  mutations: {
    getEmployees(state, payload: EmployeeGetModel[]) {
      state.employees = payload;
    },
    addEmployee(state, payload: EmployeeGetModel) {
      state.employees = state.employees.concat(payload);
    },
    deleteEmployee(state, payload: EmployeeGetModel) {
      state.employees = state.employees.filter(
        (emp: EmployeeGetModel) => emp.id !== payload.id
      );
    },
    updateEmployee(state, payload: EmployeeGetModel) {
      const tempState = { ...state };
      const index = tempState.employees.findIndex(
        (emp) => emp.id === payload.id
      );
      tempState.employees[index] = payload;
      state.employees = tempState.employees;
    },
  },
  actions: {
    getEmployees({ commit }) {
      getEmployees().then((response) => {
        commit(MutationTypes.GET_EMPLOYEES, response);
      });
    },

    addEmployee({ commit }, payload) {
      addEmployee(payload).then((response) => {
        commit(MutationTypes.ADD_EMPLOYEE, response);
      });
    },

    deleteEmployee({ commit }, id: number) {
      deleteEmployee(id).then((response) => {
        commit(MutationTypes.DELETE_EMPLOYEE, response);
      });
    },

    updateEmployee({ commit }, payload) {
      updateEmployee(payload).then((response) => {
        commit(MutationTypes.UPDATE_EMPLOYEE, response);
      });
    },
  },
  modules: {},
});
