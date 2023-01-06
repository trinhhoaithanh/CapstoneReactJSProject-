import React, {memo} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ResponsiveItem = (props) => {//props.component, props.mobileComponent
    const [screen,setScreen] = useState({
        width:window.innerWidth,
        height: window.innerHeight
    })
    const handleOnLoad=()=>{
        setScreen({
            width:window.innerWidth
        })
    }
    useEffect(()=>{
        window.onload = handleOnLoad
        window.onresize = handleOnLoad
        return ()=>{
            window.removeEventListener('load',handleOnLoad);
            window.removeEventListener('resize',handleOnLoad);
        }
    },[])
    let Component = props.component;
    if (screen.width<768&&props.mobileComponent){
        Component = props.mobileComponent
    }

  return (
    <div>
        <Component/>
    </div>
  )
}

export default memo(ResponsiveItem)