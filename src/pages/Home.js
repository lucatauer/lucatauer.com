import React from "react";
import '../input.css';
import Contact from '../Contact';

function Home() {
  return (
    <div className="smartphone:h-full tablet:h-screen flex flex-col justify-between">
      <nav className="bg-white border-t-4 border-violet-600 flex flex-row justify-between h-16 shadow-md smartphone:px-1 tablet:px-[14rem] 2xl:px-[28rem] 3xl:px-[40rem]">
        <div className="smartphone:place-content-center smartphone:pb-3 smartphone:pl-4 tablet:pl-0 pt-3 text-3xl font-semibold text-zinc-600">
          <h1>Luca Tauer</h1>
        </div>
        <div className="tablet:hidden mt-4 mr-3 flex flex-row">
          <a href="/"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg></a>
          <a href="/projects"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg></a>
          <a href="/blog"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg></a>
        </div>
        <div className="smartphone:hidden tablet:inline pt-3 text-xl font-semibold">
          <a className="text-violet-600" href="/">Home</a>
          <a className="ml-5 hover:text-violet-400 text-zinc-600" href="/projects">Projects</a>
          <a className="ml-5 hover:text-violet-400 text-zinc-600" href="/blog">Blog</a>
          <Contact />
        </div>
      </nav>
      <div className="bg-white smartphone:mx-5 tablet:px-[14rem] 2xl:px-[28rem] smartphone:mt-16 tablet:mt-10 smartphone:flex-col flex tablet:flex-row justify-between 3xl:mx-[40rem]">
        <div className="smartphone:w-full tablet:w-1/2">
          <h2 className="text-3xl font-semibold text-zinc-600 3xl:text-4xl">Global citizen, investor, <span className="text-violet-700">founder</span>.</h2>
          <img className="tablet:hidden block mt-10 pointer-events-none" src="images/luca.png" alt="Me" />
          <br />
          <p className="text-justify smartphone:text-xl tablet:text-2xl text-zinc-600 3xl:text-3xl">// Hey there! My name is Luca Tauer and this is my personal website. I am a young founder and investor from Germany and with my projects I want nothing less than changing the world for the better. On this page you can find out more about me and especially the things I am working on. //</p>
          <br /><br />
          <p className="text-justify smartphone:text-xl tablet:text-2xl italic text-zinc-600 3xl:text-3xl">Feel free to contact me, as I am always seeking new connections! :)</p>
        </div>
        <div className="smartphone:w-full tablet:w-1/2 text-right">
          <img className="w-[26rem] block ml-auto smartphone:hidden tablet:inline tablet:-mr-8 pointer-events-none 3xl:w-[29rem]" src="images/luca.png" alt="Me" />
        </div>
      </div>
      <footer className="text-zinc-400 smartphone:mb-5 tablet:mb-10 smartphone:mx-5 tablet:px-[14rem] 2xl:px-[28rem] smartphone:mt-10 tablet:mt-0 flex smartphone:flex-col tablet:flex-row justify-between 3xl:mx-[40rem]">
        <div className="flex flex-row">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lucavontauer"><img className="w-9 rounded-lg" src="images/socials/twitter.png" alt="Twitter" /></a>
          <a rel="noopener noreferrer" href="discord://discordapp.com/users/293468376506957824"><img className="w-9 smartphone:ml-2 tablet:ml-4 rounded-lg" src="images/socials/discord.png" alt="Discord" /></a>         
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luca-tauer-789522225/"><img className="w-9 smartphone:ml-2 tablet:ml-4 rounded-lg" src="images/socials/linkedin.png" alt="Linkedin" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/lucatauer"><img className="w-9 smartphone:ml-2 tablet:ml-4 rounded-lg" src="images/socials/github.png" alt="Github" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://app.parqet.com/p/61da6a92d332da787524747b"><img className="w-9 smartphone:ml-2 tablet:ml-4 rounded-lg" src="images/socials/parqet.png" alt="Parqet" /></a>
        </div>    
        <h1 className="smartphone:text-sm tablet:text-base smartphone:mt-5 mb-0 block tablet:mt-auto">Copyright © 2022 Luca Tauer. All  Rights Reserved.</h1>
      </footer>
    </div>
  );
}

export default Home;
