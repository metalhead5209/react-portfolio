// import Festi from './public/festishare.png'


const PROJECT_DATA = [
  {
    key: 1,
    imgSrc: "./public/festishare.png",
    title: "FestiShare",
    techStack:
      "Node.Js | Express | MongoDB | Mongoose | JavaScript | EJS | CSS | Bootstrap Morgan | Multer | Joi | MapBox | PassPort | DotENV",
    demoURL: "https://sleepy-ocean-40801.herokuapp.com/",
    codeURL: "https://github.com/metalhead5209/FestiShare",
    info: `Have you ever been to a music festival? At one point in my life, they were all I lived for. Overthe last few years, I’ve slowed down a lot but the passion to go is still there. FestiShare is aplace where you can share that experience. Maybe you’re contemplating on whether to go tothis festival and don’t quite know anyone who has attended. FestiShare is here to solve thatproblem. Anyone can visit the site and check out any of the festivals and their reviews that havebeen added by other users. To add festivals and leave reviews, you must register for anaccount and be logged in. No need to use actual emails or passwords. As long as the email is inemail format (email@email.com) it will validate. Each festival is geo located with a convenientmap for visual preference. The idea for FestiShare came to me after I convinced some friends of mine to buy tickets to myfavorite music festival which I attend annually. The festival is called Lost Lands and is located inOhio. I can probably go on for hours describing just how amazing of an experience this place isbut that tends to get old after a while. After spending some time attempting to put my pastexperiences into words, the idea for FestiShare came to me. What if there was a site you canconveniently visit and get all the information on a festival you need? A place where people cannot only share their experience but give it a familiar star rating along with submitting some oftheir favorite pictures from their experience. Not only is this an outlet for people to share theirpersonal experience, but others who have yet to experience that particular festival, can readothers’ experiences and get an idea of whether this festival is for them. Enter, Festishare “Aplace to share your festival experiences.”What I learnedDeveloping FestiShare was the ultimate learning experience for me.`,

  },
  {
    key: 2,
    imgSrc: "./public/emp_mgmt.png",
    title: "Employee Management System",
    techStack:
      "Node.JS | Express | MySQL | JavaScript | CSS MySQL WorkBench | HandleBars | Nodemon",
    demoURL: "https://serene-wildwood-50884.herokuapp.com/",
    codeURL: "https://github.com/metalhead5209/employee_directory_mysql",
    info: "For this project, I tasked myself with solving the problem of saving employee’sinformation to a database. This was my first brush with a relational databaseusing SQL (structured query language). Prior to this project, I only worked withDocument Oriented databases like MongoDB which takes in data in JSON formatinstead of related tables.This application allows a user to input employee information and save it into adatabase for future review. With a modern and intuitive interface, all the user hasto do is click the ‘Add Employee’ button, which is conveniently located on thenavigation bar, which will bring up a modal that includes a form. On the form,users have the ability to input the employee’s first and last name, email, phonenumber, and the department they hold in the company. Once the data has beeninserted, it then gets rendered onto the main page into a table which has eachpiece of data labeled in different table rows. The user also has the ability to editor delete any of the employees listed in the table."
  },
  {
    key: 3,
    imgSrc: "./public/book-lib.png",
    title: "Book Library",
    techStack:
      "Node.Js | Express | MongoDB | Mongoose | JavaScript | CSS Body-parser | Handlebars | DotENV",
    demoURL: "https://rodi-book-lib.herokuapp.com/",
    codeURL: "https://github.com/metalhead5209/book_lib_mongo",
    info: "This particular project was a redeploy of the Digital Book Library I developed while following The Odin Project’s full-stack JavaScript curriculum in the beginning ofthis year. I originally had it set up to save to the local storage. I was lookingthrough some of my older applications when I noticed something had broken. Thedata was no longer being saved to the local storage. Normally, I would have satthere and figured it out, but I chose a different route. At the time I was stilllearning MongoDb and Node.Js so I decided to add a back end along with adatabase. I still have the JavaScript file with the original code in it that saved tolocal storage. I will include that code as well.The function of this app is so that the user has the capability to save the title,author, pages, and whether they finished or not, into a collection stored in aMongoDB database using Mongoose as the framework. The book(s) a user hassaved will render onto the main page in convenient book card made with htmland styled with CSS. The book card displays the Title, Author, Number of pages,and whether the book has been finished or not. Directly under the title, there isan ‘Add Book’ button which opens a modal to enter the book information. Usersalso have the ability to either edit or delete any of the books they have previouslyadded. The layout is both desktop and mobile responsive."
  },

  {
    key: 5,
    imgSrc: "./public/port-proj.png",
    title: "React Portfolio",
    techStack: "React | JSX | JavaScript | Bootstrap | CSS",
    demoURL: "#",
    codeURL: "https://github.com/metalhead5209/react-portfolio",
    info: "This is a display of all my current work and my first full react project that did not consist of me following a tutorial.I definitely had my struggles with this one. I could have easily hard coded everything into a vanilla project but I wanted to practice passing props and state from component to component. The only realy state I had to establish and use in this was to make the nav bar responsive which is pretty simple but it exersizes the fundamental of state management and that's always great practice. I put all of my project information in to an array of objects and used mapping to render each into a custom project compnent I built. All in all I got some pretty good practice from this project and I can't wait to develop more React apps in the future."
  },
  {
    key: 4,
    imgSrc: "./public/sw-pic-blog.png",
    title: "Star Wars Photo Blog",
    techStack: "HTML | CSS | JAVASCRIPT",
    demoURL: "http://cmin.dcc.edu/users/aaronrodi/final%20project/home.html",
    codeURL: "https://github.com/metalhead5209/Star_Wars_Picture_Blog",
    info: "This is a special project. This was the first thing I custom built on my own back in late 2020 after fist enrolling in school for Web Development. I had no Idea what I was doing at the time. I had 'Html & CSS' by Jon Ducket, which is a great book, and I just followed along learning the basic concept of HTML and CSS. I know this my not seem like a portfolio worthy project, but it will always hold a special place in my journey to become an EMPLOYED Software Developer. "
  },
];

export default PROJECT_DATA;
