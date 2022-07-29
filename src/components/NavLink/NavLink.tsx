import { FC } from 'react'
import Link from 'next/link'
import styles from './NavLink.module.css'

interface NavLinkProps {
  href: string
  children: string
}

export const NavLink: FC<NavLinkProps> = ({
  href,
  children
}) => {
  return (
    <Link href={href}>
      <a className={styles.NavLink}>
        {children}
      </a>
    </Link>
  )
}