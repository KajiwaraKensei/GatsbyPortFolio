// ______________________________________________________
// キャリア
import React, { Fragment } from "react"
import styled from "styled-components"
import { Career } from "~/data/profile"
import BusinessIcon from "@material-ui/icons/Business"

// ______________________________________________________
// 型
type Props = {
  className?: string
  careers: Career[]
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, careers } = props

  const mapCareers = careers.map(career => (
    <Fragment key={"map_career_" + career.year}>
      <h3 className="year">{career.year}</h3>
      <div className="event">{career.event}</div>
    </Fragment>
  ))

  return (
    <div className={className}>
      <h2 className="title width_material_icon">
        Career <BusinessIcon />
      </h2>

      <div className="content">{mapCareers}</div>
    </div>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component)``
