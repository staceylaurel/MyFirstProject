let firstName = "Stacey";
let middleName = "Laurel";
let lastName = "Tannehill";
let fullName = firstName + " " + middleName + " " + lastName;
let fullNameCaps = fullName.toUpperCase();

displayDescription(fullNameCaps, "Future Software Engineer", "Teifling Acolyte");

function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}

console.log("My Interests: ");

displayInterests("Learning Korean"); 
displayInterests("Playing D&D"); 
displayInterests("Enneagram 1 w2"); 
displayInterests("Traveling the world"); 
displayInterests("Meeting new people");

function displayInterests(myInterest) {
    console.log("*  " + myInterest); 
}

console.log("My Previous Experiences: ");

displayPosition("Self Employeed", "Personal Virtual Assistant", "Learned 1ShoppingCart, worked with WordPress, a lot of Facebook and Google analytics, opened a Etsy shop");
displayPosition("Star Cadet", "Assistant to the CEO", "Updated merchandise and handled all things website on an established website, packaged and shipped merch, organized warehouse, ran social media, scheduled employees hours and duties");
displayPosition("Young At Art Museum", "School and Public Outreach Coordinator", "Created STEAM curriculum and actities for children 2years old through 80 years old, plan and exicuted events for up to 500 people both inside and outside the museum, scheduled employees, did all the supply ordering for the Education department");

function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ");
};

My Skills:
console.log("My Skills: ");

displaySkill("Speak Spanish and French", true); 
displaySkill("1Shoppingcart", false); 
displaySkill("Facebook analytics", false);
displaySkill("Social media wizard across mutliple platforms", true); 
displaySkill("Problem solver", false); 
displaySkill("Communication- one on one or to the universal audience", true); 
displaySkill("Propresentor", true); 
displaySkill("MarkdownReading manuals", false); 

function displaySkill(mySkill, bamBam) {
    if(bamBam == true) { 
        console.log("*  BAM: " + mySkill);
    } else if(bamBam == false) {
        console.log("*  " + mySkill); 
    };
}
