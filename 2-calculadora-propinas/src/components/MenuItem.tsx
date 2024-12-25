import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
};
export const MenuComponent = ({ item }: MenuItemProps) => {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
      <p>{item.name}</p>
      <p>${item.price}</p>
    </button>
  );
};
