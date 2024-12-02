import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineArrayMember({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (Rule) => Rule.max(50).warning("Max length is 50 characters"),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "categoryName",
      title: "Category Name",
      type: "string",
    }),
    defineField({
      name: "categorySlug",
      title: "Category Slug",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "categories" }],
        }),
      ],
    }),
  ],
});
