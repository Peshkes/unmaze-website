import React, {useState} from 'react';
import style from './videos.module.css'
import {Video, videosData} from "./videosData";
import {useTranslation} from "react-i18next";

const getBestQuality = () => {
    const width = window.innerWidth;
    if (width >= 1920) return '1080';
    if (width >= 1280) return '720';
    return '360';
};

const Videos = () => {

    const {t} = useTranslation();
    const [selectedVideo, setSelectedVideo] = useState<Video>(videosData[0]);
    const [videoQuality] = useState(getBestQuality());

    const handleMenuClick = (id: number) => {
        setSelectedVideo((prevSelectedVideo) => {
                const video = videosData.find((video) => video.id === id);
                return video || prevSelectedVideo;
            }
        );
    };

    return (
        <div className={`wrapper ${style.block}`}>
            <div className={style.navBlock}>
                <div className={style.nav}>
                    {videosData.map((video) => (
                        <div className={"clickable " + (video.id === selectedVideo.id ? style.active : "")} key={video.id} onClick={() => handleMenuClick(video.id)}>
                            <p className={"clickable"}>{t(`videos.${video.id}`)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.videoBlock}>
                {selectedVideo && (
                    <video>
                        <source src={selectedVideo.src[videoQuality as '360' | '720' | '1080']} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
};

export default Videos;
