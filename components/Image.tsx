import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`/yjystyle.github.io${src}`} {...rest} />
)

export default Image
