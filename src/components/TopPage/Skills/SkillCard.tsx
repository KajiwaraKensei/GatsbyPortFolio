// ______________________________________________________
// スキル紹介 - カード
import React from "react"
import styled from "styled-components"

import CircleSVG, { Props as SVGProps } from "components/Parts/CircleSVG"
import { Fade } from "react-awesome-reveal"
import { useWindowSize } from "~/lib/redux"
// ______________________________________________________
// 型
type Props = {
  className?: string
  skill: Skill
  index: number
}

export type Skill = {
  name: string
  proficiencyLevel: number
  description: string
  works: {
    url: string
    name: string
  }[]
}

// SVGの引数の生成
const SetSVG = (skill: Skill): SVGProps => {
  const { proficiencyLevel } = skill

  let color = Math.floor(256 * (proficiencyLevel * 0.01)) + 10
  color > 210 && (color = 210)

  const r = color
  const g = color * 0.9
  const b = (color + 50) * 1.2

  const baseColor = `rgba(${r}, ${g}, ${b}, .5)`
  const strokeWidth =
    proficiencyLevel > 25
      ? proficiencyLevel > 50
        ? proficiencyLevel > 75
          ? 3
          : 3
        : 3.5
      : 3

  const circumference =
    proficiencyLevel > 25
      ? proficiencyLevel > 50
        ? proficiencyLevel > 75
          ? 400
          : 400
        : 400
      : 400

  return {
    percent: proficiencyLevel,
    baseColor,
    strokeWidth,
    circumference,
    marginalColor: "#ffffff00",
  }
}
// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, skill, index } = props
  const { state } = useWindowSize()
  return (
    <Fade
      className={className}
      direction="top"
      delay={state.type === "phone" ? 200 : 200 * index}
      triggerOnce
    >
      <div className="card">
        <div className="circle">
          <div>
            <CircleSVG {...SetSVG(skill)} />
            <div className="percent">{skill.proficiencyLevel}%</div>
          </div>
        </div>

        <div className="content">
          <h2 className="title">{skill.name}</h2>
          <p className="copy">{skill.description}</p>
        </div>
      </div>
    </Fade>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component)`
  display: flex;
  margin: 2rem 1rem;
  color: #eee;
  font-weight: 200;
  & .card > .circle {
    margin-top: 0.5rem;
    & > div {
      position: relative;
      & > .percent {
        font-size: 0.9rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        z-index: -1;
      }
    }
  }

  .card {
    background-color: #71717142;
    border-radius: 0.25rem;
    flex-grow: 1;
    border-radius: 0.5rem;
    position: relative;
    padding: 0.75rem 1rem;
    width: 15rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    &:hover {
      & .btn {
        opacity: 1;
      }
    }
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 2;
    height: 100%;
  }

  .title {
    font-size: 1.3rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    &:after {
      content: "";
      border-top: solid 1px #9f9ae7;
      display: block;
      width: 55px;
      margin: 10px auto;
    }
  }

  .copy {
    text-align: justify;
    margin: 0;
    transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    font-size: 0.9rem;
    line-height: 1.25rem;
  }

  .btn {
    transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0;
    cursor: pointer;
    margin-top: auto;
    padding: 0.5rem 1rem;
    font-size: 0.65rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: #000;
    background-color: #fff;
    border: none;
  }
`
