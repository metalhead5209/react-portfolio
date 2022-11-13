import FestiShare from './src/assets/festishare.png';
import EmpMgmt from './src/assets/emp_mgmt.png';
import GitProfile from './src/assets/gitprofile.png';
import Port from './src/assets/port-proj.png';
import SW from './src/assets/sw-pic-blog.png';


const PROJECT_DATA = [
  {
    key: 1,
    imgSrc: FestiShare,
    title: "FestiShare",
    techStack:
      "Node.Js | Express | MongoDB | Mongoose | JavaScript | EJS | CSS | Bootstrap Morgan | Multer | Joi | MapBox | PassPort | DotENV",
    demoURL: "https://sleepy-ocean-40801.herokuapp.com/",
    codeURL: "https://github.com/metalhead5209/FestiShare",
    info: `Have you ever been to a music festival? At one point in my life, they were all I lived for. Overthe last few years, I’ve slowed down a lot but the passion to go is still there. FestiShare is aplace where you can share that experience. Maybe you’re contemplating on whether to go tothis festival and don’t quite know anyone who has attended. FestiShare is here to solve thatproblem. Anyone can visit the site and check out any of the festivals and their reviews that havebeen added by other users. To add festivals and leave reviews, you must register for anaccount and be logged in. No need to use actual emails or passwords. As long as the email is inemail format (email@email.com) it will validate. Each festival is geo located with a convenientmap for visual preference. The idea for FestiShare came to me after I convinced some friends of mine to buy tickets to myfavorite music festival which I attend annually. The festival is called Lost Lands and is located inOhio. I can probably go on for hours describing just how amazing of an experience this place isbut that tends to get old after a while. After spending some time attempting to put my pastexperiences into words, the idea for FestiShare came to me. What if there was a site you canconveniently visit and get all the information on a festival you need? A place where people cannot only share their experience but give it a familiar star rating along with submitting some oftheir favorite pictures from their experience. Not only is this an outlet for people to share theirpersonal experience, but others who have yet to experience that particular festival, can readothers’ experiences and get an idea of whether this festival is for them. Enter, Festishare “Aplace to share your festival experiences.”What I learnedDeveloping FestiShare was the ultimate learning experience for me.`,

  },
  {
    key: 2,
    imgSrc: GitProfile,
    title: "GitStatss",
    techStack:
      "React | Styled Components | React Router | Custom Hooks | JavsScript | CSS | Axios | Fusion Charts | Auth0",
    demoURL: "https://gitstatss.netlify.app/",
    codeURL: "https://github.com/metalhead5209/react-github-profile",
    info: "GitStatss allows users to search any github user and view certain statistics laid out in an easy to read chart. I used the github API to pull data and render it on the patge. Users have the ability to login using either their github account or by creating an account with an email (real or fake) and password. I used fusion charts to display the data I pulled in from the API and Auth0 to authorize users when logging in.  "
  },
  {
    key: 2,
    imgSrc: EmpMgmt,
    title: "Employee Management System",
    techStack:
      "Node.JS | Express | MySQL | JavaScript | CSS MySQL WorkBench | HandleBars | Nodemon",
    demoURL: "https://serene-wildwood-50884.herokuapp.com/",
    codeURL: "https://github.com/metalhead5209/employee_directory_mysql",
    info: "For this project, I tasked myself with solving the problem of saving employee’sinformation to a database. This was my first brush with a relational databaseusing SQL (structured query language). Prior to this project, I only worked withDocument Oriented databases like MongoDB which takes in data in JSON formatinstead of related tables.This application allows a user to input employee information and save it into adatabase for future review. With a modern and intuitive interface, all the user hasto do is click the ‘Add Employee’ button, which is conveniently located on thenavigation bar, which will bring up a modal that includes a form. On the form,users have the ability to input the employee’s first and last name, email, phonenumber, and the department they hold in the company. Once the data has beeninserted, it then gets rendered onto the main page into a table which has eachpiece of data labeled in different table rows. The user also has the ability to editor delete any of the employees listed in the table."
  },

  {
    key: 5,
    imgSrc: Port,
    title: "React Portfolio",
    techStack: "React | JSX | JavaScript | Bootstrap | CSS",
    demoURL: "#",
    codeURL: "https://github.com/metalhead5209/react-portfolio",
    info: "This is a display of all my current work and my first full react project that did not consist of me following a tutorial.I definitely had my struggles with this one. I could have easily hard coded everything into a vanilla project but I wanted to practice passing props and state from component to component. The only realy state I had to establish and use in this was to make the nav bar responsive which is pretty simple but it exersizes the fundamental of state management and that's always great practice. I put all of my project information in to an array of objects and used mapping to render each into a custom project compnent I built. All in all I got some pretty good practice from this project and I can't wait to develop more React apps in the future."
  },
  {
    key: 4,
    imgSrc: SW,
    title: "Star Wars Photo Blog",
    techStack: "HTML | CSS | JAVASCRIPT",
    demoURL: "http://cmin.dcc.edu/users/aaronrodi/final%20project/home.html",
    codeURL: "https://github.com/metalhead5209/Star_Wars_Picture_Blog",
    info: "This is a special project. This was the first thing I custom built on my own back in late 2020 after fist enrolling in school for Web Development. I had no Idea what I was doing at the time. I had 'Html & CSS' by Jon Ducket, which is a great book, and I just followed along learning the basic concept of HTML and CSS. I know this my not seem like a portfolio worthy project, but it will always hold a special place in my journey to become an EMPLOYED Software Developer. "
  },
];

export default PROJECT_DATA;




