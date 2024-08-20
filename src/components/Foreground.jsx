import React from 'react'
import Card from './Card'
import { useRef } from 'react';

function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
            filesize : ".7mb",
            close:true,
            tag:{isOpen:true, tagTitle : "Download", tagColor:"green"}
        },
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
            filesize : ".7mb",
            close:false,
            tag:{isOpen:false, tagTitle : "Download", tagColor:"red"}
        },
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
            filesize : ".7mb",
            close:true,
            tag:{isOpen:true, tagTitle : "Download", tagColor:"green"}
        },
    ]

  return (
    <div  ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex gap-10 flex-wrap p-5'>

        {data.map((item,index) =>(
            <Card data={item}  reference={ref} />
        ))}
        
    </div>
  )
}

export default Foreground