import React from 'react'
import { css } from '@emotion/css';

const style = css`
    width: 600px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.5rem;
    color: #333;
    transition: all 0.5s;
    &:hover {
        font-size: 4em;
        color: #f00;
        cursor: pointer;
        transform: rotate(360deg);
    }
`

export const Emotion = () => {
  return (
    <div className={style}>usando Emotion CSS</div>
  )
}
