import axios from 'axios';

const tasksApi = axios.create({
    baseURL: `http://192.168.254.130:8001/tasks/api/v1/tasks`,
  });

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}`);

export const createTask = (task) => tasksApi.post("/", task);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);