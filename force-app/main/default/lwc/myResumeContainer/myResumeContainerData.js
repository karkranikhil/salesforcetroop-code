import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import nikhil from '@salesforce/resourceUrl/nikhil';
export const PROFILE_IMAGE = nikhil

export const SOCIAL_LINKS=[
    {
        type:'twitter',
        label:"twitter/karkra_nikhil",
        link:"https://twitter.com/karkra_nikhil",
        icon:SOCIAL+'/SOCIAL/twitter.svg'
    },
    {
        type: "facebook",
        label: "facebook/salesforcetroop",
        link: "https://facebook.com/salesforcetroop",
        icon: SOCIAL + '/SOCIAL/facebook.svg'
    },
    {
        type: "github",
        label: "github/karkranikhil",
        link: "https://github.com/karkranikhil",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/nikhilkarkra",
        link: "https://www.linkedin.com/in/nikhilkarkra/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/nkarkra",
        link: "https://trailblazer.me/id/nkarkra",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS={
    NAME:'Nikhil Karkra',
    ROLE:'Full Stack Developer',
    EMAIL:'salesforcetroop@gmail.com',
    PHONE:'0123 456 78900'
}

export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "SomethingYour Career Summary goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    KEYS_POINTS:[
        "If You want to add summary points it comes here. and its optional",
        "keypoint 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        "keypoint 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "keypoint 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ]
}

export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Lead Developer",
            COMPANY_NAME: "Google",
            DURATION: "2019 - Present",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                " You description Points 1 goes here. consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "You description Points 2 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 3 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 4 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Java",
                    "Python",
                    "Javascript",
                    "Webpack",
                    "HTML5/LESS",
                    "MySQL",
                ]
            },
        },
        {
            ROLE: "Senior Software Developer",
            COMPANY_NAME: "Facebook",
            DURATION: "2014 - 2018",
            DESCRIPTION:
                "Your Job description goes here iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                " You description Points 1 goes here. consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "You description Points 2 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 3 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 4 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "React",
                    "Nodejs",
                    "Express",
                    "Rollup",
                    "HTML5/CSS3",
                    "SQL",
                ]
            }
        },
        {
            ROLE: "Software Developer",
            COMPANY_NAME: "AMAZON",
            DURATION: "2012 - 2014",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                " You description Points 1 goes here. consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "You description Points 2 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 3 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 4 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Angular",
                    "Bootstsrap",
                    "MobX",
                    "Webpack",
                    "HTML5/CSS3",
                    "Javascript",
                ]
            }
        },
        {
            ROLE: "Web Developer Trainee",
            COMPANY_NAME: "Microsoft",
            DURATION: "2011 - 2012",
            DESCRIPTION:
                "Your Job description goes hereiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
            DESCRIPTION_POINTS: [
                " You description Points 1 goes here. consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "You description Points 2 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 3 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
                "You description Points 4 et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "HTML5",
                    "CSS3",
                    "Javascript",
                    "jQuery",
                    "java",
                    "SQL",
                ]
            }
        },
    ]
}


 export const EDUCATION_DATA={
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
         {
             NAME: "Master in Computer science",
             UNIVERSITY_NAME: "Monash University Melbourne",
             DURATION: "2009 - 2011",
         },
         {
             NAME: "Bachelor in Computer Science",
             UNIVERSITY_NAME: "RMIT University Melbourne",
             DURATION: "2006 - 2009",
         }
     ]
 }

 export const AWARDS_DATA={
     ICON: SOCIAL + '/SOCIAL/awards.svg',
     HEADING: "AWARDS",
     LIST: [
         {
             NAME: "Microsoft MVP",
             DESCRIPTION:"Award description goes here, sem. Nulla consequat massa quis enim. Donec pede justo.",
         },
         {
             NAME: "Employee of the year",
             DESCRIPTION:"Award description goes here, sem. Nulla consequat massa quis enim. Donec pede justo.",
         },
     ]
 }

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Administrator",
        },
        {
            NAME: "Salesforce JavaScript Dev 1",
        },
        {
            NAME: "Salesforce JavaScript Dev 1",
        },
        {
            NAME: "Salesforce Platform App Builder",
        },
        {
            NAME: "Salesforce Einstein",
        }
    ]
}

export const LANGUAGES_DATA={
    HEADING: "Languages",
    LIST: [
        {
            NAME: "English",
            LEVEL: "Native",
        },
        {
            NAME: "German",
            LEVEL: "Professional",
        },
        {
            NAME: "Spanish",
            LEVEL: "Professional",
        },
    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                { NAME: "React", LEVEL: "95" },
                { NAME: "Vue", LEVEL: "80" },
                { NAME: "Angular", LEVEL: "75" },
                { NAME: "JavaScript(ES5/ES6/ES7/ES8)", LEVEL: "89" },
                { NAME: "HTML5/CSS3/SASS/LESS", LEVEL: "90" },
            ],
        },
        {
            HEADING: "BACKEND",
            SKILLS_LIST: [
                { NAME: "Python/Django", LEVEL: "80" },
                { NAME: "NodeJs", LEVEL: "95" },
                { NAME: "PHP", LEVEL: "98" },
            ],
        },
        {
            HEADING: "CRM/CMS",
            SKILLS_LIST: [
                { NAME: "Salesforce", LEVEL: "50" },
                { NAME: "Wordpress", LEVEL: "75" },
                { NAME: "Drupal", LEVEL: "60" },
            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Git",
            "Gulp",
            "Webpack",
            "Code Review",
            "JIRA",
            "ngnix",
            "Unit Testing",
            "Google Api",
            "Sketch",
            "Jest",
            "firebase",
            "Confluence"]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Reading", "Cooking", "Cricket"]
}