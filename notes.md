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

The favicon is still not displaying, though.