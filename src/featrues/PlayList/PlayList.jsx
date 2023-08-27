import React from "react";
import "./Playlist.css";
import Slidebar from "../Slidebar/Slidebar";
import lobo from "../../asset/image/lobo.jpg";
import MusicControll from "../MusicControll/MusicControll";
import Navbar from "../Navbar/Navbar";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

import { FcLike } from "react-icons/fc";
export default function PlayList() {
  return (
    <>
      <div className="playlistcontainer">
        <Slidebar />
        <div className="container6-1">
          <Navbar />
          <div className="container6-1-1">
            <div className="playlistimg">
              <img src={lobo} alt=""/>
            </div>
            <div className="playlist-name">
              <div className="playlist">Playlist</div>
              <div className="playlistname">Peaceful Piano</div>
              <div className="playdes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, vel.
              </div>
              <div className="playlist-dtl"></div>
            </div>
          </div>
          <div className="container6-1-2">
            <div className="cotainer6-1-2-1">
              <div className="playAll">
                <button>
                  <AiFillPlayCircle />
                </button>
              </div>
              <div className="buttonlobo">Play all song</div>
            </div>
            <div className="cotainer6-1-2-2">
              <div className="title">Title</div>
              <div className="duration">Duration</div>
              <div className="like">like</div>
            </div>
          </div>
          <div className="container6-1-2-3">
            <div className="playicon">
              <button >
                <BsFillPlayFill />
              </button>
            </div>
            <div className="container6-1-2-3-1">
              <div className="songopic">
                <img src={lobo} alt="" />
              </div>
              <div className="songinfo">
                <div className="songtitle">DESPERADO</div>
                <div className="songdesc">
                  Lorem ipsum dolor, sit amet consectetur.
                </div>
              </div>
            </div>
            <div className="songduration">4.39</div>
            <div className="savelibarary">
              <button>
                <FcLike />
              </button>
            </div>
          </div>
          <div className="container6-1-2-3">
            <div className="playicon">
              <button >
                <BsFillPlayFill />
              </button>
            </div>
            <div className="container6-1-2-3-1">
              <div className="songopic">
                <img src={lobo} alt="" />
              </div>
              <div className="songinfo">
                <div className="songtitle">DESPERADO</div>
                <div className="songdesc">
                  Lorem ipsum dolor, sit amet consectetur.
                </div>
              </div>
            </div>
            <div className="songduration">4.39</div>
            <div className="savelibarary">
              <button>
                <FcLike />
              </button>
            </div>
          </div><div className="container6-1-2-3">
            <div className="playicon">
              <button>
                <BsFillPlayFill />
              </button>
            </div>
            <div className="container6-1-2-3-1">
              <div className="songopic">
                <img src={lobo} alt="" />
              </div>
              <div className="songinfo">
                <div className="songtitle">DESPERADO</div>
                <div className="songdesc">
                  Lorem ipsum dolor, sit amet consectetur.
                </div>
              </div>
            </div>
            <div className="songduration">4.39</div>
            <div className="savelibarary">
              <button>
                <FcLike />
              </button>
            </div>
          </div><div className="container6-1-2-3">
            <div className="playicon">
              <button>
                <BsFillPlayFill />
              </button>
            </div>
            <div className="container6-1-2-3-1">
              <div className="songopic">
                <img src={lobo} alt="" />
              </div>
              <div className="songinfo">
                <div className="songtitle">DESPERADO</div>
                <div className="songdesc">
                  Lorem ipsum dolor, sit amet consectetur.
                </div>
              </div>
            </div>
            <div className="songduration">4.39</div>
            <div className="savelibarary">
              <button>
                <FcLike />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MusicControll />
    </>
  );
}
