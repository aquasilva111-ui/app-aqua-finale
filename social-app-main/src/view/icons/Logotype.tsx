import Svg, {
  type PathProps,
  type SvgProps,
  Text as SvgText,
} from 'react-native-svg'

import {usePalette} from '#/lib/hooks/usePalette'

const ratio = 20 / 64

export function Logotype({
  fill,
  width = 32,
  ...rest
}: {fill?: PathProps['fill']} & SvgProps) {
  const pal = usePalette('default')
  const size = Number.parseInt(`${width}`, 10)

  return (
    <Svg
      accessibilityHint=""
      accessibilityLabel="Aqua"
      fill="none"
      viewBox="0 0 64 20"
      {...rest}
      width={size}
      height={size * ratio}>
      <SvgText
        x="32"
        y="16"
        fill={fill || pal.text.color}
        fontFamily="Inter"
        fontSize="20"
        fontWeight="700"
        textAnchor="middle">
        Aqua
      </SvgText>
    </Svg>
  )
}
