type AvatarProps = {
  src: string
  alt?: string
  className?: string
}

export function Avatar({ src, alt = 'Avatar', className = '' }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`inline-block rounded-full object-cover ${className}`}
    />
  )
}


