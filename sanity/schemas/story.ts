import {commonBlocks} from '../utils'

export default {
  name: 'story',
  type: 'document',
  title: 'Story',
  description: 'All our work',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      title: 'Blocks',
      name: 'blocks',
      type: 'array',
      of: [...commonBlocks, {type: 'comparisonScreen'}],
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
    },
    {
      title: 'Preview',
      name: 'preview',
      description: 'Use this to preview the story.',
      type: 'object',
      fields: [
        {title: 'Title', name: 'title', type: 'string'},
        {title: 'Subtitle', name: 'subtitle', type: 'string'},
        {title: 'Link', name: 'link', type: 'string'},
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Image',
          description: 'Full page screenshot of the website.',
          name: 'image',
          type: 'image',
        },
      ],
    },
  ],
}
