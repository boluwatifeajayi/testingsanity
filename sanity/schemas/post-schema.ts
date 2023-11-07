const post = {
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Post Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "readtime",
      title: "Read Time In Minutes",
      type: "string"
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: "content",
      title: "Post Body",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
}

export default post;