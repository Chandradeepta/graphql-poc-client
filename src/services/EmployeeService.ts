import { EmployeePostModel, EmployeeGetModel } from "@/models/EmployeeModel";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6098e4a399011f001713f9d2.mockapi.io/api/",
});

export const getEmployees = (): Promise<any> => {
  return instance.get("Employees").then((response) => {
    return response.data;
  });
};

export const addEmployee = (payload: EmployeePostModel): Promise<any> => {
  return instance.post("Employees", payload).then((response) => {
    return response.data;
  });
};

export const deleteEmployee = (id: number): Promise<any> => {
  return instance.delete(`Employees/${id}`).then((response) => {
    return response.data;
  });
};

export const updateEmployee = (payload: EmployeeGetModel): Promise<any> => {
  return instance.put(`Employees/${payload.id}`, payload).then((response) => {
    return response.data;
  });
};
