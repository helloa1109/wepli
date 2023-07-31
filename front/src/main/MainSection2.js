import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./css/MainSection2.css";
import posther1 from "./photo/poster1.png";
import posther2 from "./photo/posther2.png";
import star from "./photo/star.png";
import texts from "./photo/3dtext.png";

function MainSection2(props) {
    const youtubeRef = useRef(null);
    const youtube1Ref = useRef(null);
    const poster1Ref = useRef(null);
    const poster2Ref = useRef(null);
    const poster3Ref = useRef(null);
    const poster4Ref = useRef(null);
    const poster5Ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(youtubeRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: youtubeRef.current, start: "top 80%", end: "top 50%", scrub: 1 } });
        gsap.fromTo(youtube1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: youtube1Ref.current, start: "top 80%", end: "top 50%", scrub: 1 } });

        gsap.fromTo(poster1Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: poster1Ref.current, start: "top 80%", end: "top 50%", scrub: 1 } });

        gsap.fromTo(poster2Ref.current, { opacity: 0, y: 50, rotation: -45 }, { opacity: 1, y: 0, rotation: 0, duration: 1, scrollTrigger: { trigger: poster2Ref.current, start: "top 80%", end: "top 50%", scrub: 1 } });

        gsap.fromTo(poster3Ref.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: poster3Ref.current, start: "top 80%", end: "top 50%", scrub: 1 } });

        gsap.fromTo(poster4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: poster4Ref.current, start: "top 80%", end: "top 50%", scrub: 1 } });

        gsap.fromTo(poster5Ref.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: poster5Ref.current, start: "top 80%", end: "top 50%", scrub: 1 } });

    }, []);

    return (
        <div className={'mainsection2'}>
            <div className={'posthergroup'}>
                <img src={posther1} className={'posther1'} ref={poster1Ref} />
                <img src={posther2} className={'posther2'} ref={poster2Ref} />
                <img src={star} className={'posther3'} ref={poster3Ref} />
                <img src={texts} className={'posther4'} ref={poster4Ref} />
                <img src={posther2} className={'posther5'} ref={poster5Ref} />
            </div>
        </div>
    );
}

export default MainSection2;
