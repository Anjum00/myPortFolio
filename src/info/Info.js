import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock6 from "../img/mock6.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Anjum",
    lastName: "Saiyad",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Full stack devloper intern at Elsner Technology"
        },
        {
            emoji: "📧",
            text: "anjumsaiyad085@gmail.com"
        },
        {
            emoji: "📞",
            text: "+91 9316380789"
        },
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "I am Anjum, a Full-Stack Developer based in Ahmedabad. I completed my BCA from MKBU University in 2023 and have since gained practical experience through a full-stack developer internship at Elsner Technology Ahmedabad. My expertise includes HTML, CSS, JavaScript, and React, where I specialize in building dynamic, responsive web applications. During my internship, I developed skills in both frontend and backend development, integrating user interfaces with backend services to create seamless and efficient solutions. I am passionate about leveraging my technical skills to solve complex problems and deliver high-quality software.",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'html', 'css', 'figma'],
        exposedTo: ['nodejs', 'adobe illustrator']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "HTML/CSS Project",
            live: "https://anjum00.github.io/HTMlFigmaProject/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Anjum00/HTMlFigmaProject", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Wheather App",
            live: "https://anjum00.github.io/Wheather-App/",
            source: "https://github.com/Anjum00/Wheather-App",
            image: mock2
        },
        {
            title: "Stop Watch App",
            live: "https://anjum00.github.io/StopWatch/",
            source: "https://github.com/Anjum00/StopWatch",
            image: mock2
        },
        {
            title: "To Do List App",
            live: "https://anjum00.github.io/ToDoListApp/",
            source: "https://github.com/Anjum00/ToDoListApp",
            image: mock2
        },
        {
            title: "Quiz App",
            live: "https://anjum00.github.io/QuizApp/",
            source: "https://github.com/Anjum00/QuizApp",
            image: mock2
        },
        {
            title: "Counter App",
            live: "https://anjum00.github.io/CounterApp/",
            source: "https://github.com/Anjum00/CounterApp",
            image: mock2
        },
        {
            title: "Generate Random Password App",
            live: "https://anjum00.github.io/GenerateRandomPassword/",
            source: "https://github.com/Anjum00/GenerateRandomPassword",
            image: mock2
        },
        {
            title: "Health Care Services",
            live: "https://anjum00.github.io/HealthCareServices/",
            source: "https://github.com/Anjum00/HealthCareServices",
            image: mock6
        },
        {
            title: "Product Landing Page",
            live: "https://anjum00.github.io/brandPage/",
            source: "https://github.com/Anjum00/brandPage",
            image: mock6
        },
        {
            title: "Qr-Code Generator",
            live: "https://anjum00.github.io/QrCodeGenerator/",
            source: "https://github.com/Anjum00/QouteGenerate",
            image: mock2
        },
        {
            title: "Music Player",
            live: "https://anjum00.github.io/MusicPlayer/",
            source: "https://github.com/Anjum00/MusicPlayer",
            image: mock2
        },
        {
            title: "Live Preview Page",
            live: "https://anjum00.github.io/LivePreviewPage/",
            source: "https://github.com/Anjum00/LivePreviewPage",
            image: mock2
        },
        {
            title: "Toast Notifications Page",
            live: "https://anjum00.github.io/ToastNotifications/",
            source: "https://github.com/Anjum00/ToastNotifications",
            image: mock2
        },
        {
            title: "Qoute Generator",
            live: "https://anjum00.github.io/QouteGenerate/",
            source: "https://github.com/Anjum00/QouteGenerate",
            image: mock2
        },
    ]
}