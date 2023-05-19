import { useQuery } from "react-query";
import { useMutation, useQueryClient } from "react-query";
import {
  getPlansList,
  getPlanDetails,
  addPlan,
  updatePlan,
  deletePlan,
} from "./subplansUrls";

const Plans_list = (query) => {
  return useQuery(["plansList", query], () => getPlansList(query), {
    staleTime: 30000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    poll: 500,
  });
};

const Plan_details = (id) => {
  return useQuery(["planDetails", id], () => getPlanDetails(id), {
    staleTime: 30000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    poll: 500,
  });
};

const Add_plan = () => {
  const queryClient = useQueryClient();
  return useMutation((plan) => addPlan(plan), {
    onMutate: async (newPlan) => {
      await queryClient.cancelQueries("plansList");

      const prev = queryClient.getQueryData("plansList");
      return {
        prev,
        newPlan,
      };
    },
    onSettled: () => {
      queryClient.invalidateQueries("plansList");
    },
    onError: (err, _, context) => {
      queryClient.setQueryData("plansList", context.prev);
    },
  });
};

const Edit_plan = () => {
  const queryClient = useQueryClient();
  return useMutation((plan) => updatePlan(plan), {
    onMutate: async (newPlan) => {
      await queryClient.cancelQueries("plansList");

      const prev = queryClient.getQueryData("plansList");
      return {
        prev,
        newPlan,
      };
    },
    onSettled: () => {
      queryClient.invalidateQueries("plansList");
    },
    onError: (err, _, context) => {
      queryClient.setQueryData("plansList", context.prev);
    },
  });
};

const DeletePlan = () => {
  const queryClient = useQueryClient();
  return useMutation((id) => deletePlan(id), {
    onMutate: async (plan) => {
      await queryClient.cancelQueries("plansList");
      const prev = queryClient.getQueryData("plansList");
      return {
        prev,
        plan,
      };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData("plansList", context.prev);
    },
    onSettled: () => {
      queryClient.invalidateQueries("plansList");
    },
  });
};

const useSubscriptionPlansQuery = {
  Plans_list,
  Plan_details,
  Add_plan,
  Edit_plan,
  DeletePlan,
};

export default useSubscriptionPlansQuery;
