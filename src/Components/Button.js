import React from 'react'
const Button = () => {
  const btnContent=['All','Live','India','React','Music','News','Aptitude','Programming','Comedy','Web Series','Podcast','Traveling']
  return (
    <div>
      {btnContent.map((item,index)=>{
        return(
          <button className='h-auto w-auto p-3 bg-slate-600 rounded-xl mx-3 my-2 text-white' key={index}> {item} </button>
        )
      })}

    </div>
  )
}

export default Button;