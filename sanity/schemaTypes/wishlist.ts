import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "wishlist",
  title: "Wishlist",
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
      validation: (Rule) => Rule.max(9).warning("Max length is 9 characters"),
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
  ],
});
