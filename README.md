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
- You must have gulp installed. For more info - https://gulpjs.com/
- All the source files are located in src/ folder
- After any change in a scss, js, or html file, run 'gulp' command in the command line
- gulp will compile, minify, concatenate and update all the required files in the base folder