const exampleResume = {
  "user": {
    "id": 1,
    "firstName": "Edward",
    "lastName": "Wight",
    "imageURL": "../images/bwface.jpg",
    "title": "IT Consultant",
    "phone": "503-887-4866",
    "address": "642 N 200 E apt. 103",
    "city": "Provo",
    "state": "UT",
    "zip": "84606",
    "company": "Pariveda Solutions",
    "email": "blake.wight@gmail.com",
    "mediaAccounts": [
      {"id": 1, acctId: 1, "extension": "blake.wight"},
      {"id": 2, acctId: 2, "extension": "blakewight"},
      {"id": 3, acctId: 3, "extension":"Bwighthunter"}
    ]
  },
  "sections": [{
    "type": "education",
    "schools": [
      {
        "id": 1,
        "name": "Brigham Young University",
        "logoURL": "some URL here",
        "city": "Provo",
        "state": "UT",
        "degree": "Bachelor of Science",
        "major": "Information Systems",
        "college": "Marriott School of Management",
        "graduation": "April 2016",
        "gpa": "4.0",
        "specializedCoursework": "Data Structures, Linear Algebra, Differential Equations"
      }
    ]
  },
  {
    "type": "experience",
    "jobs": [
      {
        "id": 1,
        "companyName": "BYU Store",
        "title": "Web Developer",
        "city": "Provo",
        "state": "UT",
        "startDate":"1/2001",
        "endDate":"2/2006",
        "explanations": [{"id": 1, data: "blah blah blah, I loved this job"},{"id": 2, data: "And i freakin killed at it too"}]
      },
      {
        "id": 2,
        "companyName": "DOMO",
        "title": "QA Engineer Intern",
        "city": "American Fork",
        "state": "UT",
        "startDate":"3/2004",
        "endDate": null,
        "explanations": [{"id": 1, data: "blah blah blah, I loved this job"},{"id": 2, data: "And i freakin killed at it too"}]
      }
    ]
  },
  {
    "type": "generic",
    "title": "Skills",
    "subSections": [
      {"id": 1,"data": "Proficient in C++, HTML, CSS, JavaScript, Python, SQL, C#"},
      {"id": 2,"data": "My hobbies include blah blah blah"}
    ]
  }
]}

export default exampleResume;
