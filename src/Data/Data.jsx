import React from "react";
import project1 from "../assets/project_img_1.jpg"
import project2 from "../assets/project_img_2.jpg"
import project3 from "../assets/project_img_3.jpg"
import project4 from "../assets/project_img_4.jpg"
import project5 from "../assets/project_img_5.jpg"
import project6 from "../assets/project_img_6.jpg"


const Projects = [
{
    name: "Vista Verde",
    location: "Vista Verde",
    price: "$250,000",
    image: project1,
    visible: true
},
{
    name: "Serenity Suites",
    location: "Chicago",
    price: "$250,000",
    image: project2,
    visible: true 

},
{
    name: "Skyline Haven",
    location: "California",
    price: "$250,000",
    image: project3,
    visible: true
},
{
    name: "Central Square",
    location: "Los Angeles",
    price: "$2,500,000",
    image: project4,
    visible: false
},
{
    name: "Modern department",
    location: "San Francisco",
    price: "$2,500,000",
    image: project5,
    visible: false
},
{
    name: "Central square",
    location: "Kigali",
    price: "$3,000,000",
    image: project6,
    visible: false
}

];

export default Projects;