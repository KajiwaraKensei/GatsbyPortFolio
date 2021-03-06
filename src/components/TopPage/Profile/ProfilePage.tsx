// ______________________________________________________
// Profile ページ
import React from "react"
import styled from "styled-components"
import { Element } from "react-scroll"
import { Left, Right } from "."

import Next from "~/Parts/ScrollButton"
import Friend from "~/icon/Friends"
import { useWindowSize } from "~/lib/redux"
import { setSize } from "~/lib/scroll"
import profile from "~/data/profile"

type Props = {
  className?: string
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className } = props
  const { state } = useWindowSize() // 画面サイズ

  return (
    <Element name="profile">
      <div className={className}>
        <div className="profile_background">
          <Friend
            style={friendStyle}
            size={setSize(state.type, 350, 300, 250)}
          />
        </div>
        <div className="wrap">
          <h1>PROFILE</h1>
          <div className="profile_content">
            <Left profile={profile} />
            <Right profile={profile} />
          </div>
        </div>
        <Next to="skills" />
      </div>
    </Element>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component)`
  padding: 3rem 0rem 5rem;
  position: relative;
  color: #000;
  background: #f6f6f6;
  & > .wrap {
    width: 100%;
    max-width: 60rem;
    background: #f6f6f666;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 0 auto;
    & > h1 {
      text-align: center;
      &:after {
        content: "";
        border-bottom: solid 1px #9f9ae7;
        display: block;
        width: 5rem;
        margin: 10px auto;
      }
    }
  }

  .profile_content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  & h3 {
    margin: 0.5rem 0rem 0.25rem;
    font-size: 0.9rem;
  }

  & h2 {
    margin: 2rem 0 0.75rem;
  }
  .content {
    border-left: 2px dotted #0c0c0c;
    padding-left: 0.5rem;

    & > .event {
      padding-left: 0.5rem;
    }
  }

  .profile_background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const friendStyle = `
position: absolute;
bottom: 2rem;
right: 5rem;
`
