import React, { useState, useRef } from "react"
import styled, { keyframes } from "styled-components"
import works from "~/data/works"
import { navigate } from "@reach/router"
import { Page } from "."
import NotFoundIcon from "~/components/Icons/NotFoundIcon"
import { customBlinking } from "~/lib/style"

type Props = {
  className?: string
  name: string
}
const worksName = () => {
  let name = ""
  const w = works
  w.sort()
  works.forEach(work => {
    name += "'" + work.name + "'  "
  })
  return name
}

import { setSize } from "~/lib/scroll"
import { useSelector } from "react-redux"
import { RootState } from "~/store"
const useRedux = () => {
  const state = useSelector((state: RootState) => ({
    load: state.window.load,
    type: state.window.type,
  }))
  return { state }
}

const Component: React.FC<Props> = props => {
  const { state } = useRedux()
  const { className, name } = props
  const [work, setWork] = useState(name)
  const [ok, setOk] = useState(false)
  const [articles, serArticles] = useState([
    `page not found:'${name}'`,
    `表示したい作品名を入力してください。`,
    `もしくは、ls:一覧で作品を表示 | home:ホームに戻る`,
  ])
  const ref = useRef<HTMLInputElement>(null)
  const [count, setCount] = useState(0)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !ok && setWork(event.target.value)
  }
  const gotoHome = () => {
    navigate(`/`)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    serArticles(articles => [...articles, work])

    if (work === "") return
    if (work === "home" || count > 10) {
      serArticles(articles => [...articles, `ホームに移動します...`])
      setTimeout(() => {
        navigate(`/`)
      }, 500)
    } else if (work === "ls") {
      serArticles(articles => [...articles, worksName()])
    } else {
      const res = works.filter(({ name }) => name === work)
      if (res.length) {
        if (res[0].name === work) {
          serArticles(articles => [...articles, `OK！移動します...`])

          setTimeout(() => {
            setOk(true)
            navigate(`/work/${res[0].name}`)
          }, 500)
          return
        }
      }
      setCount(count + 1)
      serArticles(articles => [
        ...articles,
        `no such work_name or command: ${work}`,
      ])
    }

    setWork("")
  }

  const mapArticles = articles.map(article => (
    <p key={article}>
      {"> "}
      {article}
    </p>
  ))
  return ok ? (
    <Page name={work} />
  ) : (
      <div className={className}>
        <NotFoundIcon style={IconStyle} size={setSize(state.type, 500, 450, 350)} />
        <form onSubmit={handleSubmit}>
          {mapArticles}
          <p>
            {"> "}
            <Cursor
              ref={ref}
              onBlur={() => {
                ref.current?.focus()
              }}
              value={work}
              onChange={handleChange}
              autoFocus
            />
          </p>
        </form>
        <button onClick={gotoHome}>HOME</button>
      </div>
    )
}

const Cursor = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  color: #fff;
`

export default styled(Component)`
  background: #000;
  color: #fff;
  position: relative;
  z-index: -2;
  button {
    font-size: 1rem;
    color: #fff;
    position: fixed;
    top: 3rem;
    right: 5%;
    background: #fb496d;
    border: 1px solid #000;
    border-radius: 5rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    animation: ${customBlinking(["#fff", "#fb496d"], ["#000", "#fff"])} 2s infinite; 
    cursor: pointer;
  }
  p {
    display: flex;
  }
  * {
    font-size: 0.8rem;
    font-family: Consolas, Menlo, "Liberation Mono", Courier, monospace;
    font-weight: 200;
  }
`

const IconStyle = `
  position: absolute;
  top: 5rem;
  right: 5%;
  opacity: .5rem;
  z-index: -1;
`
