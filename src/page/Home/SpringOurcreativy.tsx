import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'
import * as styless from './../../styles.module.css'

import productitem1 from "../../img/productitem1.png";
import productitem2 from "../../img/productitem2.png";
import productitem3 from "../../img/productitem3.png";
import productitem4 from "../../img/productitem4.png";

const pages = [
  // <img src={productitem1} alt="logo" />,
  // <img src={productitem2} alt="logo" />,
  // <img src={productitem3} alt="logo" />,
  // <img src={productitem4} alt="logo" />,
  'https://demo.laboon.org/static/media/productitem1.2798df72.png',
  'https://demo.laboon.org/static/media/productitem2.77733997.png',
  'https://demo.laboon.org/static/media/productitem3.fee8b991.png',
  'https://demo.laboon.org//static/media/productitem4.8b8775dc.png'
]

function Viewpager(propso: any) {
  const index = useRef(0)
  const [ref, { width }] = useMeasure()
  const realWidth = width * 1 / 3 + width;
  const [props, api] = useSprings(
    pages.length,
    i => ({
      x: i * realWidth,
      scale: 1,
      display: 'block',
    }),
    [realWidth]
  )
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > realWidth / 2) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
      cancel()
    }
    api.start(i => {
      propso.setIsSelected(index.current)
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * realWidth + (active ? mx : 0)
      const scale = active ? 1 - distance / realWidth / 2 : 1
      return { x, scale, display: 'block' }
    })
  })
  return (
    <div ref={ref} style={styles.wrapper}>
      {props.map(({ x, display, scale }, i) => (
        <animated.div className={styless.page} {...bind()} key={i} style={{ display, x, ...styles.page }}>
          <animated.div style={{ scale, backgroundImage: `url(${pages[i]})` }} />
        </animated.div>
      ))}
    </div>
  )
}
const Mystyle = styled.div`
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; `
const Dot = (props: any) => {
  const { isSelect } = props
  const color: string = isSelect ? '#E4B460' : '#fff'
  return (
    <span style={{ ...styles.dotSpan, backgroundColor: color }}></span>
  )
}

export default function App() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', }}>
      <div style={styles.container}>
        <Viewpager setIsSelected={setIsSelected} />
      </div>
      <Mystyle style={{ height: '10vh' }}>
        {[0, 1, 2, 3].map((value) => {
          return (<Dot isSelect={isSelected == value} />)
        })}
      </Mystyle>
    </div>
  )
}
const styles: { [key: string]: { [key: string]: string } } = {
  wrapper: {
    width: '50%',
    height: '100%',
  },
  container: {
    display: 'flex',

    alignItems: 'center',
    height: '30vh',
    justifyContent: 'center',
    position: 'relative'
  },
  page: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    willChange: 'transform',
  },
  dotSpan: {
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: '10px',
    marginRight: '10px',
  }
}