import Svg, {Circle, type PathProps, type SvgProps} from 'react-native-svg'

export function Logomark({
  fill: _fill,
  width = 32,
  ...rest
}: {fill?: PathProps['fill']} & SvgProps) {
  const size = Number.parseInt(`${width}`, 10)

  return (
    <Svg
      accessibilityHint=""
      accessibilityLabel="Aqua"
      fill="none"
      viewBox="0 0 810 810"
      {...rest}
      width={size}
      height={size}>
      <Circle cx="405" cy="405" r="381" fill="#11278C" />
      <Circle cx="405" cy="405" r="218.5" fill="#FFFFFF" />
      <Circle cx="405" cy="405" r="155.5" fill="#68B8E9" />
      <Circle cx="405" cy="405" r="79.5" fill="#000000" />
    </Svg>
  )
}
