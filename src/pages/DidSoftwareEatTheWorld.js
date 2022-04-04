import React from "react";
import '../input.css';
import Contact from '../Contact';

function DidSoftwareEatTheWorld() {
  return (
    <div className="smartphone:h-full tablet:h-screen flex flex-col justify-between">
      <nav className="bg-white border-t-4 border-violet-600 flex flex-row justify-between h-16 shadow-md smartphone:px-1 tablet:px-[28rem] 3xl:px-[40rem]">
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
      <div className="bg-white smartphone:mb-10 tablet:mb-0 smartphone:mt-16 tablet:mt-0 smartphone:mx-5 tablet:mx-[28rem] 3xl:mx-[40rem]">
        <h1 className="text-violet-700 text-3xl font-semibold">Did software eat the world?</h1>
        <div className="flex smartphone:flex-col tablet:flex-row justify-between">
            <p className="smartphone:text-lg tablet:text-xl text-zinc-600">A comment on Marc Andreessens famous essay from 2011.</p>
            <p className="smartphone:text-lg tablet:text-xl smartphone:mt-3 tablet:mt-0 text-zinc-600">April 3, 2022 • 6 min read</p>
        </div>
        <div className="text-justify smartphone:h-auto tablet:h-[30rem] smartphone:overflow-visible tablet:overflow-y-auto smartphone:text-lg tablet:text-xl mt-10 text-zinc-600">
            <p>
            Short answer: yes. Longer answer: yes, but there is still a far way to go. Ok, for those of you who deal with the topic of finance and technology more often, the article by Marc Andreessen will not be unfamiliar. For those of you who don't know what it's about, here's a short summary: <a target="_blank" rel="noopener noreferrer" className="text-violet-500" href="https://en.m.wikipedia.org/wiki/Marc_Andreessen">Marc Andreessen</a> is a well-known entrepreneur and investor from the USA who has been at the forefront since the beginning of the Internet era and was involved in the development of Mosaic and subsequently the Netscape browser. Later, he and his business partner Ben Horowitz founded an investment firm with which they invested early on in Facebook, GitHub, Pinterest, Twitter and Skype, among others. Today, he sits on the board of directors at Meta Platforms and has also acted in an advisory capacity or taken on board responsibilities at several other companies in the past.
            <br></br><br></br>
            But now to his famous essay <a target="_blank" rel="noopener noreferrer" className="text-violet-500" href="https://osr.cs.fau.de/wp-content/uploads/2016/08/marc.pdf">"Why software is eating the world"</a> from 2011, in which Marc describes in detail how young software-based companies are penetrating existing sectors and industries and gaining large market shares. From today's perspective, this conclusion seems more than obvious. However, in 2011 we were still in a completely different time. I know that was just 10 years ago, but the world has changed incredibly fast in the last 10 years. Just a few weeks before Marc wrote his essay back in 2011, Apple overtook Exxon Mobile in market capitalization to become the most valuable company in the world. It was a fundamental turning point, because while the stock markets had been ruled by oil companies for decades, Apple's rise heralded an upheaval in the stock markets. Within a few years, the oil companies had to give up their places and if you look at the <a target="_blank" rel="noopener noreferrer" className="text-violet-500" href="https://companiesmarketcap.com/">10 most valuable companies</a> in the world today, with 2 exceptions, you only see technology in the form of software as well as hardware. So even though it's hard to believe, in 2011 Marc's prediction was not as obvious as it may seem today. 
            <br></br><br></br>
            But where do we go from here? Should we expect the FAANG companies (Meta (Facebook), Amazon, Apple, Netflix and Alphabet (Google)) to be replaced by the next wave of new companies soon? Probably not, because the giants of today have learned a few things from the past and in particular from the decline of former large companies and have prepared themselves accordingly. The most famous example of this is probably Nokia. Because while Apple presented the first iPhone in 2007 and thus already dug the grave for Nokia. At Nokia's annual general meeting in 2007, the company celebrated its best business year to date. The colleagues at Nokia had no idea that they were already out of business. But Nokia was not the only one missing the next big thing, also other big players such as Steve Ballmer, then CEO of Microsoft, <a target="_blank" rel="noopener noreferrer" className="text-violet-500" href="https://www.youtube.com/watch?v=eywi0h_Y5_U">smiled at the iPhone at first</a>, which meant that Microsoft was ultimately late to the party. And even the board at Apple hesitated at first and tried to keep Steve Jobs from releasing the iPhone. Because the iPhone would make the iPod completely obsolete, and the iPod was by far the most successful and important product Apple had ever brought to market. But as you can read in his biography Steve Jobs realized that someone else would kill the iPod if Apple didn't do it themselves, and so he finally prevailed.
            <br></br><br></br>
            Today, large companies are aware of how quickly they can drift into irrelevance if they are not prepared to discontinue old products and ride new trends. Accordingly, Meta (formerly Facebook) took precautions early on and acquired WhatsApp and Instagram, knowing that the Facebook platform would not remain hip and cool forever. This brings us to the next important point as to why today's large corporations will not disappear from the scene so quickly: Acquisitions. The FAANG companies have bought up an incredible number of companies in recent years and have long since expanded out of their original business areas.
            <br></br><br></br>
            Here's a short video on it:
            <iframe
       		    src="https://www.youtube.com/embed/hBuGJT5emyY"
                frameborder="0"
                class="w-full mt-3 aspect-video">
            </iframe>
            <br></br><br></br>
            But with the powerful FAANG companies, a debate around breaking up these companies has gained momentum in the public in recent years and especially in recent months, and it remains to be seen how the governments of the U.S. and Europe will proceed in this context. In any case, there are some points in favor of breaking up Meta, for example. But the question also arises whether no one has actually learned from the <a target="_blank" rel="noopener noreferrer" className="text-violet-500" href="https://en.m.wikipedia.org/wiki/Standard_Oil">breakup of Standard Oil</a>. Funnily enough, Standard Oil was an oil company that had gained a monopoly by acquiring smaller oil companies and was finally dissolved in 1911 under the <a target="_blank" rel="noopener noreferrer" className="text-violet-500" href="https://en.m.wikipedia.org/wiki/Sherman_Antitrust_Act_of_1890">Sherman Antitrust Act</a>. More than 100 years later, a similar measure may now be pending in the "successor industry" and it will remain exciting to follow the developments here in the coming months and years. However, a simple break-up is likely to be much more difficult than in the case of Standard Oil, since Meta's monopoly is not so easy to recognize. After all, Mark Zuckerberg could probably easily argue that in 2022 it will be possible for anyone to build their own social media platform, thereby purposefully undermining the very point of the debate. After all, the valuable thing about Facebook or Instagram is not the platform or the code. A few talented developers could whip up a working Facebook clone in a matter of weeks. Nor are there any special features that only Facebook developers can implement, for example. No, actually, this isn't about code or software, it's about users and the data associated with them. Without users, a platform like Facebook would simply be worthless; the software behind it has no intrinsic value. The users not only make the platform extremely valuable, they also make the platforms without users worthless and thus lead to a vicious circle, because if there is no user engagement on a platform, then it does not attract any new users, and if no new users are attracted, then there is also no content on this platform. But once this vicious circle is broken, there is quickly a domino effect and a platform can be used worldwide within a very short time (e. g. Tiktok).
            <br></br><br></br>
            Software has proven to be a extremely useful tool over the last 10 years and will continue to be so. The FAANG companies will also stay where they are and breaking them up will not make the individual companies any less valuable. But it is also clear that software alone is not enough to achieve success. True, there is still a shortage of developers and the need for talented people in this field will remain high. But through platforms like Wix and Squarespace, it has become possible for a broader mass to place beautiful and modern websites on the Internet. In concrete terms, this means that more people will be able to deploy websites, online stores, apps and other things on the internet and therefore it will be even more important to have a good idea and to implement it properly.
            <br></br><br></br>
            As far as the next 10 years are concerned, the assumption could perhaps be "Why data is eating the world". Because even if data has already completely penetrated some industries such as the advertising industry through social media platforms, there is still great potential for other industries to be penetrated and optimized by data and data analysis, but more on that in another article.
            </p>
        </div>
      </div>
      <footer className="text-zinc-400 smartphone:mb-5 tablet:mb-10 smartphone:mx-5 tablet:mx-[28rem] smartphone:mt-10 tablet:mt-0 flex smartphone:flex-col tablet:flex-row justify-between 3xl:mx-[40rem]">
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

export default DidSoftwareEatTheWorld;