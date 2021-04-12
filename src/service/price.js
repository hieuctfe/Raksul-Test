import Api from "./index";

export const getPrice = async (pageSize) => {
  const response = await Api.get(`/prices`, {
    params: { paper_size: pageSize },
  });
  return response.data;
};
