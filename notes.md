# Notes
I'm following [this](https://www.youtube.com/watch?v=uXFbi9Nqzc8) YouTube video.
After completing all the steps required in the video, none of the images were dispalying.
I then completed Step 3 in [this](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/) guide.
Still the images weren't displaying.
After that I also added a "." before the paths to images as per a comment in the video. For example, if the image tag was originally:

```
<Image src="/vercel.svg" alt="Vercel logomark" />
```
then change it to:
```
<Image src="./vercel.svg" alt="Vercel logomark" />
```

I also added a . at the start of the path to the favicon. All images and the favicon now display.


This document helped a lot for positioning the pause and play buttons:
https://www.w3schools.com/css/css_positioning.asp


The two links explained how to add CSS inline in react. It also mentioned the precedence of inline CSS and external CSS.
https://www.w3schools.com/css/css_howto.asp
https://www.w3schools.com/react/react_css.asp

This link explained what happens when a number and a string are "combined" with the + operator. (The number and string are concatenated.)
https://www.w3schools.com/js/js_numbers.asp