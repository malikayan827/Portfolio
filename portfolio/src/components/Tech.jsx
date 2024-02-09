import React from 'react'
import { BallCanvas} from './canvas'
import { StarWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../style'
const Tech = () => {
  return (
    <div>
    <p className={styles.sectionSubText}>Technologies I use...</p>
        
    <div className='mt-7 pt-7 flex flex-row flex-wrap
    justify-center gap-10'>
      
    {technologies.map((tech) => (
     
        <div className='w-28 h-28' key={tech.name} >
        <BallCanvas icon={tech.icon} /></div>
        ))}
    </div>
  </div>
  )
}

export default StarWrapper(Tech, "")