export default {
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Reading',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'salary',
      title: 'Salary',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'closingDate',
      title: 'Closing Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'location' },
  },
};
