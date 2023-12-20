import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => <NextImage src={`/yjy${src}`} {...rest} />

export default Image
