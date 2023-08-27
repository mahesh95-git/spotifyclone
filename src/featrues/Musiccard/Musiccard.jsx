import React from "react";
import "./Musiccard.css"
import { Link } from "react-router-dom";
import songlobo from "../../asset/image/lobo.jpg";
export default function Musiccard() {
  return (
    <>
      <div className="heading">
        <h2>made for mahesh Rathod</h2>
      </div>
      <div className="container5-1">
    
        <div className="container5-1-1">
          <div className="playlistlobo">
          <Link to='playlist'>
            <img src={songlobo} alt="" />
            </Link>
          </div>
          <div className="playlistName">Hot lhist hindi</div>
          <div className="playlistdescrition">
            Lorem rek jkdja jdka ajkd jdka
          </div>
        </div>
        <div className="container5-1-1">
          <div className="playlistlobo">
          <Link to='playlist'>
            <img src={songlobo} alt="" />
            </Link>
          </div>
          <div className="playlistName">Hot lhist hindi</div>
          <div className="playlistdescrition">
            Lorem rek jkdja jdka ajkd jdka
          </div>
        </div>   <div className="container5-1-1">
          <div className="playlistlobo">
          <Link to='playlist'>
            <img src={songlobo} alt="" />
            </Link>
          </div>
          <div className="playlistName">Hot lhist hindi</div>
          <div className="playlistdescrition">
            Lorem rek jkdja jdka ajkd jdka
          </div>
        </div>   <div className="container5-1-1">
          <div className="playlistlobo">
          <Link to='playlist'>
            <img src={songlobo} alt="" />
            </Link>
          </div>
          <div className="playlistName">Hot lhist hindi</div>
          <div className="playlistdescrition">
            Lorem rek jkdja jdka ajkd jdka
          </div>
        </div>   <div className="container5-1-1">
          <div className="playlistlobo">
          <Link to='playlist'>
            <img src={songlobo} alt="" />
            </Link>
          </div>
          <div className="playlistName">Hot lhist hindi</div>
          <div className="playlistdescrition">
            Lorem rek jkdja jdka ajkd jdka
          </div>
        </div>
        
      </div>
    </>
  );
}
