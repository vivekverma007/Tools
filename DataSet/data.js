const data = [
  {
    cat: "Backend",
    name: "MongoDB",
    value: 50,
    icon: "./Assets/Backend/mongodb.svg",
    desc: `The de-facto Database solution for JavaScript and Node.js applications. It is a light weight,high performance NoSQL database and can be used for small and large websites.`
  },
  {
    cat: "Backend",
    name: "NodeJS",
    value: 50,
    icon: "./Assets/Backend/nodejs.svg",
    desc: `Node.js is a cross-platform JavaScript runtime environment.Node.js allows creation of high performance and high concurrency websites with smaller footprint compared to other server-side solution.`
  },
  {
    cat: "Backend",
    name: "Redis",
    value: 50,
    icon: "./Assets/Backend/redis.svg",
    desc: `Redis is an open-source in-memory data structure project implementing a distributed, in-memory key-value database with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, hyperloglogs, bitmaps, streams and spatial indexes.`
  },
  {
    cat: "Framework",
    name: "Bootstrap CSS",
    value: 50,
    icon: "./Assets/Framework/bootstrap.svg",
    desc: `Bootstrap is a free and open-source front-end web framework for designing websites and web applications. It contains HTML-and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.`
  },
  {
    cat: "Framework",
    name: "ExpressJS",
    value: 50,
    icon: "./Assets/Framework/expressjs.svg",
    desc: `Express.js, or simply Express, is a JavaScript framework designed for building web applications and APIs. It is the de facto server framework for Node.js.`
  },
  {
    cat: "Framework",
    name: "ReactJS",
    value: 50,
    icon: "./Assets/Framework/react.svg",
    desc: `React (sometimes written React.js or ReactJS) is an open-source JavaScript framework maintained by Facebook for building user interfaces. React processes only user interface in applications and can be used in combination with other JavaScript libraries or frameworks such as Redux, Flux, Backbone...`
  },
  {
    cat: "Framework",
    name: "jQuery",
    value: 50,
    icon: "./Assets/Framework/jquery.svg",
    desc: ` Deprecated, because <a href='http://youmightnotneedjquery.com/' target='_blank'>youmightnotneedjquery.com</a>
					`
  },
  {
    cat: "Language",
    name: "HTML5 & CSS3",
    value: 50,
    icon: "./Assets/Language/html5-css3.png",
    desc: `The languages of the Web Front End and with them we can build world-class websites with any kind of visual effects or designs requested.`
  },
  {
    cat: "Language",
    name: "JavaScript",
    value: 50,
    icon: "./Assets/Language/javascript.svg",
    desc: `JavaScript is the heart of modern Web front end development and essential element of any Single Page Applications.`
  },
  {
    cat: "Language",
    name: "SCSS (Sassy CSS/SASS)",
    value: 50,
    icon: "./Assets/Language/sass.svg",
    desc: `This is our main CSS preprocessor language helping us lay structured foundation to CSS as well as assisting on writing more convenient BEM anotations.`
  },
  {
    cat: "Design",
    name: "Figma",
    value: 50,
    icon: "./Assets/Design/figma.svg",
    desc: `Figma is a free, online UI tool where you can create, collaborate, prototype and handoff all in the same place.`
  },
  {
    cat: "Design",
    name: "Adobe XD",
    value: 50,
    icon: "./Assets/Design/AdobeXD.svg",
    desc: `XD supports vector design and website wireframing, and creating simple interactive click-through prototypes.`
  },
  {
    cat: "Design",
    name: "Balsamiq",
    value: 50,
    icon: "./Assets/Design/balsamiq.png",
    desc: `Balsamiq Wireframes (formerly called Balsamiq Mockups) is a small graphical tool to sketch out user interfaces, for websites and web / desktop / mobile applications.`
  },
  {
    cat: "Design",
    name: "Sketch",
    value: 50,
    icon: "./Assets/Design/sketch.svg",
    desc: `UX Design tool`
  },
  {
    cat: "Workflow",
    name: "Airbnb Javascript Style guide",
    value: 50,
    icon: "./Assets/Workflow/airbnb.svg",
    desc: `
						A set of guidelines, presets, configs and stadard documentation for Nau developers.
						Please visit the document site at: <a href='http://code.naustud.io' target='_blank'>code.naustud.io</a>`
  },
  {
    cat: "Workflow",
    name: "BabelJS",
    value: 50,
    icon: "./Assets/Workflow/babel.svg",
    desc: `The de-facto tool to work with ECMAScript 6 and ReactJS nowadays.`
  },
  {
    cat: "Workflow",
    name: "ESLint",
    value: 50,
    icon: "./Assets/Workflow/eslint.svg",
    desc: `The tool to check and validate JavaScript code when we develop and prevent potential issues with code.`
  },
  {
    cat: "Workflow",
    name: "Travis CI",
    value: 50,
    icon: "./Assets/Workflow/travis.svg",
    desc: `Travis helps to  test pull requests before it gets merged and allows us to deploy the apps as soon as the Tests pass.`
  },
  {
    cat: "Workflow",
    name: "Gitflow Workflow",
    value: 50,
    icon: "./Assets/Workflow/gitflow.png",
    desc: `Our code version control tool is Git, and Gitflow is one of its Workflow standard which ensure good collaboration and avoid conflict-resolving efforts. `
  },
  {
    cat: "Workflow",
    name: "GulpJS",
    value: 50,
    icon: "./Assets/Workflow/gulp.svg",
    desc: `GulpJS is a task automation tools written for Node.js. It is among the most popular Front End and Node project automation tools nowadays`
  },
  {
    cat: "Workflow",
    name: "Docker Platform",
    value: 50,
    icon: "./Assets/Workflow/docker.svg",
    desc: `
				Docker is an open-source project that automates the deployment of applications inside software containers.`
  },
  {
    cat: "Bots",
    name: "Netlify",
    value: 50,
    icon: "./Assets/Bots/netlify.svg",
    desc: `Github Bot makes automated Workflow and the hard stuff simple.`
  },
  {
    cat: "Bots",
    name: "dependabot",
    value: 50,
    icon: "./Assets/Bots/dependabot.svg",
    desc: `Github bot which automated dependency updates.It creates pull requests to keep your dependencies secure and up-to-date.`
  },
  {
    cat: "Bots",
    name: "welcomebot",
    value: 50,
    icon: "./Assets/Bots/welcomebot.svg",
    desc: `A Github App built with Probot that welcomes new users in any repository.`
  },
  {
    cat: "Tests",
    name: "Mocha",
    value: 50,
    icon: "./Assets/Tests/mocha.svg",
    desc: `Mocha is a feature-rich JavaScript test framework running on node and the browser, making asynchronous testing simple and fun. Mocha Tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.`
  },
  {
    cat: "Tests",
    name: "Jest",
    value: 50,
    icon: "./Assets/Tests/jest.svg",
    desc: `Jest is used by Facebook to test all JavaScript code including React applications. It also create code coverage report.`
  },
  {
    cat: "Management",
    name: "Slack",
    value: 50,
    icon: "./Assets/Management/slack.svg",
    desc: `Slack is where work flows. It's where the people you need, the information you share, and the tools you use come together to get things done. Join us`
  },
  {
    cat: "Management",
    name: "Github",
    value: 50,
    icon: "./Assets/Ignitus/Ignitus.png",
    desc: `GitHub Inc. is a web-based hosting service for version control using Git. At Ignitus, we have open sourced our code-base and uses Github to host the application.`
  },
  {
    cat: "Tooling",
    name: "Sublime Text 3",
    value: 50,
    icon: "./Assets/Tooling/sublimetext.svg",
    desc: `
				Sublime Text 3 is a powerful and cross-platform source code editor. It is well-known for
				introducing the concept of multi-cursor and lots of text editing command. Besides, its
				plugin ecosystem is very rich which allows enhancing productivity to the fullest.
			`
  },
  {
    cat: "Tooling",
    name: "Visual Studio Code",
    value: 50,
    icon: "./Assets/Tooling/vscode.svg",
    desc: `
				Visual Studio Code is a cross-platform source code editor developed by Microsoft.
				It includes support for debugging, embedded Git control, syntax highlighting,
				intelligent code completion, snippets, and code refactoring. Its extensions eco system is growing quickly and it is becoming the best Front End editors out there.
			`
  },
  {
    cat: "Tooling",
    name: "Heroku",
    value: 50,
    icon: "./Assets/Tooling/heroku.svg",
    desc: `
				Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
			`
  },
  {
    cat: "Tooling",
    name: "CodeCov",
    value: 50,
    icon: "./Assets/Tooling/codecov.png",
    desc: `web performance is our top priority when development web sites and applications.
				We're practicing code optimization and Front End delivery optimization from day 1.
				To measure the results, we use several tools to audit and benchmark our applications.`
  }
];
