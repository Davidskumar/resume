//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "About",
    cardImage: "assets/images/experience-page/aboutusicon.jpg",
    place: "Career Objective",
    time: "",
    desp: "<br><p>I'm a passionate game developer with a B.Tech degree in Specialization in Artificial Intelligence, driven by a deep love for crafting immersive digital experiences.Adaptive, open-minded and detailed-oriented with exceptional organization and communication skills with the drive to exceed exceptions on every assignment.Looking forward to join a respectable organization</p><br><br><a data-v-4877bd6a href='' target='_blank'><img src='assets/images/experience-page/downloadico.jpg' height='20' width='20' alt='download img'/>Download as pdf mb <a>",
  },
  {
    title: "Skills",
    cardImage: "assets/images/experience-page/skillsicon.png",
    place: "Technical",
    time: "",
    desp:"<ol><li>Python, C Programming, Java/JavaScript/JQuery, AngularJS, Node.js, C# and .NET, C++, HTML/CSS </li><li>Data Analytics(ML & DL)</li><li>SQL, MongoDB, Firebase</li><li>Unity Engine, Unreal Engine, Blender, Adobe Photoshop, Zbrush, Android studio</li></ol>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
              ${desp}
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Intel Unnati Industrial Training (Intership)",
    cardImage: "assets/images/experience-page/inteliicon.jpg",
    description:
      "Social Distancing System developed using Machine Learning ,Computer Vision",
  },
  {
    title: "Smart India Hackerathon (SIH) Grand Finalist(2022)",
    cardImage: "assets/images/experience-page/SIHicon.jpeg",
    description:
      "A project on Disaster Response Radar (GS900)",
  },
  {
    title: "Cisco AICTE Virtual Summer Internship Program 2022",
    cardImage: "assets/images/education-page/cisco-logo-transparent.png",
    description:
      "Virtual Internship Program in Cyber Security",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
