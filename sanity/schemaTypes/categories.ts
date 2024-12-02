import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "array",
      of: [
        defineArrayMember({
          name: "image",
          title: "image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (Rule) => Rule.max(50).warning("Max length is 50 characters"),
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "product" }], // References the product schema
        }),
      ],
    }),
  ],
});
