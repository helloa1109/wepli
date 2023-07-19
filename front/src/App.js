
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayListMain from "./PlayListMain/PlayListMain";
import PlayListMain01PlayListRangkingMain from "./PlayListMain/PlayListMain01PlayListRangkingMain";
import PlayListMain02PlayListSearchMain from "./PlayListMain/PlayListMain02PlayListSearchMain";
import MainPage from "./main/MainPage";
import MypageMain from "./mypage/MypageMain";
import SideBar from "./sidebar/SideBar";
import MusicPlayerBar from "./musicbar/MusicPlayerBar";
import PlayListMain03MyPlayListMain from "./PlayListMain/PlayListMain03MyPlayListMain";
import PlayListDetail from "./PlayListMain/PlayListDetail";
import PlayStage from "./PlayStation/PlayStageJS/PlayStage";
import PlayStageList from "./PlayStation/PlayStageJS/PlayStageList"
import TestPage from './TestPage';
function App() {
    // <<<<<<< HEAD

    return (
        <BrowserRouter>
            <SideBar />
            {/*<MusicPlayerBar/>*/}
            <div className="backgroundImgDiv" />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/mypage" element={sessionStorage.getItem("data")!=null?<MypageMain/>:<MainPage/>}/>
                <Route path="/ranking" element={<PlayListMain01PlayListRangkingMain />} />
                <Route path="/pli" element={<PlayListMain02PlayListSearchMain />} />
                <Route path="/pli/*" element={<PlayListDetail />} />
                <Route path="/mypli" element={<PlayListMain03MyPlayListMain />} />
                <Route path="/stage/*" element={<PlayStage />} />
                <Route path="/stage" element={<PlayStageList />} />

                <Route path="/*" element={
                    <h1 style={{ width: "100%", textAlign: "center", marginTop: "25%", position: "absolute" }}>페이지가 없습니다</h1>
                } />
            </Routes>
        </BrowserRouter>
    );
}



export default App;
