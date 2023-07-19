import React, {useCallback, useEffect, useState} from 'react';
import "./PlayListMain02PlayListSearchMain.css";
import Molu from  "../MainIMG/Molu.gif";
import Aru from  "../MainIMG/ARu.gif";
import Aris from "../MainIMG/Aris.gif";
import PlayListSearchlogoTitle from "../MainIMG/PlayListSearchlogoTitle.png";
import SearchBarIcon from "../MainIMG/SearchBarIcon.png";
import SearchToggleIcon from "../MainIMG/SearchToggleIcon.png";
import SearchToggleIconUp from "../MainIMG/SearchToggleIconUp.png";
import PlayListSearchDetail from "./PlayListSearchDetail";
import PlayListMenu from "./PlayListMenu";
import Axios from "axios";
import {Link} from "react-router-dom";
import axios from "axios";


function PlayListMain02PlayListSearchMain(props) {
    const [type, setType] = useState(0);
    const [queryString , setQueryString] = useState("");
    const [curr, setCurr] = useState(1);
    const [cpp, setCpp] = useState(1000);
    const [orderByDay ,setOrderByDay] = useState(true);
    const [searchDetail, setSearchDetail] = useState([]);
    const [searchResult, setSearchResult] = useState();
    const [toggleOption, setToggleOption] = useState(["제목","닉네임","장르","태그"]);


    const searchOnChange = useCallback(e =>{
        setQueryString(e.target.value);
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    useEffect(()=>{
        const searchDetailUrl = "/api/lv0/p/list";
        Axios.get(searchDetailUrl,{ params: {orderByDay, curr, cpp}})
            .then(res =>
                setSearchDetail(res.data));
    },[]);


    const NoSearch =() =>{
        const searchDetailUrl = "/api/lv0/p/list";
        Axios.get(searchDetailUrl,{ params: {orderByDay, curr, cpp}})
            .then(res =>
                setSearchResult(res.data));
    };

    const SearchButton = () => {
        const SearchURl = "/api/lv0/p/search";
        queryString === ""? NoSearch():
        Axios.get(SearchURl,{ params: {type, queryString}})
            .then(res =>
                setSearchResult(res.data));
    };
    const SearchEnter = (e) =>{
        if (e.key === 'Enter') {
                SearchButton();
        }
    };

    const SelectSearchOption = (e) =>{
        setType(e.target.getAttribute("value"));

    }

    const reload = () =>{
        window.location.replace("");
    }

    return (
        <div className="playlistmain02">
            <div className="playlistsearcjheader">
                <img
                    className="playlistsearchlogotitle-icon"
                    alt=""
                    src={PlayListSearchlogoTitle}
                    onClick={reload}
                />
                <div className="playlistbuttonlist-parent">
                    {<PlayListMenu/>}
                    <div className="searchtypebox-parent">
                        <div className="searchtypebox">
                            <div className="playlistmainsearchbody" />
                            <img
                                className="playlistmainsearchtoggle-icon"
                                alt=""
                                src={SearchToggleIcon}
                            />
                            <div className="playlistmainsearchoption" onClick={toggleDropdown}>{
                                toggleOption[type]}
                                {isOpen && (
                                    <div  className="playlistmainsearchDropDownBody"><img alt="" className="playlistmainsearchtoggleUP-icon" src={SearchToggleIconUp}/>
                                        <option className="playlistmainsearchDropDown" onClick={SelectSearchOption} value={0}>제목</option>
                                        <option className="playlistmainsearchDropDown" onClick={SelectSearchOption} value={1}>닉네임</option>
                                        <option className="playlistmainsearchDropDown" onClick={SelectSearchOption} value={2} >장르</option>
                                        <option className="playlistmainsearchDropDown" onClick={SelectSearchOption} value={3}>태그</option>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="playlistsearchbar">
                            <input className="playlsitsearchbarbody" onKeyPress={SearchEnter} value={queryString} type="text" placeholder="검색할 내용을 입력해 주세요"  onChange={searchOnChange}/>
                                <img onClick={SearchButton}
                                    className="playlsitsearchicons"
                                    alt=""
                                    src={SearchBarIcon}
                                />
                        </div>
                    </div>
                </div>
            </div>
            {searchResult != null ? <PlayListSearchDetail searchResult={searchResult}/> : <PlayListSearchDetail searchResult={searchDetail}/>}
        </div>
    );
}

export default PlayListMain02PlayListSearchMain;