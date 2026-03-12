import clsx from 'clsx'
import Image from 'next/image'

export const ResponsiveImage = ({ className, ...props }: any) => (
  <Image
  layout=""
    // layout="responsive"
    alt="Img"
    objectFit="cover"
    className={clsx('block', className)}
    {...props}
  />
)
