import React from 'react'
import "./featuretab.css"

const FeatureTab = ({title,description,featureImg,bgColor}) => {
  return (
    <>
    <div className='featureTab' style={{backgroundColor:bgColor}}>
                    <div className="flex">
                    <img src={featureImg}
                     alt="feature" />
                    <h2>{title}</h2>
                    </div>
                    <p>{description}</p>
                    
                </div>
                </>
  )
}

export default FeatureTab
