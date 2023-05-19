import DataService from "../DataService";

const getPlansList = async ({ limit, offset, search }) => {
  let url = `admin/subscriptions/plans/?limit=${limit}&offset=${offset}&search=${search}`;
  const data = await DataService.get(url);
  return data.data;
};

const getPlanDetails = async (id) => {
  let url = `admin/subscriptions/plan/${id}/`;
  const data = await DataService.get(url);
  return data.data;
};

const addPlan = async (value) => {
  let url = `admin/subscriptions/plans/`;
  const data = await DataService.post(url, value);
  return data;
};

const updatePlan = async (value) => {
  const { id, ...editData } = value;
  const url = `admin/subscriptions/plan/${id}/`;
  const response = await DataService.patch(url, value);
  return response;
};

const deletePlan = async (id) => {
  const url = `admin/subscriptions/plan/${id}/`;
  const data = await DataService.del(url);
  return data;
};

export { getPlansList,getPlanDetails,addPlan,updatePlan,deletePlan };
