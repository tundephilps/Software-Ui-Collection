import React from "react";
import "./Slider.scss";
import Job from "../../images/Job.png";
import download from "../../images/download.jpg";
import Streaming from "../../images/Football.png";
import Task from "../../images/Task.png";
import File from "../../images/File.png";
import Customer from "../../images/Customer.png";
import messanger from "../../images/messanger.png";
import glass from "../../images/glass.png";
import Video from "../../images/Video.png";

import social from "../../images/social.png";
import Office from "../../images/Office.png";

const Sliders = () => {
  return (
    <body>
      <div class="container">
        <div class="gallery-container w-3 h-2">
          <div class="gallery-item">
            <div class="image">
              <a href="https://job-search-drab.vercel.app">
                {" "}
                <img src={Job} alt="nature" />
              </a>
            </div>
            <div class="text">Job Search UI</div>
          </div>
        </div>

        <div class="gallery-container w-3 h-3">
          <div class="gallery-item">
            <div class="image">
              <a href="https://file-share-ui.vercel.app/">
                <img src={File} alt="people" />
              </a>
            </div>
            <div class="text">
              <div>File Sharing WebApp</div>
            </div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <a href="https://video-ui.vercel.app/">
                <img src={Video} alt="sport" />
              </a>
            </div>
            <div class="text">Video Channel</div>
          </div>
        </div>

        <div class="gallery-container w-2">
          <div class="gallery-item">
            <div class="image">
              <a href="https://task-ui-eta.vercel.app/">
                {" "}
                <img src={Task} alt="fitness" />
              </a>
            </div>
            <div class="text">Task App</div>
          </div>
        </div>

        <div class="gallery-container w-4 h-1">
          <div class="gallery-item">
            <div class="image">
              <a href="https://managment-ui.vercel.app/">
                <img src={Customer} alt="food" />
              </a>
            </div>
            <div class="text">Customer Management</div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <img src={download} alt="travel" />
            </div>
            <div class="text"></div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <img src={download} alt="art" />
            </div>
            <div class="text"></div>
          </div>
        </div>

        <div class="gallery-container w-3 h-2">
          <div class="gallery-item">
            <div class="image">
              <a href="https://football-fourm.vercel.app/">
                <img src={Streaming} alt="travel" />
              </a>
            </div>
            <div class="text">Football streaming</div>
          </div>
        </div>

        <div class="gallery-container w-3 h-3">
          <div class="gallery-item">
            <div class="image">
              <a href="https://task-manager-psi-one.vercel.app/">
                <img src={Office} alt="people" />
              </a>
            </div>
            <div class="text">
              <div>Office Workspace</div>
            </div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <a href="https://messanger-ui.vercel.app/">
                <img src={messanger} alt="sport" />
              </a>
            </div>
            <div class="text">Chat Messanger</div>
          </div>
        </div>

        <div class="gallery-container w-2">
          <div class="gallery-item">
            <div class="image">
              <a href="https://glass-henna.vercel.app/">
                <img src={glass} alt="fitness" />
              </a>
            </div>
            <div class="text">GlassMorphic Dashboard</div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <img src={download} alt="cars" />
            </div>
            <div class="text"></div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <a href="https://social-media-ui-rust.vercel.app/">
                <img src={social} alt="Social" />
              </a>
            </div>
            <div class="text">Social Media UI</div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Sliders;
