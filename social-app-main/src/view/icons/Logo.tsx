import {forwardRef} from 'react'
import {type TextProps} from 'react-native'
import Svg, {Circle, type PathProps, type SvgProps} from 'react-native-svg'

type Props = {
  allowVariants?: boolean
  fill?: PathProps['fill']
  style?: TextProps['style']
} & Omit<SvgProps, 'style'>

export const Logo = forwardRef(function LogoImpl(props: Props, ref) {
  const {
    allowVariants: _allowVariants,
    fill: _fill,
    style,
    width = 32,
    ...rest
  } = props
  const size = Number.parseInt(`${width}`, 10)

  return (
    <Svg
      accessibilityHint=""
      accessibilityLabel="Aqua"
      fill="none"
      // @ts-expect-error react-native-svg's forwarded ref type is narrower
      ref={ref}
      viewBox="0 0 810 810"
      {...rest}
      width={size}
      height={size}
      style={style}>
      <Circle cx="405" cy="405" r="381" fill="#11278C" />
      <Circle cx="405" cy="405" r="218.5" fill="#FFFFFF" />
      <Circle cx="405" cy="405" r="155.5" fill="#68B8E9" />
      <Circle cx="405" cy="405" r="79.5" fill="#000000" />
    </Svg>
  )
})
