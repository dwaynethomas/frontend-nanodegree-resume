var work = {
  "jobs": [
      {
      "employer": "CrowdCompass by Cvent",
      "title": "Software Quality Engineer",
      "location": "Portland, OR",
      "dates": "July, 2014 - Present",
      "description": "testing iOS, Android, browser applications"
      },
      {
      "employer": "Ensequence",
      "title": "Senior Software Quality Engineer",
      "location": "Portland, OR",
      "dates": "September, 2013 - July, 2014",
      "description": "testing tv, browser applications, maintaining automation framework"
      },
      {
    "employer": "Rentrak",
    "title": "Quality Analyst",
    "location": "Portland, OR",
    "dates": "September, 2011 - September, 2013",
    "description": "testing browser applications, running automation framework, training testers"
    },
    {
    "employer": "ETSI Inc.",
    "title": "Analyst",
    "location": "Long Island, NY",
    "dates": "September, 2009 - September, 2011",
    "description": "consulting, MS Office suite"
    },
    {
    "employer": "NYC DOE",
    "title": "Middle School Math Teacher",
    "location": "Bronx, NY",
    "dates": "June, 2004 - September, 2008",
    "description": "teaching"
    }
  ]
};


var bio = {
      "name" : "Dwayne M. Thomas",
      "role" : "Information Technology Specialist",
      "contacts" : {
            "mobile": "***-327-0231",
            "email": "mdneue@yahoo.com",
            "github": "https://github.com/dwaynethomas",
            "twitter": "https://twitter.com/mdneue",
            "location": "Portland, Oregon, USA"
          },
      "welcomeMessage": "Welcome to cyborg d-wayne's online resume",
      "pictureURL":"images/dwayne.jpg",
      "skills": ["iOS testing", "Android testing", "browser testing", "html", "css", "jquery", "python",  "automation", "git","new technologies", "training"],
      "display": "function"

};


var projects = {
  "projects": [
    {
      "title": "Portfolio",
      "dates": "May 2015 - June 2015",
      "description": "Responsive Design site"
    },
    {
      "title": "Globophone",
      "dates": "Jan 2015 - March 2015",
      "description": "Online form for collecting and validating phone numbers"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Princeton University",
      "location": "Princeton, NJ",
      "degree": "  B.A.",
      "dates": "June, 2000 - June, 2004"
    },
    {
      "name": "University of Oregon",
      "location": "Eugene, OR",
      "degree": "  M.S.",
      "dates": "June, 2007 - June, 2012"
    },
    {
      "name": "City College",
      "location": "NY, NY",
      "degree": "  M.S.",
      "dates": "June, 2004 - June, 2007"
    },
    {
      "name": "Charles University",
      "location": "Prague, Czech Republic",
      "degree": "",
      "dates": ""
    },
    {
      "name": "St. Jago HS",
      "location": "Spanish Town, Jamaica",
      "degree": "",
      "dates": ""
    }
  ]
};

//defines function to display section data
education.display = function() {
    //makes the section exist//
    $("#education").append(HTMLschoolStart);
    //uses jquery looping to fill out each entry //
    education.schools.forEach(function (school) {
      //defines javascript variables to fill html spans with information//
      var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
          formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
          formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
      //fills html spans with information//
      $(".education-entry:last").append(formattedschoolName);
      $(".education-entry:last").append(formattedschoolDegree);
      $(".education-entry:last").append(formattedschoolDates);

  });
};

//defines function to display section data
projects.display = function() {
  //makes the section exist//
  $("#projects").append(HTMLprojectStart);
  //uses jquery looping to fill out each entry//
  projects.projects.forEach(function (project) {
    //defines javascript variables to fill html spans with information//
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
    //fills html spans with information//
    $(".project-entry:last").append(formattedprojectTitle);
    $(".project-entry:last").append(formattedprojectDates);
    $(".project-entry:last").append(formattedprojectDescription);

  });
};

//defines function to display section data
work.display = function() {
  //makes the section exist//
  $("#workExperience").append(HTMLworkStart);
  //uses jquery looping to fill out each entry//
  work.jobs.forEach(function (job) {
      //defines javascript variables to fill html spans with information//
      var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
          formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
          formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
          formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
          //Pretties employer and job title//
          formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
      //fills html spans with information//
      $(".work-entry:last").append(formattedworkEmployerTitle);
      $(".work-entry:last").append(formattedworkDates);
      $(".work-entry:last").append(formattedworkDescription);
    });
};

bio.display = function()
{
    //defines javascript variables to fill html spans with information//
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
        formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        formattedblog = HTMLblog.replace("%data%",bio.contacts.github);
        formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
        formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    //fills html ids with information//
    $("#header").prepend(formattedRole)
        .prepend(formattedName);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#header").append(formattedBioPic)
    .append(formattedWelcomeMsg);

//If the skills section exists, fill it with info//
    if (bio.skills.length > 0) {
        //makes the section exist//
        $('#header').append(HTMLskillsStart);
        //uses jquery looping to fill out each entry//
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            //fills ID with information//
            $('#skills').append(formattedSkill);
        });
    }

};



/*/////////// main /////////////////////////////////////*/

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
