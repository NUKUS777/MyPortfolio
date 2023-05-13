import React, { useContext } from 'react'
import useFetch from '../utils/api'
import './Video.scss'
import { Link } from 'react-router-dom'
function Video() {
    const {data}=useFetch(
      'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50'

    )
  return (
    <div  className='vid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5' >
        {data?.items?.map((element) => (
        <Link to={`video/${element.id.videoId}`} key={element.id.videoId}>
                <div className="">
            <img
              className="w-full"
              src={element.snippet.thumbnails.medium.url}
              alt=""
            />
            <p className="">{element.snippet.title}</p>
            <div className="">
              <p className="">
                {element.snippet.channelTitle}
              </p>
              <p className="">{element.snippet.publishTime}</p>
                </div>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Video;


