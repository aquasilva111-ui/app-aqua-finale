import Svg, {
  Circle,
  type PathProps,
  type SvgProps,
  Text as SvgText,
} from 'react-native-svg'

import {useTheme} from '#/alf'

const ratio = 40 / 136

export function LogomarkWithType({
  fill,
  width = 32,
  ...rest
}: {fill?: PathProps['fill']} & SvgProps) {
  const t = useTheme()
  const size = Number.parseInt(`${width}`, 10)

  return (
    <Svg
      accessibilityHint=""
      accessibilityLabel="Aqua"
      fill="none"
      viewBox="0 0 136 40"
      {...rest}
      width={size}
      height={size * ratio}>
      <Circle cx="20" cy="20" r="19" fill="#11278C" />
      <Circle cx="20" cy="20" r="10.9" fill="#FFFFFF" />
      <Circle cx="20" cy="20" r="7.75" fill="#68B8E9" />
      <Circle cx="20" cy="20" r="4" fill="#000000" />
      <SvgText
        x="48"
        y="29"
        fill={fill || t.atoms.text.color}
        fontFamily="Inter"
        fontSize="29"
        fontWeight="700">
        Aqua
      </SvgText>
    </Svg>
  )
}
