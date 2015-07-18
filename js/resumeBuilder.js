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
      "skills": ["iOS testing", "Android testing", "browser testing", "html", "css", "jquery", "python",  "automation", "git","new technologies", "training"]
};


var projects = {
  "projects": [
    {
      "title": "Online resume",
      "dates": "June -July 2015",
      "description": "Interactive html document",
      "pictureURL": "images/dwayne2.jpg"
    },
    {
      "title": "Portfolio",
      "dates": "May 2015 - June 2015",
      "description": "Responsive Design site",
      "pictureURL":"      images/garden.png"
    },
    {
      "title": "Globophone",
      "dates": "Jan 2015 - March 2015",
      "description": "Online form for collecting and validating phone numbers",
      "pictureURL":"      images/worldinfo.png"
    }
  ]
};


var presentations = {
  "presentations": [
    {
      "title": "Quality Engineering for DevOps Customers - Software Quality Conference (PNSQC)",
      "dates": "October 2014",
      "description": "Presentation to 30 testers on professional development."
    },
    {
      "title": "Code clubs for informal learning and software development discussions. - Software Quality Conference (PNSQC)",
      "dates": "October 2015",
      "description": "Presentation to 30 testers on professional development."
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
    //This helps to write more "secure" codes//
    //by preventing things such as marking down a function with bad syntax to execute or loading unused variables.//
    "use strict";
    //makes the section exist//
    $("#education").append(HTMLschoolStart);
    //uses jquery looping to fill out each entry //
    education.schools.forEach(function (school) {
      //defines javascript variables to fill html spans with information//
      var formattedschoolName = HTMLschoolName.replace('%data%', school.name);
      var     formattedschoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
      var     formattedschoolDates = HTMLschoolDates.replace('%data%', school.dates);
      //fills html spans with information//
      $(".education-entry:last").append(formattedschoolName);
      $(".education-entry:last").append(formattedschoolDegree);
      $(".education-entry:last").append(formattedschoolDates);

  });
};

//defines function to display section data
projects.display = function() {
  //This helps to write more "secure" codes//
  //by preventing things such as marking down a function with bad syntax to execute or loading unused variables.//
  "use strict";
  //makes the section exist//
  $("#projects").append(HTMLprojectStart);
  //uses jquery looping to fill out each entry//
  projects.projects.forEach(function (project) {
    //defines javascript variables to fill html spans with information//
    var formattedprojectTitle = HTMLprojectTitle.replace('%data%', project.title);
    var     formattedprojectDates = HTMLprojectDates.replace('%data%', project.dates);
    var     formattedprojectDescription = HTMLprojectDescription.replace('%data%', project.description);
    var     formattedprojectPicture = HTMLprojectImage.replace('%data%', project.pictureURL);
    //fills html spans with information//
    $(".project-entry:last").append(formattedprojectTitle);
    $(".project-entry:last").append(formattedprojectDates);
    $(".project-entry:last").append(formattedprojectDescription);
    $(".project-entry:last").append(formattedprojectPicture);

  });
};


//defines function to display section data
presentations.display = function() {
  //This helps to write more "secure" codes//
  //by preventing things such as marking down a function with bad syntax to execute or loading unused variables.//
  "use strict";
  //makes the section exist//
  $("#presentations").append(HTMLpresentationStart);
  //uses jquery looping to fill out each entry//
  presentations.presentations.forEach(function (presentation) {
    //defines javascript variables to fill html spans with information//
    var formattedpresentationTitle = HTMLpresentationsTitle.replace('%data%', presentation.title);
    var     formattedpresentationDates = HTMLpresentationsDates.replace('%data%', presentation.dates);
    var     formattedpresentationDescription = HTMLpresentationsDescription.replace('%data%', presentation.description);
    //fills html spans with information//
    $(".presentation-entry:last").append(formattedpresentationTitle);
    $(".presentation-entry:last").append(formattedpresentationDates);
    $(".presentation-entry:last").append(formattedpresentationDescription);
  });
};

//defines function to display section data
work.display = function() {
  //This helps to write more "secure" codes//
  //by preventing things such as marking down a function with bad syntax to execute or loading unused variables.//
  "use strict";
  //makes the section exist//
  $("#workExperience").append(HTMLworkStart);
  //uses jquery looping to fill out each entry//
  work.jobs.forEach(function (job) {
      //defines javascript variables to fill html spans with information//
      var formattedworkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
      var     formattedworkTitle = HTMLworkTitle.replace('%data%', job.title);
      var     formattedworkDates = HTMLworkDates.replace('%data%', job.dates);
      var     formattedworkDescription = HTMLworkDescription.replace('%data%', job.description);
          //Pretties employer and job title//
      var     formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
      //fills html spans with information//
      $(".work-entry:last").append(formattedworkEmployerTitle);
      $(".work-entry:last").append(formattedworkDates);
      $(".work-entry:last").append(formattedworkDescription);
    });
};

bio.display = function()
{
  //This helps to write more "secure" codes//
  //by preventing things such as marking down a function with bad syntax to execute or loading unused variables.//
  "use strict";
    //defines javascript variables to fill html spans with information//
    var formattedName = HTMLheaderName.replace('%data%',bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
    var     formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
    var     formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
    var     formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
    var     formattedblog = HTMLblog.replace('%data%',bio.contacts.github);
    var     formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
    var     formattedBioPic = HTMLbioPic.replace('%data%', bio.pictureURL);
    var     formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

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
            var formattedSkill = HTMLskills.replace('%data%', skill);
            //fills ID with information//
            $('#skills').append(formattedSkill);
        });
    }

};



/*/////////// main /////////////////////////////////////*/

bio.display();
work.display();
projects.display();
presentations.display();
education.display();
$("#mapDiv").append(googleMap);
