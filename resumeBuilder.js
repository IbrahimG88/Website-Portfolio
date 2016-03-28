var bio = {
    "name": "Ibrahim El Gohary",
    "role": "Medical Laboratory Manager",
    "contacts": {
        "email": "goharyibrahim@gamil.com",
        "mobile": "+2-01271001019",
        "github":"IbrahimG88",
        "twitter":"Gohary2040",
        "location":"Cairo"
            },
    "welcomeMessage": "Best service Guaranteed",
    "skills": ["Managing Medical Laboratories","Programming", "Playing Football",
    "Organizing things in general"],
    "biopic": "https://pbs.twimg.com/profile_images/3016665855/57ef3de307da06aa175b8d1da50ffa8a.jpeg"
  
};





var education = {
    "schools":[
      {"name" :"DEO",
        "location" :"Cairo",
        "majors":"Scientific major",
        "degree":"Thanaweya Ama",
        "dates" : "2006",
        "url":"http://www.deokairo.com/home.html"},
     { 
    "name": "German University in Cairo",
    "location": "Cairo",
    "degree":"Bachelor's degree in Pharmacy and Biotechnology",
    "majors": "Pharmacy and Biotechnology",
    "dates": "2011",
    "url":"http://www.guc.edu.eg/"}],
    "onlineCourses": [{
    "title": "Intro to programming Nanodegree",
    "school": "Udacity",
    "date": "2015",
    "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",}]};


var work = {
        "jobs":[{
        "employer" : "Prof. Ahmed El Gohary: Suez Medical Laboratory",
        "title" : "Suez Medical Laboratory Manager",
        "location" : "Suez City",
        "dates" : "December 2011 - Till present time",    
        "description" : "Managing the lab stocks, Instruments troubleshooting , Managing the employees, PCR specialist."
                         },],};

var projects = {
        "projects" :[{
        "title":"Make A Web Page",
        "dates":"01-2016",
        "description":"Built using HTML and CSS, this project demonstrates knowledge of basic website design.",
        "images":["file:///Users/ahmedelgohary/Documents/Intro%20to%20Programming%20Nanodegree/Stage%205/frontend-nanodegree-resume-master/Screen%20Shot%202016-03-16%20at%207.11.23%20PM.png"]},
        { "title":"Code Your Own Quiz",
        "dates":"01-2016",
        "description":"Built a fill-in-the blanks type quiz to leverage the power of functions in Python and mastered the ability to automate  repetitive tasks that can be done on a computer.",
        "images":["file:///Users/ahmedelgohary/Documents/Intro%20to%20Programming%20Nanodegree/Stage%205/frontend-nanodegree-resume-master/Screen%20Shot%202016-03-16%20at%207.17.47%20PM.png"]},
        { "title":"Create a Movie Website",
        "dates":"02-2016",
        "description":"Created a simple movie website with images and trailers, this project demonstrates knowledge of Object Oriented Programming.",
        "images":["file:///Users/ahmedelgohary/Documents/Intro%20to%20Programming%20Nanodegree/Stage%205/frontend-nanodegree-resume-master/Screen%20Shot%202016-03-16%20at%207.13.21%20PM.png"]},
        {"title":"Reverse Engineer Project Compass",
        "dates":"02-2016",
        "description":"Identified the type of programmer (front end, back end, mobile, or data analyst) that would contribute towards each feature of the Project Compass web app."  ,
         "images":["file:///Users/ahmedelgohary/Documents/Intro%20to%20Programming%20Nanodegree/Stage%205/frontend-nanodegree-resume-master/Screen%20Shot%202016-03-16%20at%207.14.37%20PM.png"]},
          ]};



bio.display = function(){

    var formattedName =
    HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedRole =
    HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedMobile = 
    HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

     var formattedemail = 
    HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedemail);

     var formattedtwitter = 
    HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedtwitter);

     var formattedgithub = 
    HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedgithub);

     var formattedlocation = 
    HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedlocation);


     var formattedbiopic = 
    HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbiopic);

     var formattedwelcomeMessage = 
    HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMessage);

    if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

    $("#skills").append(formattedSkill);}

  };
/*the bio object to be displayed is by calling it as follows*/  
bio.display(); 

work.display =  function (){

 
for (var job in work.jobs){

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}

};

work.display();

projects.display = function (){

    for (var key in projects.projects) {
        if(projects.projects.hasOwnProperty(key)){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
        $(".project-entry:last").append(formattedDescription);

       if (projects.projects[key].images.length > 0) {
            for (var image in projects.projects[key].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[key].images);
                $(".project-entry:last").append(formattedImage);
     
            }}}}

};


projects.display(); 


education.display = function (){




for (var school in education.schools){
    if(education.schools.hasOwnProperty(school)){

    $("#education").append(HTMLschoolStart);

    var formattedname = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry").append(formattedname);


    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry").append(formattedLocation);

    var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry").append(formattedMajors);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry").append(formattedDates);}
}
};

education.display();


$("#mapDiv").append(googleMap);
