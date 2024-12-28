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
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .slice(0, 96),
      },
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
