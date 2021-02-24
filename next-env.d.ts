/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const Component: React.FC<React.SVGProps<{}>>
  export default Component
}
declare module '*.png' {
  const path: string
  export default path
}
declare module '*.jpg' {
  const path: string
  export default path
}
