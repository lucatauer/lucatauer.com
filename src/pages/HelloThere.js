import React from "react";
import '../input.css';
import Contact from '../Contact';

function HelloThere() {
  return (
    <div className="smartphone:h-full tablet:h-screen flex flex-col justify-between">
      <nav className="bg-white border-t-4 border-violet-600 flex flex-row justify-between h-16 shadow-md smartphone:px-1 tablet:px-[14rem] 3xl:px-[28rem] 4xl:px-[40rem]">
        <div className="smartphone:place-content-center smartphone:pb-3 smartphone:pl-4 tablet:pl-0 pt-3 text-3xl font-semibold text-zinc-600">
          <h1>Luca Tauer</h1>
        </div>
        <div className="tablet:hidden mt-4 mr-3 flex flex-row">
          <a href="/"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg></a>
          <a href="/projects"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg></a>
          <a href="/blog"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg></a>
        </div>
        <div className="smartphone:hidden tablet:inline pt-3 text-xl font-semibold">
          <a className="hover:text-violet-400 text-zinc-600" href="/">Home</a>
          <a className="ml-5 text-zinc-600 hover:text-violet-400" href="/projects">Projects</a>
          <a className="ml-5 text-violet-600" href="/blog">Blog</a>
          <Contact />
        </div>
      </nav>
      <div className="bg-white smartphone:mb-10 tablet:mb-0 smartphone:mt-16 tablet:mt-0 smartphone:mx-5 tablet:px-[14rem] 3xl:px-[28rem] 4xl:px-[40rem]">
        <h1 className="text-violet-700 text-3xl font-semibold">Hello there.</h1>
        <div className="flex smartphone:flex-col tablet:flex-row justify-between">
            <p className="smartphone:text-lg tablet:text-xl text-zinc-600">About myself and the things I like.</p>
            <p className="smartphone:text-lg tablet:text-xl smartphone:mt-3 tablet:mt-0 text-zinc-600">March 27, 2022 • 2 min read</p>
        </div>
        <div className="text-justify smartphone:h-auto tablet:h-[30rem] smartphone:overflow-visible tablet:overflow-y-auto smartphone:text-lg tablet:text-xl mt-10 text-zinc-600">
            <p>
            Ok, so not only did you find my website, but you also found my blog. Congratulations or maybe rather thank you, because I'm glad if you take the time to read what I write. With this first entry in my blog I would like to introduce myself briefly and show you who I am and what topics I like to deal with, which I will then logically write about in this blog. Since I deal with a lot of things, it will not be easy to put it all under one hat, but that's exactly why I want to write this blog, to share a little bit of all this with you.
            <br></br><br></br>
            But first about me: I'm Luca, I'm just 20 years old and I want to release my first app soon, about which I will share more information with you soon. (You can find a first preview under projects right now and the website will be online soon as well) I live in Germany and graduated from high school almost 2 years ago. After that I did a voluntary social year at my basketball club and got a coaching license among other things. Right now I'm mainly working on my app and I'm trying to educate myself both deeply and broadly. Especially in the field of finance, stocks, cryptocurrencies, etc. and in the field of technology (hardware, coding, etc.) I have acquired a vast knowledge by now, which I would like to deepen in the future. But also many other topics like sports, cars, movies, design and fashion interest me and I try to find the necessary time for these topics as well.
            <br></br><br></br>
            That's why you'll find posts on many different topics on my blog, but the main focus will probably be on finance and technology, since these are the topics I deal with the most and I'd like to share my insights with you. I also want to improve my website in the near future, so if you have any tips or suggestions about that, feel free to contact me! And also, if you have questions, want to give me input on topics or just want to exchange ideas, you can of course contact me as well. Otherwise, I'm happy if you drop by here from time to time and maybe learn one or the other thing through my blog.
            </p>
        </div>
      </div>
      <footer className="text-zinc-400 smartphone:mb-5 tablet:mb-10 smartphone:mx-5 tablet:px-[14rem] 3xl:px-[28rem] 4xl:px-[40rem] smartphone:mt-10 tablet:mt-0 flex smartphone:flex-col tablet:flex-row justify-between">
        <div className="flex flex-row">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lucavontauer"><img className="w-9 rounded-lg" src="images/socials/twitter.png" alt="Twitter" /></a>
          <a rel="noopener noreferrer" href="discord://discordapp.com/users/293468376506957824"><img className="w-9 smartphone:ml-2 tablet:ml-4 rounded-lg" src="images/socials/discord.png" alt="Discord" /></a>         
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luca-tauer-789522225/"><img className="w-9 smartphone:ml-2 tablet:ml-4 rounded-lg" src="images/socials/linkedin.png" alt="Linkedin" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/lucatauer"><img className="w-9 smartphone:ml-2 tablet:ml-4 rounded-lg" src="images/socials/github.png" alt="Github" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://app.parqet.com/p/61da6a92d332da787524747b"><img className="w-9 smartphone:ml-2 tablet:ml-4 rounded-lg" src="images/socials/parqet.png" alt="Parqet" /></a>
        </div>   
        <h1 className="smartphone:text-sm tablet:text-base smartphone:mt-5 tablet:mb-0 block tablet:mt-auto">Copyright © 2022 Luca Tauer. All  Rights Reserved.</h1>
      </footer>
    </div>
  );
}

export default HelloThere;