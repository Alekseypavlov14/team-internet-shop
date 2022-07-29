import { FC } from 'react'
import Image from 'next/image'
import logo from './../../assets/logo.png'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <Image 
      src={logo}
      layout='fixed'
      priority
    />
  )
}