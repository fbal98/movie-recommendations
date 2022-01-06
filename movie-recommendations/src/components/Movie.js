//imports
import React from 'react'
import { AiFillLike, AiOutlineLink, AiFillDislike } from 'react-icons/ai'
//styles
import '../App.css'
import './Movie.css'

/*
*Movie component takes the following props
*objectMetaData; an object containg all of the data about that movie
*like; is a function to be called to handle the like 
*dislike; is a function to be called to handle the dislike 
*props.objectMetaData.link; is the link of that specific movie/ or alternatively another page in the website to show all details about it.
 */


export default function Movie(props) {
    return (

        <div className='MovieContainer'>

            {props.objectMetaData ? <img src={props.posterSrc} /> : null}
            <div className='icons'>

                <AiFillLike className='icon' id='like' onClick={props.like} />
                <AiFillDislike className='icon' id='disLike' onClick={props.disLike} />
                <AiOutlineLink className='icon' id='link' onClick={props.objectMetaData.link} />
            </div>


        </div>
    )
}
