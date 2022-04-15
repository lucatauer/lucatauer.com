import React from "react";
import '../input.css';
import Contact from '../Contact';

function Projects() {
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
          <a href="/projects"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg></a>
          <a href="/blog"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg></a>
        </div>
        <div className="smartphone:hidden tablet:inline pt-3 text-xl font-semibold">
          <a className="hover:text-violet-400 text-zinc-600" href="/">Home</a>
          <a className="ml-5 text-violet-600" href="/projects">Projects</a>
          <a className="ml-5 hover:text-violet-400 text-zinc-600" href="/blog">Blog</a>
          <Contact />
        </div>
      </nav>
      <div className="bg-white smartphone:mt-16 tablet:mt-0 smartphone:mx-5 tablet:mx-0 tablet:px-[14rem] 3xl:px-[28rem] 4xl:px-[40rem]">
        <h1 className="text-violet-700 text-2xl font-semibold">General Meeting</h1>
        <p className="smartphone:text-lg tablet:text-xl text-zinc-600">The real investment revolution made possible by tokenization and transparency.</p>
        <div className="mt-5">
          <img className="rounded-3xl pointer-events-none smartphone:aspect-square tablet:aspect-[2/1] w-full object-cover" src="images/generalmeeting.png" alt="General Meeting" />
        </div>
      </div>
      <footer className="text-zinc-400 smartphone:mb-5 tablet:mb-10 smartphone:mx-5 tablet:mx-0 tablet:px-[14rem] 3xl:px-[28rem] 4xl:px-[40rem] smartphone:mt-20 tablet:mt-0 flex smartphone:flex-col tablet:flex-row justify-between">
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

export default Projects;
