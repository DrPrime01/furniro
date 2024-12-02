import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import wishlist from "./wishlist";
import categories from "./categories";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, wishlist, categories],
};
