import React from 'react';
import { svgArray } from '../../assets/constants'

const ProgamingLangIcons = (): React.ReactElement => {
  return (
    <div>
      {svgArray.map(svg => (
        svg
      ))}
    </div>
  )
}

export default ProgamingLangIcons
