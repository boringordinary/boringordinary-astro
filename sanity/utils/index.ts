const commonBlocks = [
  {
    type: 'image',
    name: 'image',
    title: 'Image',

    fields: [
      {
        title: 'Caption',
        name: 'caption',
        type: 'string',
      },
    ],
  },
  {
    type: 'header',
  },
  {
    type: 'body',
  },
  {
    type: 'quote',
  },
  {
    type: 'screen',
  },
  {
    type: 'comparisonPoints',
  },
  {
    type: 'actions',
  },
  {
    type: 'video',
  },
  {
    type: 'twoBlocks',
  },
  {
    type: 'imageSet',
  },
  {
    type: 'reference',
    to: [
      {
        type: 'people',
      },
    ],
  },
  {
    type: 'upNext',
  },
]

const commonDocumentTypes = [{type: 'body'}, {type: 'image'}, {type: 'header'}, {type: 'quote'}]

export {commonDocumentTypes, commonBlocks}
