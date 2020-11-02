import React from 'react'
import '../../styles/home/newPaper.scss'

const NewPaper = ({ title, description, img }) => {
    return (
        <div className="NewPaperContainer">
            <div className="imgContainer">
                <img src={img} alt={title} />
            </div>
            <h5>{title}</h5>
            <h6>{description}</h6>
        </div>
    )
}
export default NewPaper