AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Introduction to Soft Skills",
    cardImage: "assets/images/education-page/TCS-iON-Logo-RGB-Color.png",
    moocLink: "https://drive.google.com/file/d/1iaQJ97b0gTmYX4Dw3Tdh5wDDy4ZJjOs5/view?usp=sharing",
  },
  {
    title: "Networking Essentials",
    cardImage: "assets/images/education-page/cisco-logo-transparent.png",
    moocLink: "https://drive.google.com/file/d/16aKQYM-tFce_k7dQRy7RGID3eUaumE75/view?usp=sharing",
  },
  {
    title: "Getting Started with AI on Jetson Nano",
    cardImage: "assets/images/education-page/nvidia.png",
    moocLink: "https://courses.nvidia.com/certificates/e3e2e09efd7e40eebdb2e02ce395b3dc/",
  },
  {
    title: "Getting Started with Deep Learning",
    cardImage: "assets/images/education-page/nvidia.png",
    moocLink: "https://drive.google.com/file/d/1Nf8QAuz_13Wnk4LP3se9stLr4NTQPbFm/view?usp=sharing",
  },
  // Row 2 Done
  {
    title: "Building Video AI Application at the Edge on Jetson Nano",
    cardImage: "assets/images/education-page/nvidia.png",
    moocLink: "https://drive.google.com/file/d/10W7CqF14EnvvU5b3p_0NRgA5XCgYJ6Rc/view?usp=sharing",
  },
  {
    title: "Introduction to Social Media Marketing",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/certificate/3YX65RTZ76PW",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/certificate/BNL3P3AFX9G2",
  },
  {
    title: "English Language for Competitive Exams",
    cardImage: "assets/images/education-page/NPTEL.png",
    moocLink: "https://drive.google.com/file/d/1gr-ervnrMc7bMyd2cB3u-97EH4vKW9ed/view?usp=sharing",
  },
  // Row 1 done
  {
    title: "SQL(Basics)",
    cardImage: "assets/images/education-page/Hackerrank.png",
    moocLink: "https://drive.google.com/file/d/1NjazO7GlT77OBBHXTw4hQPFJAAAnxzu0/view?usp=sharing",
  },
  
  {
    title: "Introduction to Cybersecurity",
    cardImage: "assets/images/education-page/cisco-logo-transparent.png",
    moocLink: "https://drive.google.com/file/d/1RGgWUU65Pi89v1vSpqj9lJGnIpPW042Z/view?usp=sharing",
  },
  {
    title: "Introduction to Packet Tracer",
    cardImage: "assets/images/education-page/cisco-logo-transparent.png",
    moocLink: "https://drive.google.com/file/d/1x8noTihmR1PHO6icU18yuFwl_Ck5uMAc/view?usp=sharing",
  },
  {
    title: "Cybersecurity Essentials",
    cardImage: "assets/images/education-page/cisco-logo-transparent.png",
    moocLink: "https://drive.google.com/file/d/1cQks1aNdbefc1dyZXlfy8J305kdbpN-b/view?usp=sharing",
  },
  {
    title: "Introduction to Machine Learning",
    cardImage: "assets/images/education-page/Kaggle_logo.png",
    moocLink: "https://drive.google.com/file/d/1Rm7I2wTgyVWxwDBioNiEjraAdMfh5ZRK/view?usp=sharing",
  },
  {
    title: "Introduction to Deep Learning",
    cardImage: "assets/images/education-page/Kaggle_logo.png",
    moocLink: "https://drive.google.com/file/d/1fSQls0S-5WhkJmAY4l4MygX06hN3sNyU/view?usp=sharin",
  },
  {
    title: "Data Visualization",
    cardImage: "assets/images/education-page/Kaggle_logo.png",
    moocLink: "https://drive.google.com/file/d/1jSLLlURekNt2dVhkk24iuzFSSRqd5FZc/view?usp=sharing",
  },
  {
    title: "Computer Vision",
    cardImage: "assets/images/education-page/Kaggle_logo.png",
    moocLink: "https://drive.google.com/file/d/1T_QW4oQonQx6rdstghdSi5Whtdq25JXs/view?usp=sharing",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
              <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);