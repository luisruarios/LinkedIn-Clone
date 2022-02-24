import React from 'react'
import './Widgets.css'
import InfoIcon from "@mui/icons-material/Info"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Linkedin clone made with react", "Top news - 528 readers")}
            {newsArticle("Guarapo Labs is rocking!", "Top news - 315 readers")}
            {newsArticle("Redux implementing, worth it?", "Research - 276 readers")}
            {newsArticle("Guarapo Labs growing 2022", "Coding - 300 readers")}
            {newsArticle("Coronavirus updates", "Health - 435 readers")}
            {newsArticle("React improvement 2022", "Development - 675 readers")}
        </div>
    )
}

export default Widgets
