import React from "react";
import "./Slider.scss";
import Job from "../../images/Job.png";
import download from "../../images/download.jpg";

import Task from "../../images/Task.png";
import File from "../../images/File.png";
import Customer from "../../images/Customer.png";
import { Link } from "react-router-dom";

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
              <a href="">
                <img src={download} alt="sport" />
              </a>
            </div>
            <div class="text">Sport</div>
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
            <div class="text">Travel</div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <img src={download} alt="art" />
            </div>
            <div class="text">Art</div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <img src={download} alt="cars" />
            </div>
            <div class="text">Cars</div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Sliders;
