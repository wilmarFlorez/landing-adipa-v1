import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-container px-5 md:px-10 lg:px-[60px] ${className}`}>
      {children}
    </div>
  )
}
