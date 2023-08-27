import React from "react";
import "./musicControl.css";
import lobo from "../../asset/image/lobo.jpg";
import { AiFillPlayCircle, AiOutlineStepBackward } from "react-icons/ai";
import { LuMic2 } from "react-icons/lu";
import { BiVolumeFull } from "react-icons/bi";
import { ImNext2 } from "react-icons/im";
import { BiShuffle } from "react-icons/bi";
import { FiRepeat } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
export default function MusicControll() {
  return (
    <div className="container-4-1">
      <div className="container-4-1-1">
        <div className="songlobo">
          <img src={lobo} alt="" />
        </div>

        <div className="songname">
          <div className="songName"> the rrise</div>
          <div className="singerName">Udd Jaa Kaale Kaava (From "Gadar 2")</div>
        </div>
        <div className="saveLibrary">
          <button className="saveIcon">
            <FcLike />
          </button>
        </div>
      </div>
      <div className="container-4-1-2">
        <div className="controller">
          <div className="shuffil  controlicon">
            <button>
              <BiShuffle />
            </button>
          </div>
          <div className="backsong controlicon">
            <button>
              <AiOutlineStepBackward />
            </button>
          </div>
          <div className="playsong">
            <button>
              <AiFillPlayCircle />
            </button>
          </div>
          <div className="nextsong controlicon">
            <button>
              <ImNext2 />
            </button>
          </div>
          <div className="repeat controlicon">
            <button>
              <FiRepeat />
            </button>
          </div>
        </div>
        <div className="seekbar">
          <div className="time">2.50</div>{" "}
          <div className="bar">
            <progress
              value={20}
              id="bar"
              max="100"
              onChange={(e) => {
                console.log(e)
              }}
            >
              {" "}
              32%{" "}
            </progress>
          </div>
          <div className="duration">4.40</div>
        </div>
      </div>
      <div className="container-4-1-3">
        <div className="lyrics">
          <button>
            <LuMic2 />
          </button>
        </div>
        <div className="volume">
          <div className="volume-icon">
            <button>
              <BiVolumeFull />
            </button>
          </div>
          <input type="range" />
        </div>
      </div>
    </div>
  );
}
