// ______________________________________________________
// Profile の 左側
import React from "react"
import styled from "styled-components"
import { profile } from "~/data/profile"
import Image from "~/Parts/Image"
import { GitHub, Mail as MailIcon, Phone as PhoneIcon } from "@material-ui/icons"
import { githubLink, telLink, mailLink, twitterLink } from "~/lib/index"

// ______________________________________________________
// 型
type Props = {
  className?: string
  profile: profile
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = props => {
  const { className, profile } = props
  return (
    <div className={className}>
      <div className="profile_image">
        <Image
          alt="プロフィール画像"
          filename={profile.image}
          height={"15rem"}
          width={"15rem"}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <h2 className="name">
        {profile.name[0]} {profile.name[1]}
      </h2>
      <div className="info">
        <h3 className="title width_material_icon">
          <GitHub />
          GitHub
        </h3>
        <a
          href={githubLink(profile.github)}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="gitHub"
        >
          <div className="value">{profile.github}</div>
        </a>
      </div>
      <div className="info">
        <h3 className="title width_material_icon">
          <PhoneIcon />
          Phone
        </h3>
        <a
          href={telLink(profile.tel)}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="tel"
        >
          <div className="value">{profile.tel}</div>
        </a>
      </div>
      <div className="info">
        <h3 className="title width_material_icon">
          <MailIcon />
          Email
        </h3>
        <a
          href={mailLink(profile.mail)}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="mail"
        >
          <div className="value">{profile.mail}</div>
        </a>
      </div>
    </div>
  )
}

// ______________________________________________________
// スタイル
export default styled(Component)`
  background: #f6f6f666;
  flex-basis: 25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem 3rem;
  color: #000;
  z-index: 1;
  & h2 {
    font-weight: 200;
    color: #000;
  }
  & h3 {
    justify-content: center;
    margin: 1.5rem 0.5rem 1rem;
  }
  & > * {
    text-align: center;
  }
  .profile_image {
    display: flex;
    justify-content: center;
  }
  .name {
    text-align: center;
    text-transform: capitalize;
  }
`
