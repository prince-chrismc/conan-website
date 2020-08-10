# Conan.io Website
## Getting Started
These instructions will get you a copy of the project up and running on your local staging and production machines and you will find some additional information about the setup of the website. 
 
## Installation 
```
git clone ssh://git@git.jfrog.info/website/conan-website.git conan

```
Then:  
 - cd into directory. 
 - open `index.html` 
 
 ## Additional Info
 Built using:
 - Bootstrap 4.0.0
 - Slick Slider

## Structure
Base folder (html files)
- css (custom css)
- img (images)
- js (scripts)
- slick (slicker slider)

## Development Instructions
- `$ npm install`
- All the source files are located in `src/` folder, any update to the website should be done from this folder, otherwise it will be overwritten by the next `gulp` task
- After any change you do to any `HTML`, `SCSS`, or `JS` file in the `src/` folder, run `$ gulp`
- Any new images will be added to `src/img`. After an image has been added, run `$ gulp imagesTask`


