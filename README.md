# Worldviews

A travel community for sharing experiences and recommendations

<div align="center">
  <img src="" alt="Mockup on different devices, created with Techsini." width="">
</div>

Worldviews is a travel community web app for...
<br>
This website is responsive on all devices, and designed to be appealing and intuitive. Users can...
<hr>

## Table of Contents
- [Intro](#worldviews)
- [Table of Contents](#table-of-contents)
- [UX](#ux)
  - [User Personas](#user-personas)
  - [User Stories](#user-stories)
  - [Structure](#structure)
  - [Features](#features)
  - [Surface](#surface)
- [Testing](#testing)
- [Future Implementations](#future-implementations)
- [Languages, Libraries, and Software](#languages-libraries-and-software)
- [Deployment](#deployment)
- [Credits](#credits)

## UX
### User Personas
<!-- - A home cook who enjoys experimenting and wants to learn more about grain-free baking.
- A person with overlapping dietary restrictions (low-carb + kosher, vegan + celiac, etc).
- A person with new grain-free dietary restrictions who wants to find tasty substitute recipes efficiently. -->

### User Stories

These stories guided the development of features. To implement Agile methodology, they were mapped to Github Projects in a [kanban board](https://github.com/users/emilyrosenberg/projects/7/views/1) along with other development tasks. They are grouped into Milestones and tagged with priority labels.

### Navigation & Authentication (from walkthrough)
- Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
- Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
- Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
- Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
- Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
- Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
- Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
- Avatar: As a user I can view user's avatars so that I can easily identify users of the application

### Adding & Liking Posts (from walkthrough)
- Create posts: As a logged in user I can create posts so that I can share my images with the world!
- View a post: As a user I can view the details of a single post so that I can learn more about it
- Like a post: As a logged in user I can like a post so that I can show my support for the posts that interest me

### The Posts Page (from walkthrough)
- View most recent posts: As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
- Keyword search: As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.
- View liked posts: As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
- View posts of followed users: As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
- Infinite scroll: As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc

### The Post Page (from walkthrough)
- Post page: As a user I can view the posts page so that I can read the comments about the post
- Edit post: As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
- Create a comment: As a logged in user I can add comments to a post so that I can share my thoughts about the post
- Comment date: As a user I can see how long ago a comment was made so that I know how old a comment is
- View comments: As a user I can read comments on posts so that I can read what other users think about the posts
- Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
- Edit a comment: As an owner of a comment I can edit my comment so that I can fix or update my existing comment

### The Profile Page (from walkthrough)
- Profile page: As a user I can view other users profiles so that I can see their posts and learn more about them
- Most followed profiles: As a user I can see a list of the most followed profiles so that I can see which profiles are popular
- User profile - user stats: As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
- Follow/Unfollow a user: As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
- View all posts by a specific user: As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
- Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and bio
- Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

### Locations model
- Locations page: As a user I can view all post locations so that I can get inspiration about locations
- Locations search: As a user I can search post locations so that I can see posts about a specific location
- Popular locations: As a user I can see the most popular locations for posts, so that I know where other users are traveling and posting

### Requests model (inspired by [Pet Palace](https://github.com/Ajn0r/pet-palace) Ads model)
- Create request: As a logged-in user I can create a request so that I can ask other users for info about a location
- Manage request: As a logged-in user I can edit or delete my own requests so that I can make corrections or update my request
- View requests: As a user I can view requests that other users have made so that I can see if there are any interesting ones
- Location search: As a user I can search requests so that I can find past recommendations
- Create request comments: As a logged-in user I can comment on a request so that I can share info with other users
- Manage request comments: As a logged-in user I can edit or delete my own comments so that I can control my contributions

### Structure
#### Landing Page
The landing page welcomes the user...
 <!-- to GFF. It has information about the site and the GFF project, and shows three recently-added recipes. The header has a navbar and search bar, and there is a footer with social media links. -->

<!-- **Recipe Viewing:** <br>
#### All Recipes
This page shows all recipes on the site.
#### Recipe Detail
This page shows all the information about a single recipe, including title, description, level, method, and up to 3 tags, as well as a photo and the ingredients and instructions.

**Account Creation:** <br>
The user can create an account with a username and password. This functionality comes from allauth. They can then log in, log out, create, update, and delete recipes, plus add and view favorites.
#### Create an Account
This is a simple form from allauth to create a username and password, styled with crispy forms.
#### Login
This is a simple form from allauth to enter username/password.
#### Logout
This is a simple form from allauth to confirm logout by clicking a button.

**Recipe CRUD:** <br>
A logged-in user can:

- Create a new recipe
- Read posted recipes
- Update recipes they have posted
- Delete recipes they have posted

Feedback messages follow these user actions.

#### Add Recipe
This form was styled with crispy forms and allows the user to add a recipe to GFF. It includes input fields for Title, Description, Ingredients, Instructions, Level, Image, Image Description, Method, and at least one and up to three tags.
#### Update Recipe
The user sees the same form with their recipe information, and can make updates in any field.
#### Delete Recipe
The user can confirm that they want to delete the recipe.

**Favorites:** <br>
A logged-in user can:
- Save a recipe to their favorites

A feedback message accompanies this user action. For future implementations, please read more [here](#future-implementations).

#### Favorites
This page shows all the recipes that the user has added to their favorites.
#### Favorite Finder
A random recipe is pulled from all recipes. When the user searches by keyword, a recipe containing that keyword will be shown. They can then click the button to add it to their favorites.

**Other Pages:** <br>
#### About
The About page is all about Grain Free Friend's community and mission.
#### Contact
This is a future implementation. It will include a contact form.
#### 403 & 404
These pages exist and will become visible in a future implementation.

### Features
#### Header and Navigation
The header includes the GFF logo, navigation items, and a search bar.
- The logo is described [below](#logo).
- The navbar always contains Home, Recipes, and About. If the user is logged out or has no account, they can see options to Register and Login. If the user is logged in, they can see their Favorites, Add Recipe, and an option to Logout.
- The search bar has an input field and a button. User can search by keyword and results will be returned if the keyword is in any recipe's title, description, tags, ingredients, and instructions.
#### Footer
The footer contains social media links. Social media icons were created with [UXWing](https://uxwing.com/). -->

### Features
#### Header and navigation
#### Footer

### Surface
#### Colors
<!-- The color palette is from [Lilybug Design](https://www.lilybugdesign.co.nz/colour-wall). I saw one of these designs used in a [PP4 project by Roshna Vakkee](https://github.com/RoshnaVakkeel/Little_Learners_Lab_Logs?tab=readme-ov-file), and found a beautiful one for my project. This palette is fresh and lively, as well as warm. It supports the Grain Free Friend branding: accessible, fun, warm, supportive. <br>
![Color palette](static/images/readme-images/color-palette.png)
I used colorpicker to get the HEX tags for each color. <br>
Colors were picked with [imagecolorpicker.com](https://imagecolorpicker.com/en). <br>
Custom black and white were chosen from [Color Meanings](https://www.color-meanings.com/) to complement the colorful palette.

These colors are currently used on the site:
- Cream: #FFE9B8
- Peach: #F9AC82
- Red: #F1442E
- Black: #100C08
- White: #FFFAF0 -->

#### Fonts
<!-- The fonts used in this project are implemented as a url from [Google Fonts](https://fonts.google.com/). <br>
The title font is [Montserrat](https://fonts.google.com/specimen/Montserrat). This is a bold, modern font with a rounded shape that's friendly and accessible. It was an option in the logo maker, and I decided to use it for the titles as well. <br>
![Montserrat font](static/images/readme-images/font-montserrat.png)
The main font is [Raleway](https://fonts.google.com/specimen/Raleway). This is a friendly, readable font in a modern style. It makes the recipe ingredients and instructions very clear and accessible. <br>
![Raleway font](static/images/readme-images/font-raleway.png) -->
#### Logo
The logo represents the Worldviews community's love of travel. Each person on earth has a unique perspective depending on their background, travel style, means of transport - maybe a bicycle! This is the place to share all these wonderful views with the world, within a kind and curious community.
<br>
The logo was made with [Looka](https://looka.com/). <br>

<div align="left">
  <img src="src/assets/logo-text.png" alt="Worldviews logo" width="300">
</div>

#### Favicon
The favicon was created from the logo image using the [favico.io favicon converter](https://favicon.io/favicon-converter/). <br>

<div align="left">
  <img src="src/assets/logo-favicon.png" alt="Worldviews favicon" width="50">
</div>

#### Images
All of the post and profile images are from [Unsplash](https://unsplash.com/).
<br>
They are stored in and accessed through [Cloudinary](https://cloudinary.com).

#### Background

## Testing
#### Lighthouse
### Code Validation
#### HTML
#### CSS
#### Javascript
#### Python
### User Stories Testing
### Manual Testing
<!-- This web app was tested in Chrome Developer Tools for troubleshooting functionality and style problems during development. It was tested on iOS with Chrome and Safari. The UX design was tested by users. -->
### Bugs
- Unable to deploy backend or update Config Vars 
  - Tried [this](https://stackoverflow.com/questions/71076368/unable-to-add-update-config-variables-in-heroku) but it did not work
  - Got help from tutoring, commented out CLIENT_ORIGIN_DEV in settings.py
  - Created a new Heroku app for the API
  - Added the correct Config Vars including CLIENT_ORIGIN_DEV
  - Was then not able to connect frontend and backend
- Unable to connect frontend and backend
  - Axios 404 error
  - Got help from tutoring, uncommented CLIENT_ORIGIN_DEV in settings.py and was able to deploy the API
  - Changed the CLIENT_ORIGIN_DEV to the Gitpod workspace
  - Frontend and backend connected
  - Tested by creating a new post in the frontend, which showed in the backend with an ID of 1
  - Previous posts from the API were not visible, and we do not know why this is

## Future Implementations
<!-- There are many features that will improve the user's experience of the current web app. 
- User can delete favorites. The CRUD functionality of the favorites app will be updated to include deleting favorites as well as adding them.
- User can add and delete favorites from the recipe detail page.
- User can comment on recipes. The comments will have CRUD functionality.
- User can filter a search by tag. This will also involve creating tags, instead of the placeholder fix in the current version.
- Require admin approval for user-submitted recipes and comments. the user can submit a recipe, and when it is approved, it will be published.
- Add contact form. As a placeholder, the Contact button on the About page currently links to Facebook's home page.
- Make custom 403 and 404 pages visible.
- Custom feedback messages.
- Update styling and visual appeal.
- Content. My grain-free recipe development project is ongoing. -->

## Languages, Libraries, and Software
### Languages
- HTML
- CSS
- Javascript
- Python
### Modules and Packages
<!-- - black (python formatter)
- cloudinary (image hosting)
- crispy-bootstrap5
- dj-database-url
- django-allauth (authorization package)
- django-cloudinary-storage
- django-resized (resizes a photo submitted in the form)
- django-richtextfield (allows markdown styling in input fields)
- gunicorn (server for WSGI applications)
- psycopg2
- whitenoise (allows static files to load in deployed app) -->

- axios
- bootstrap
- jwt-decode
- react
- react-bootstrap
- react-dom
- react-infinite-scroll-component
- react-router-dom
- react-scripts
- web-vitals
- react-app
- react-app/jest
- msw
- node
- npm

### Frameworks and Websites
- Bootstrap4
- Django
- Github
- Github projects [Kanban board here](https://github.com/users/emilyrosenberg/projects/7/views/1)
<!-- - Cloudinary
- PostgreSQL (ElephantSQL) -->
- Heroku
- VS Code
- Google Chrome Dev Tools
<!-- - Google Fonts
- Colorpicker
- UXWing -->
- Unsplash
- PEP8
- W3C - HTML
- W3C - CSS

## Creating the App
### Creating the Repo and Local Workspace
This app was created with Gitpod and developed in VS Code.
1. Go to the Code Institute React CI Template [Template](https://github.com/Code-Institute-Org/react-ci-template)
2. Click on Use This Template
3. Create a new repository with the template, and copy the url
Open VS Code and click Clone Git Repository and enter the url
4. Save the repository locally
5. Open a new terminal
6. Run `python3 -m venv .venv` and `source .venv/bin/activate` to create and activate the virtual environment
7. Run `npm install`
8. Run `npm audit fix --force` to fix errors
9. Run `npm start` to run the app locally

<!-- 
6. Install Django and gunicorn: `pip3 install django gunicorn`
7. Install supporting database libraries dj_database_url and psycopg2 library: `pip3 install dj_database_url psycopg2`
8. Create file for requirements: in the terminal window type `pip freeze --local > requirements.txt`
9. Create project: in the terminal window type `django-admin startproject <your_project_name>`
10. Create app: in the terminal window type `python3 manage.py startapp <your_app_name>`
11. Add app to the list of installed apps in settings.py file: your_app_name
12. Migrate changes: in the terminal window type python3 manage.py migrate
13. Run the server to test if the app is installed, in the terminal window type `python3 manage.py runserver`
14. If the app has been installed correctly the window will display The install worked successfully! Congratulations!<br>
Additional instructions:
15. Create an account in ElephantSQL as a PostgreSQL database and connect in Heroku config vars and env.py
16. Create an account in Cloudinary for image storage and connect in Heroku config vars and settings.py -->

<!-- _Thanks to [Pedro Cristo](https://github.com/PedroCristo/portfolio_project_4/blob/main/README.md?plain=1) for the basis for these app creation instructions._ -->

## Deployment
The web app was deployed with Heroku. It is live at this [link](https://worldviews-162453e10c7f.herokuapp.com/). <br>

### Heroku deployment
This site was deployed by completing the following steps:

1. Log in to [Heroku](https://id.heroku.com) or create an account
2. On the main page click the button labeled New in the top right corner and from the drop-down menu select Create New App
3. You must enter a unique app name
4. Select your region
5. Click on the Create App button
6. Click Resources and select Heroku Postgres database
7. Open the Settings tab and scroll down to Config Vars
<!-- 8. Click Reveal Config Vars and add a new record with `SECRET_KEY = <key>`
9. Add a new record `CLOUDINARY_URL = <url>`
10. Add a new record `DISABLE_COLLECTSTATIC = 1`
11. Next, scroll down to the Buildpack section click Add Buildpack. Select Python and click Save Changes
12. Open the Deploy tab
13. Select Github as the deployment method
14. Confirm you want to connect to GitHub
15. Search for the repository name and click the connect button
16. Scroll to the bottom of the deploy page and select the preferred deployment type. Enable Automatic Deploys for automatic deployment when you push updates to Github
17. Create a Procfile `web: gunicorn <your_project_name>.wsgi`
For final deployment:
_NOTE: I could not deploy this way, unfortunately. A CI tutor told me that in order to deploy, I must have DEBUG = True in settings.py and DEBUG = FALSE in Heroku. A fellow student thought it might be a problem with the static files. I ran `python3 manage.py collectstatic` but this did not help either. Another CI tutor did troubleshooting with me and found a database error because Django is finding an earlier version of the database. I cannot recreate the error locally. When I try to run locally, I get Server Error (500). In settings.py DEBUG = False, and the app is running on Heroku. For now, this is the best I could do before submission. Actually finally it was no longer deploying from Heroku and so that the assessors can at least see my project, I set everything back to the way it was before. DEBUG = True in settings.py and DEBUG = FALSE in config vars._
18. When development is complete change the debug setting to: `DEBUG = False` in settings.py
19. In Heroku settings, delete the config vars for `DISABLE_COLLECTSTATIC = 1`, and `DEBUG = FALSE`

_Thanks to [Pedro Cristo](https://github.com/PedroCristo/portfolio_project_4/blob/main/README.md?plain=1) for the basis for these deployment instructions._ -->

## Credits
### Content
<!-- - The content and branding of the site are designed to provide support and ideas for users who are interested in unconventional baking. The tone is warm and open, letting users know they are welcome and encouraging them to participate in the community.
- All recipe content is posted by users. The content that I have posted here is from my own grain-free recipe development project. -->
### Media
<!-- - The recipe images are either my personal photos or open source photos from [Unsplash](https://unsplash.com/).
- The social media icons are from [UXWing](https://uxwing.com/). -->
### Thank you
<!-- - This project was developed using the [Django Recipe Sharing tutorial by Dee Mc](https://www.youtube.com/watch?v=sBjbty691eI&list=PLXuTq6OsqZjbCSfiLNb2f1FOs8viArjWy&index=1). I am indebted to her for inspiration on the entire project, including the Django logic, the basic styling of the header, footer, and forms, the CRUD functionality of the recipes and favorites, class-based views, and querying.
- The project was also inspired by Code Institute's Django Blog Walkthrough. I used this to help create the success alerts.
- Inspiration for this readme came from [gStarhigh](https://github.com/gStarhigh/pro4). When I finish it I hope I can come anywhere close to this standard.
- An outline of the deployment instructions came from [Pedro Cristo](https://github.com/PedroCristo/portfolio_project_4/blob/main/README.md#frameworks---libraries---programs-used).
- Thank you to the Code Institute tutors for their enthusiastic support with problem solving and squashing bugs.
- Thank you to my Code Institute mentor Adegbenga Adeye.
- Thanks to my Code Institute cohort facilitator Kristyna, who is the best at pep talks. Also thanks for suggesting the recipe sharing tutorial by Dee Mc!
- And last but not least, thank you to my amazing student pals who have banded together to provide positivity and solutions in the tough times, and celebrations in the good ones. -->

<!-- ![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome,

This is the Code Institute student template for React apps on the Codeanywhere IDE. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.  
DO NOT use this template if you are using the Gitpod IDE. Use the following command instead:  
`npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm`

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Codeanywhere and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **31st August, 2023**

## Codeanywhere Reminders

In Codeanywhere you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to _Account Settings_ in the menu under your avatar.
2. Scroll down to the _API Key_ and click _Reveal_
3. Copy the key
4. In Codeanywhere, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

---

Happy coding!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the required npm packages.

### `npm start`

Runs the app in the development mode.\
Open port 3000 to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
