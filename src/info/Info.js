import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock6 from "../img/mock6.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;


export const info = {
    firstName: "Anjum",
    lastName: "Saiyad",
    initials: "Anjum",
    position: "a React Native Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
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
            text: "React Native devloper"
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

    ],
    bio: "I am Anjum, a React Native Developer at Silicon Valley Infomedia, based in Ahmedabad. I previously gained practical experience through a full-stack developer internship at Elsner Technology Ahmedabad. My expertise includes React Native, JavaScript, HTML, CSS, and React, where I specialize in building dynamic, responsive, and cross-platform mobile applications. My experience spans both frontend and backend development, integrating user interfaces with backend services to create seamless and efficient solutions. I am passionate about leveraging my technical skills to solve complex problems and deliver high-quality software experiences.Let me know if you need further adjustments! 🚀",
    skills:
    {
        proficientWith: ['react native','javascript', 'react', 'github','html', 'css', 'figma',],
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
    ],
    portfolio: [ 
        {
            title: "HTML/CSS Project",
            live: "https://anjum00.github.io/HTMlFigmaProject/", 
            source: "https://github.com/Anjum00/HTMlFigmaProject",
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
