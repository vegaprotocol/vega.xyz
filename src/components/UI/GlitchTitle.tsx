import React from 'react'
import styled, { keyframes } from 'styled-components'
import TitleGlitchRed from '../../images/title-glitch-red.png'
import TitleGlitchPurple from '../../images/title-glitch-purple.png'
import TitleGlitchBlue from '../../images/title-glitch-blue.png'
import TitleGlitchOrange from '../../images/title-glitch-orange.png'

export interface GlitchTitleProps {
  children: React.ReactNode
  color?: 'red' | 'purple' | 'blue' | 'orange'
}

const blink = keyframes`
  to {
    visibility: hidden;
  }
`

const Glitch = (color) => {
  if (color === 'red') {
    return <TitleGlitchRed />
  } else if (color === 'purple') {
    return <TitleGlitchPurple />
  } else if (color === 'blue') {
    return <TitleGlitchBlue />
  } else {
    return <TitleGlitchOrange />
  }
}

const Title = styled.div`
  &::after {
    position: relative;
    margin-bottom: -0.1em;
    display: inline-block;
    content: '';
    height: 0.85em;
    width: 0.55ch;
    background-image: url(${(props) => Glitch(props.color).type});
    background-size: cover;
    background-position: 50% 50%;
    animation: ${blink} 1.5s steps(2, start) infinite;
  }
`
const GlitchTitle = ({ children, color = 'orange' }: GlitchTitleProps) => {
  return <Title color={color}>{children}</Title>
}

export default GlitchTitle
