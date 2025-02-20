import { conventionProvincies } from "../data-list";

export const FilterProvince = (province = "", type = "") => {
  return conventionProvincies.filter(
    (filter) => filter.province === province && filter.type === type
  );
};
