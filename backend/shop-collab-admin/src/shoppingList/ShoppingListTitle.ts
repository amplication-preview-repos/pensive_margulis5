import { ShoppingList as TShoppingList } from "../api/shoppingList/ShoppingList";

export const SHOPPINGLIST_TITLE_FIELD = "id";

export const ShoppingListTitle = (record: TShoppingList): string => {
  return record.id || String(record.id);
};
