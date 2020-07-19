import React from "react"
import styled from "styled-components"
import { profile } from "~/data/profile"
import { MapCareer, MapIntroduction } from "."
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver"
import { Fade } from "react-awesome-reveal"

type Props = {
  className?: string
  profile: profile
}

const Component: React.FC<Props> = props => {
  const { className, profile } = props
  return (
    <div className={className}>
      <div className="self_introduction">
        <Fade direction="top" triggerOnce>
          <h2 className="title width_material_icon">
            Self-introduction
            <RecordVoiceOverIcon />
          </h2>
        </Fade>
        <Fade direction="top" delay={200} triggerOnce>
          <div className="value">{profile.selfIntroduction}</div>
        </Fade>
      </div>

      <MapIntroduction introductions={profile.introductions} />
      <MapCareer careers={profile.careers} />
    </div>
  )
}

export default styled(Component)`
  padding: 4rem 2rem;
  flex-basis: 30rem;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: justify;
  .self_introduction {
    & > .title {
      margin-top: 0;
    }
    & .value {
      border-left: 2px dotted #aaa;
      padding-left: 0.75rem;
    }
  }
`
