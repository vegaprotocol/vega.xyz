import useWindowMediaQuery from '../hooks/use-window-media-query'

// Small <= 639
// Medium 640 - 767
// Large 768 - 1023
// XLarge 1024 - 1179
// XXLarge 1280 - 1535
// XXXLarge >= 1536

export const MQXXXLarge = ({ children }) => {
  const isXXXLarge = useWindowMediaQuery('(min-width: 1536px)')
  return isXXXLarge ? children : null
}

export const MQXXLarge = ({ children }) => {
  const isXXLarge = useWindowMediaQuery(
    '(min-width: 1280px) and (max-width: 1535px)'
  )
  return isXXLarge ? children : null
}

export const MQXLargeUp = ({ children }) => {
  const isXLargeUp = useWindowMediaQuery('(min-width: 1024px)')
  return isXLargeUp ? children : null
}

export const MQXLarge = ({ children }) => {
  const isXLarge = useWindowMediaQuery(
    '(min-width: 1024px) and (max-width: 1279px)'
  )
  return isXLarge ? children : null
}

export const MQLargeUp = ({ children }) => {
  const isLargeUp = useWindowMediaQuery('(min-width: 768px)')
  return isLargeUp ? children : null
}

export const MQLarge = ({ children }) => {
  const isLarge = useWindowMediaQuery(
    '(min-width: 768px) and (max-width: 1023px)'
  )
  return isLarge ? children : null
}

export const MQMediumDown = ({ children }) => {
  const isMediumDown = useWindowMediaQuery('(max-width: 767px)')
  return isMediumDown ? children : null
}

export const MQMediumUp = ({ children }) => {
  const isMediumUp = useWindowMediaQuery('(min-width: 640px)')
  return isMediumUp ? children : null
}

export const MQMedium = ({ children }) => {
  const isMedium = useWindowMediaQuery(
    '(min-width: 640px) and (max-width: 767px)'
  )
  return isMedium ? children : null
}

export const MQSmall = ({ children }) => {
  const isSmall = useWindowMediaQuery('(max-width: 639px)')
  return isSmall ? children : null
}
