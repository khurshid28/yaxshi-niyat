import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
} from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

import { cn } from '@/utilities/ui'
import { MediaBlock as MediaBlockProps } from '@/payload-types'
import { MediaBlock } from './blocks/MediaBlock/Component'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<MediaBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/news/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    mediaBlock: ({ node }) => <MediaBlock {...node.fields} />,
  },
})

type Props = {
  data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, ...rest } = props
  return <RichTextWithoutBlocks converters={jsxConverters} className={cn(className)} {...rest} />
}
