import React from 'react'

type Props = {
    data: string[]
    func: React.Dispatch<React.SetStateAction<string>>
}

const about = ({data, func}: Props) => {
  return (
    <div>
        <h1>about</h1>
        {
            data.map((item, idx) => {
                return (<h4 key={idx}>{item}</h4>)  
            })
        }
        <button onClick={() => func("state set")}>Click me</button>
    </div>
  )
}

export default about