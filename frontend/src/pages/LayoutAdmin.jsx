import React from "react";
import { Outlet } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { setListRoles } from "../feature/roleSlice";

// Loader starts ------
export const loader = (store) => async () => {
  const { listRoles } = store.getState().roles;
  try {
    if (listRoles.length === 0) {
      const roleResponse = await customFetch.get(`/masters/roles`);
      store.dispatch(setListRoles(roleResponse.data.data.rows));
    }
    return null;
  } catch (error) {
    return error;
  }
};

// Main component starts ------
const LayoutAdmin = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
