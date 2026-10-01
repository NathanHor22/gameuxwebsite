const SPEAKER_PAGE_PLACEHOLDER = "More information about this speaker will be announced soon.";
const SPEAKER_SUMMARY_PLACEHOLDER = "The session summary will be announced soon.";

const speakerPages = {
  "noor-amin": {
    name: "Noor Amin", pronouns: "she/her", role: "Senior Game Designer", company: "Riot Games",
    image: "noor-amin-2026.png",
    socials: {
      x: "https://x.com/noor_j_amin",
      linkedin: "https://linkedin.com/in/noor-amin"
    },
    about: "Noor Jahan Amin is a senior game designer at Riot Games and a neuroscientist by training. She currently works on League of Legends, focusing on expanding the game to the next generation of players.",
    talk: "Bringing Mayhem to ARAM: R&D Processes for Systems Designers", date: "Mon, 12 Oct", time: "10:15 – 10:45 A.M.",
    summary: "How ARAM: Mayhem applies dimensionality reduction and expansion to simplify complex systems, improve pacing, and expand to new audience profiles."
  },
  "png-yi-wei": {
    name: "Png Yi Wei", pronouns: "he/him", role: "Founder and Director", company: "Kurechii", image: "png-yi-wei-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/imyiwei" },
    about: "Yiwei P'ng is the founder & director of Kurechii, a Malaysian indie studio behind Postknight, King's League & Tiny Guardians, with more than 15M players worldwide.",
    summary: "From animated UI to surprise quests to over-engineered upgrades — Five Postknight 2 decisions that seemed right and backfired, and what they teach us about designing for mobile players.",
    talk: "When Better Isn’t Better: Five Postknight 2 Improvements That Backfired", date: "Mon, 12 Oct", time: "1:45 – 2:15 P.M."
  },
  "jami-lukins": {
    name: "Jami Lukins", pronouns: "she/her", role: "UX Director", company: "Blizzard", image: "jami-lukins-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/jami-lukins-485bb0b/" },
    about: "Jami Lukins is a 16 year industry veteran who has worked for Disney, Bungie, Wizards of the Coast, Riot, and is now a UX Director at Blizzard Entertainment working on Diablo.",
    summary: "Is UX being left out of the conversation on your team? Let's talk about tools for building trust and getting UX a seat at the table!",
    talk: "Trust: The Foundation for Building UX Maturity", date: "Mon, 12 Oct", time: "11:20 A.M. – 12:05 P.M."
  },
  "laura-elek": {
    name: "Laura Elek", pronouns: "she/they", role: "Senior UX/UI Designer", company: "PlayStation Studios", image: "laura-elek-2026.png",
    socials: { instagram: "https://www.instagram.com/lauraelekdesign/", linkedin: "https://www.linkedin.com/in/laura-elek-pancakeshelf/" },
    about: "Laura Elek is a Senior UX/UI Designer at PlayStation Creative Arts. Working as part of a centralised team, their responsibility is to offer UX/UI design support to first-party studios working on their upcoming titles.",
    summary: "This microtalk discusses the final year of UX/UI development on Housemarque’s latest AAA release; Saros.\n\nAt PlayStation Creative Arts, our team supported the interface design of this title for almost 4 years. This talk focuses specifically on our involvement in the final year up to release, and all of the challenges that emerged and were overcome during this time.",
    talk: "SAROS: The Final Year of UX/UI Development", date: "Mon, 12 Oct", time: "2:20 – 2:50 P.M."
  },
  "kate-fomina": {
    name: "Kate Fomina", pronouns: "she/her", role: "UIUX Creative Director", company: "UX is Fine", image: "kate-fomina-2026.png",
    socials: { x: "https://x.com/KateFomina0112", linkedin: "https://www.linkedin.com/in/kate-fomina-76a03372/" },
    about: "Game UI/UX designer who cares deeply about people, both players and developers, creating thoughtful game experiences through strong collaboration, mentorship, human-centered design, and sustainable creative workflows.",
    summary: "In an industry chasing “UX unicorns,” how do designers stay adaptable, motivated, and connected to the craft without burning out or losing themselves in the process?",
    talk: "The UX Unicorn Myth: Staying Sharp in an Industry That Wants Everything", date: "Tue, 13 Oct", time: "3:40 – 4:10 P.M."
  },
  "dr-ng-yiing-yng": {
    name: "Dr Ng Yiing Y'ng", pronouns: "she", role: "Senior Lecturer", company: "UOW Malaysia", image: "dr-ng-yiing-yng-2026.png",
    socials: { instagram: "https://www.instagram.com/yyng7/", linkedin: "https://www.linkedin.com/in/yyng" },
    about: "Dr. Ng is a game development lecturer at UOW Malaysia with a strong passion for video games. Her research specializes in game user research & she seeks to support the growth of the game industry.",
    summary: "This talk explores how user research can enhance playtesting by using methods that reveal not only what players do, but why they do it, through examples of how players interpret gameplay.",
    talk: "Beyond Playtesting: Unlocking Deep Player Insights Through User Research", date: "Mon, 12 Oct", time: "2:20 – 2:50 P.M."
  },
  "abhishek-agarwal": {
    name: "Abhishek Agarwal", pronouns: "he/him", role: "Principal UX Designer", company: "Ubisoft", image: "abhishek-agarwal-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/abhishekagarwalux/" },
    about: "Principal UX Designer at Ubisoft on Rainbow Six Siege, with prior UX work in emergency-department and correctional systems. He designs for high-stakes contexts and for people operating under stress, interruption, and incomplete information.",
    summary: "In high-stakes systems like ERs, designers assume the user is stressed, interrupted, and out of second chances. Competitive players are too, never more than when grabbing the defuser under fire in the round that decides the match. This Pecha Kucha takes one Tom Clancy’s Rainbow Six® Siege fix and shows why the obvious solution was the wrong one, and what designing for the real player, not the ideal one, actually took.",
    talk: "The Real Player Isn’t the Ideal Player: A Tom Clancy’s Rainbow Six® Siege Defuser Story", date: "Mon, 12 Oct", time: "2:20 – 2:50 P.M."
  },
  "lydia-ho-lee-wei": {
    name: "Lydia Ho Lee Wei", pronouns: "she/her", role: "Game and Narrative Designer", company: "Organisation to be announced", image: "lydia-ho-lee-wei-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/lydia-hlw/" },
    about: "Lydia Ho is a cross-discipline game designer with shipped experience as a narrative designer, game designer, and producer. Her credits include Postknight, No Straight Roads, Tiny Guardians, King's League, and other mobile games.\n\nShe has designed content, levels, onboarding experiences for various titles from the ground up, and believes that the best game experiences happen when every discipline is building towards the same direction.",
    summary: "A player decides whether they're in or out faster than any tutorial can finish loading.\n\nBut how much can something as simple as a name input really do?\n\nIn this talk, Lydia shares her approach to FTUE (first-time user experience) through examples from shipped titles, exploring how that critical first impression can teach without being intrusive, and what designers can take back to their own projects.",
    talk: "The Invisible Tutorial", date: "Tue, 13 Oct", time: "2:55 – 3:25 P.M."
  },
  "jozef-kulik": {
    name: "Józef Kulik", pronouns: "he/him", role: "Senior Research and Accessibility Lead", company: "PlaytestCloud", image: "jozef-kulik-speaker-list-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/jozefkulik/" },
    about: "Joe is an award-winning researcher and the Research and Accessibility Lead at PlaytestCloud. With over 10 years of experience in games, he's worked on titles shipped to hundreds of millions of players.",
    summary: "Practical insights into balancing feedback from varied streams, including disabled players in research, and using player data through an outline of the full user-testing strategy for Denshattack!",
    talk: "All Aboard: Inclusive Playtesting for Small Teams", date: "Mon, 12 Oct", time: "3:35 – 4:05 P.M."
  },
  "chloe-hodgson": {
    name: "Chloe Hodgson", pronouns: "she/he", role: "UX Designer", company: "Freelance", image: "chloe-hodgson-2026.png",
    socials: { x: "https://x.com/KeezuraArts", linkedin: "https://www.linkedin.com/in/chloe-patricia-hodgson/" },
    about: "Chloe is a freelance UX designer and artist specialising in UX maturity, holistic design, and accessibility. Chloe recently headed up UX/UI/UR on Denshattack!. She previously worked at Ubisoft and Atomhawk.",
    summary: "Practical insights into balancing feedback from varied streams, including disabled players in research, and using player data through an outline of the full user-testing strategy for Denshattack!",
    talk: "All Aboard: Inclusive Playtesting for Small Teams", date: "Mon, 12 Oct", time: "3:35 – 4:05 P.M."
  },
  "kate-edwards": {
    name: "Kate Edwards", pronouns: "she/her", role: "CEO / CXO & Cofounder", company: "Geogrify / SetJetters", image: "kate-edwards-2026.png",
    socials: { x: "https://x.com/geogrify", linkedin: "https://www.linkedin.com/in/geogrify/" },
    about: "Kate Edwards is a 33+ year, award-winning industry veteran who pioneered culturalization at Geogrify, and has consulted on 320+ games. She’s also the CXO/Cofounder of SetJetters, the screen tourism app.",
    summary: "Culture shapes how players interpret every aspect of a game - from visual symbols and environmental storytelling to character design and narrative themes. Good user experience isn't only about a player's interaction with the game design; it's also about ensuring individuals from a variety of cultural backgrounds understand and emotionally engage with the worlds we create. This session explores how culturalization improves the player experience through better design decisions, introducing practical frameworks - including allegorical distance - that help developers anticipate how different audiences may perceive the same content. With over 30 years of experience in games as a geographer and culturalization strategist, Kate Edwards will leverage examples from games developed in both Asia and the West to teach attendees actionable techniques for designing experiences that resonate across cultures while remaining true to their creative vision.",
    talk: "Designing for Cultural UX: Maximizing the Global Appeal of Your Game", date: "Mon, 12 Oct", time: "3:05 – 3:35 P.M."
  },
  "foo-yi-chyuan": {
    name: "Foo Yi Chyuan", pronouns: "he/him", role: "Digital Media Design Lecturer", company: "The One Academy", image: "foo-yi-chyuan-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/yi-chyuan-foo-1648b7155" },
    about: "Yi Chyuan is a UI/UX educator and curriculum developer exploring how socially conscious design and human-centred experiences can drive participation, empathy, and cultural engagement.",
    summary: "Can generalist design students create better game UX? This fast-paced microtalk explores how Digital Media Design students apply pure, human-centered UX methods to tackle complex game mechanics without the bias of traditional gaming conventions.",
    talk: "Unconventional Game Design: Insights from UX Education", date: "Tue, 13 Oct", time: "2:55 – 3:25 P.M."
  },
  "aurelie-bosc": {
    name: "Aurelie Bosc", pronouns: "she/her", role: "Associate Producer", company: "Ubisoft", image: "aurelie-bosc-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/aureliebosc/" },
    about: "Aurélie Bosc is an Associate Producer specializing in UX for live games, with a background in industrial design. She approaches product and interface design holistically, creating seamless experiences across platforms. She has contributed to all phases of design, from ideation and concept definition to wireframing, specifications, and stakeholder communication, while also leading and mentoring teams. Aurélie brings a strategic, detail-oriented mindset to managing complex workflows, fostering cross-functional collaboration, and delivering high-quality results in fast-paced environments. She has worked with clients including Ubisoft, Disney, AMC, Orange, and Cineplex, and is passionate about bridging design, production, and player experience at scale today.",
    summary: "Collaboration between Game Design and UX on Rainbow Six Siege has been evolving for over a decade. As the game has grown into a live service supported by more than 20 designers across five studios, maintaining alignment between these two disciplines has become both critical and complex.\n\nIn this session, Aurélie Bosc (UX Associate Producer) and Thomas Bodin (UX Designer) share real-world insights from their ongoing collaboration with the Game Design team. Drawing from their work on features such as creating a new character, designing a game mode intended to rejuvenate the game, or other core systems every seasons, the speakers highlight how their teams define responsibilities, structure workflows, and foster a productive and respectful relationship between disciplines.\n\nThis talk offers an inside look into the UX/GD collaboration process on a major live game and presents actionable strategies that attendees can apply to their own projects.",
    talk: "Navigating UX and Game Design Collaboration in a Live Game Environment", date: "Tue, 13 Oct", time: "10:05 – 10:50 A.M."
  },
  "thomas-bodin": {
    name: "Thomas Bodin", pronouns: "he/him", role: "Senior UX Designer", company: "Ubisoft", image: "thomas-bodin-2026.png",
    hideSocials: true,
    about: "Thomas Bodin is a Senior UX Designer with a strong background in game design and user experience, currently working at Ubisoft Montréal on Rainbow Six Siege. With over five years of experience in the gaming industry, he has contributed to major AAA titles across multiple platforms, including Xbox, PlayStation, and PC. At Ubisoft Montréal, he led the UX design for the innovative 6v6 game mode “Dual Front,” overseeing the entire process from ideation to production. Prior to this, his work covered critical core systems such as 3C (Character, Camera, Controls), anti-cheat mechanisms, non-vocal communication, accessibility features, and multi-platform optimization. His earlier roles at Ubisoft Saguenay involved UX and UI design for titles like Rainbow Six Extraction and Hyper Scape, as well as VR development on unannounced projects.",
    summary: "Collaboration between Game Design and UX on Rainbow Six Siege has been evolving for over a decade. As the game has grown into a live service supported by more than 20 designers across five studios, maintaining alignment between these two disciplines has become both critical and complex.\n\nIn this session, Aurélie Bosc (UX Associate Producer) and Thomas Bodin (UX Designer) share real-world insights from their ongoing collaboration with the Game Design team. Drawing from their work on features such as creating a new character, designing a game mode intended to rejuvenate the game, or other core systems every seasons, the speakers highlight how their teams define responsibilities, structure workflows, and foster a productive and respectful relationship between disciplines.\n\nThis talk offers an inside look into the UX/GD collaboration process on a major live game and presents actionable strategies that attendees can apply to their own projects.",
    talk: "Navigating UX and Game Design Collaboration in a Live Game Environment", date: "Tue, 13 Oct", time: "10:05 – 10:50 A.M."
  },
  "luis-duarte": {
    name: "Luis Duarte", pronouns: "he/him", role: "Principal User Researcher", company: "PlayStation Studios", image: "luis-duarte-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/lmduarte" },
    about: "Luis Duarte is a Principal User Researcher at Sony Interactive Entertainment leading the Research Strategy for Japan / Asia, working on titles such as Astro Bot and Marvel Tokon Fighting Souls.",
    summary: "This talk explores how user research supported MARVEL Tokon Fighting Souls from concept to beta, shaping strategy, testing, and in creating strong ties with the Fighting Game Community.",
    talk: "Insights Assemble: The Research Strategy Behind Marvel Tōkon: Fighting Souls", date: "Tue, 13 Oct", time: "11:15 – 11:45 A.M."
  },
  "michelle-choi": {
    name: "Michelle Choi", pronouns: "she/her", role: "Principal UI/UX Artist", company: "PlayStation Studios", image: "michelle-choi-2026.png",
    socials: { instagram: "https://www.instagram.com/hey_choizilla/", linkedin: "https://linkedin.com/in/choizilla" },
    about: "Michelle Choi is the Principal UI/UX Artist at Playstation Creative Arts who primarily focuses on the design of in-game interfaces.",
    summary: "This talk covers the creation of the stylish UI and visual direction for Arc System Works' latest fighting game title, Marvel Tōkon: Fighting Souls.",
    talk: "Crafting UI for Marvel Tōkon: Fighting Souls", date: "Mon, 12 Oct", time: "4:35 – 5:05 P.M."
  },
  "fabiana-mascolo": {
    name: "Fabiana Mascolo", pronouns: "she/her", role: "Senior UI/UX Designer", company: "Fenris Creations (CCP Games)", image: "fabiana-mascolo-2026.png",
    socials: { instagram: "https://www.instagram.com/bibidoodles/?hl=en", linkedin: "https://www.linkedin.com/in/fabiana-mascolo/?locale=en" },
    about: "Fabiana Mascolo is a Senior UI/UX Designer at Fenris Creations (CCP Games), specializing in creating intuitive UX for complex game systems through player-centered design.",
    summary: "How do you turn player feedback into better products? A case study of how user research transformed EVE Online's map, turning UX debt into player-centred design and higher adoption. Discover how listening to players can reshape product priorities and inspire better design decisions.",
    talk: "Turning Feedback into Features – How UX Shaped EVE Online’s New Map from Discovery to Delivery", date: "Tue, 13 Oct", time: "1:45 – 2:15 P.M."
  },
  "charlotte-couderc": {
    name: "Charlotte Couderc", pronouns: "she", role: "Senior UI Artist", company: "CD Projekt Red", image: "charlotte-couderc-2026.png",
    socials: { instagram: "https://www.instagram.com/charlotte.couderc/", linkedin: "https://www.linkedin.com/in/charlotte-couderc-93a4b080/" },
    about: "UI Artist with 10 years of experience in the video game industry, type enthusiast passionate about graphic design, typography, and data analysis. Creator of Game Font Library.",
    summary: "A data-driven deep dive into video game typography, localization, inclusion, and diversity, exploring how modern games are losing typographic identity and visual diversity.",
    talk: "Typography in Video Games", date: "Tue, 13 Oct", time: "11:50 A.M. – 12:15 P.M."
  },
  "greg-haynes": {
    name: "Greg Haynes", pronouns: "he/him", role: "Principal UI/UX Artist", company: "PlayStation Studios", image: "greg-haynes-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/gregoryjhaynes/" },
    about: "Greg Haynes is a Senior Accessibility Researcher with the PlayStation Studios Research team. His focus is on scalable inclusive design, accessibility strategy, and cross-disciplinary development frameworks.",
    summary: "A practical exploration of operationalizing accessibility in game development through a shared-language framework, accessibility goals, prioritization, and cross-disciplinary collaboration.",
    talk: "Scaling Accessibility Through Shared Language", date: "Tue, 13 Oct", time: "4:15 – 4:45 P.M."
  },
  "stefan-marcus-baier": {
    name: "Stefan Marcus Baier", pronouns: "he/him", role: "Co-Founder, Director of Development", company: "Streamline Studios", image: "stefan-marcus-baier-2026.png",
    socials: { linkedin: "https://my.linkedin.com/in/stefanbaier" },
    about: "Stefan Baier is Co-Founder and Director of Development at Streamline Studios. For over 25 years, he has led multidisciplinary teams creating original and licensed games for global audiences.",
    summary: "Players don't play the game you designed—they play the game they expect. Discover how player research transformed the UX of Upin & Ipin Universe for six distinct audiences.",
    talk: "One Game, Six Audiences: Evolving the UX of Upin & Ipin Universe", date: "Tue, 13 Oct", time: "2:20 – 2:50 P.M."
  },
  "andrew-james": {
    name: "Andrew James", pronouns: "he/him", role: "Publishing & Release Manager", company: "Streamline Studios", image: "andrew-james-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/andrew-james-9548ab180/" },
    about: "Andrew James is the Publishing & Release Manager at Streamline Studios, leading end-to-end releases across console and PC. He most recently led the global multi-platform launch of Upin & Ipin Universe across PS4, PS5, Nintendo Switch, Steam, and Epic Games Store and is credited on over 20 titles, including Street Fighter 6, Armored Core VI, and Bayonetta 3.",
    summary: "Players don't play the game you designed—they play the game they expect. Discover how player research transformed the UX of Upin & Ipin Universe for six distinct audiences.",
    talk: "One Game, Six Audiences: Evolving the UX of Upin & Ipin Universe", date: "Tue, 13 Oct", time: "2:20 – 2:50 P.M."
  },
  "xingyu-zhang": {
    name: "Xingyu Zhang", pronouns: "he/him", role: "Game UX Researcher", company: "Tencent", image: "xingyu-zhang-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/kosmosxingyuzhang" },
    about: "Game UX Researcher at Tencent Games (Market & User Research), with years of experience across diverse genres, platforms, and global UX research projects.",
    summary: "Firsthand methods and cases from UX research at Tencent Games, covering mobile combat UI, early-game retention, and the evolving scope of game UX.",
    talk: "Field Notes: UX Research Methods and Cases in Chinese Mobile Games", date: "Tue, 13 Oct", time: "5:00 – 5:30 P.M."
  },
  "fan-yi": {
    name: "Fan Yi", pronouns: "she/her", role: "Game UX Researcher", company: "Tencent", image: "fan-yi-2026.png",
    socials: { linkedin: "https://www.linkedin.com/in/fan-yi-b286b0212/" },
    about: "6+ years of game UX research experience, with deep expertise in uncovering player mental models, core motivations, and behavioral patterns. Research scope spans daily gaming habits, new player onboarding experiences, and UX research & optimization for live-service game systems.",
    summary: "Firsthand methods and cases from UX research at Tencent Games, covering mobile combat UI, early-game retention, and the evolving scope of game UX.",
    talk: "Field Notes: UX Research Methods and Cases in Chinese Mobile Games", date: "Tue, 13 Oct", time: "5:00 – 5:30 P.M."
  },
  "keynote-evva-karr": {
    name: "Evva Karr", pronouns: "they/them", role: "CEO & Founder", company: "Glitch", image: "../keynote-evva-karr-2026.png",
    hideSession: true,
    socials: { linkedin: "https://www.linkedin.com/in/evvakarr/" },
    linkedinIcon: "images/keynote-linkedin.svg",
    about: "Evva Karr is a game developer and ecosystem builder who works at the intersection of creativity, business, and community.\n\nMost recently, Karr co-founded and now leads GLITCH as CEO, building a framework to back the next generation of game developers: funding startup studios through the Moonrise Fund, awarding early-stage grants through Galaxy Grants, and hosting Future of Play Direct, a global showcase reaching more than 5 million players.\n\nAcross 15 years in the games industry, at Activision Blizzard Media, Riot Games, Disney, and PBS, Karr has learned that great games succeed not because they're technically impressive, but because players trust them and make them part of their lives. Shipping HyperDot, a Game Awards Innovation in Accessibility nominee with 1.2 million downloads worldwide, made that clear firsthand.\n\nKarr is focused on building worlds and backing studios where the creative ambition is real, the business complexity is high, and the potential to reshape who gets to make games — and belong in them — is significant.",
    summary: "The keynote summary will be announced soon.",
    sessionLabel: "The Keynote",
    talk: "Keynote title to be announced", date: "Mon, 12 Oct", time: "5:10 – 6:10 P.M."
  },
  "keynote-shafiq-husein": {
    name: "Shafiq Husein", pronouns: "he/him", role: "CEO of Gambir Studio & President", company: "Asosiasi Game Indonesia (AGI)", image: "../keynote-shafiq-husein-2026.png",
    hideSession: true,
    socials: { linkedin: "https://www.linkedin.com/in/shafiqhusein/" },
    linkedinIcon: "images/keynote-linkedin.svg",
    about: "Shafiq Husein, CEO of the award-winning Gambir Studio and President of the Indonesian Game Association (AGI).\n\nAt Gambir Studio, Shafiq drives the development of original titles that fuse local culture with global appeal. Through AGI, he champions the growth of Indonesia’s gaming ecosystem and its presence on the world stage. “Authenticity, resilience, and collaboration guide everything I do,” he says, reflecting a philosophy that keeps his ventures meaningful and community-driven.\n\nSince founding Gambir Studio, Shafiq has led the company to national recognition, earning honours such as Google Play’s Best Indie Game in 2021 and The Lazy Game Awards’ Best Indonesian Developer in 2021 and 2024. Under his leadership, the studio has launched dozens of local titles and is now developing its flagship game for the international market.",
    summary: "The keynote summary will be announced soon.",
    sessionLabel: "The Keynote",
    talk: "Opening keynote title to be announced", date: "Tue, 13 Oct", time: "9:30 – 10:00 A.M."
  },
  "keynote-fred-markus": {
    name: "Frederic Markus", pronouns: "he/him", role: "President", company: "Feerik Games", image: "../keynote-fred-markus-2026.png",
    hideSession: true,
    socials: { linkedin: "https://www.linkedin.com/in/frederic-markus-a3a459/" },
    linkedinIcon: "images/keynote-linkedin.svg",
    about: "Frederic Markus is a game designer, creative director, producer and programmer with more than 35 years of experience in the video game industry. He has held senior positions at Ubisoft, Disney Interactive, LucasArts and Epic Games, working on game design, pre-production, team management and mentoring. His credits include Fortnite, Star Wars 1313, Epic Mickey, Red Dead Revolver, Midnight Club, Smuggler’s Run, Midtown Madness and more.\n\nEarlier in his career, he worked closely with Nintendo Japan and was trained by Shigeki Yamashiro from Shigeru Miyamoto’s EAD team. He also helped start Ubisoft’s console department and worked on the beginnings of Rayman. Since 2015, he has been President of Feerik Games, developing and operating live service mobile and web games, with PC and console projects in development.",
    summary: "The keynote summary will be announced soon.",
    sessionLabel: "The Keynote",
    talk: "Keynote title to be announced", date: "Tue, 13 Oct", time: "5:35 – 6:35 P.M."
  }
};

function escapeSpeakerHtml(value) {
  return String(value).replace(/[&<>"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"
  })[character]);
}

function speakerSocialsTemplate(speaker) {
  if (!speaker.socials) {
    return `<img src="images/speaker-instagram.svg" alt="" aria-hidden="true">
      <img src="images/speaker-linkedin.svg" alt="" aria-hidden="true">
      <img src="images/speaker-twitter.svg" alt="" aria-hidden="true">
      <small>Links coming soon</small>`;
  }

  const socialLinks = [];
  const linkedinIcon = speaker.linkedinIcon || "images/speaker-linkedin.svg";
  if (speaker.socials.instagram) {
    socialLinks.push(`<a href="${escapeSpeakerHtml(speaker.socials.instagram)}" target="_blank" rel="noopener" aria-label="${escapeSpeakerHtml(speaker.name)} on Instagram"><img src="images/speaker-instagram.svg" alt="" aria-hidden="true"></a>`);
  }
  if (speaker.socials.x) {
    socialLinks.push(`<a href="${escapeSpeakerHtml(speaker.socials.x)}" target="_blank" rel="noopener" aria-label="${escapeSpeakerHtml(speaker.name)} on X"><img src="images/speaker-twitter.svg" alt="" aria-hidden="true"></a>`);
  }
  if (speaker.socials.linkedin) {
    socialLinks.push(`<a href="${escapeSpeakerHtml(speaker.socials.linkedin)}" target="_blank" rel="noopener" aria-label="${escapeSpeakerHtml(speaker.name)} on LinkedIn"><img src="${escapeSpeakerHtml(linkedinIcon)}" alt="" aria-hidden="true"></a>`);
  }
  return socialLinks.join("");
}

function speakerAboutTemplate(speaker) {
  return (speaker.about || SPEAKER_PAGE_PLACEHOLDER)
    .split(/\n\n+/)
    .map((paragraph) => `<p>${escapeSpeakerHtml(paragraph)}</p>`)
    .join("");
}

function speakerSummaryTemplate(speaker) {
  return (speaker.summary || SPEAKER_SUMMARY_PLACEHOLDER)
    .split(/\n\n+/)
    .map((paragraph) => `<p>${escapeSpeakerHtml(paragraph)}</p>`)
    .join("");
}

function speakerPageTemplate(speaker, speakerId) {
  const isKeynote = speakerId.startsWith("keynote-");
  const keynoteCurrent = isKeynote ? ' aria-current="page"' : "";
  const speakersCurrent = isKeynote ? "" : ' aria-current="page"';
  const company = speaker.company ? `<br><span class="speaker-profile-company">${escapeSpeakerHtml(speaker.company)}</span>` : "";
  const sessionLabel = speaker.sessionLabel || "The Talk";
  const socialLinks = speaker.hideSocials ? "" : `<div class="speaker-profile-socials" aria-label="${escapeSpeakerHtml(speaker.name)} social links">${speakerSocialsTemplate(speaker)}</div>`;
  const sessionSection = speaker.hideSession ? "" : `
            <div class="speaker-profile-talk">
              <p class="speaker-profile-eyebrow">${escapeSpeakerHtml(sessionLabel)}</p>
              <h2>${escapeSpeakerHtml(speaker.talk || "Session details will be announced soon")}</h2>
              <div class="speaker-profile-meta" aria-label="Session details">
                <div><span class="bullet-arrow" aria-hidden="true"></span><p><strong>${escapeSpeakerHtml(speaker.date || "Date TBA")}</strong><small>Date</small></p></div>
                <div><span class="bullet-arrow" aria-hidden="true"></span><p><strong>${escapeSpeakerHtml(speaker.time || "Time TBA")}</strong><small>Time</small></p></div>
              </div>
              <div class="speaker-profile-summary"><h3>Summary</h3>${speakerSummaryTemplate(speaker)}</div>
            </div>`;
  return `
    <header class="topbar nav-glass">
      <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle><span></span><span></span><span></span></button>
      <nav class="main-nav label-1" aria-label="Main navigation" data-nav>
        <a href="index.html#home">Home</a><a href="index.html#tickets">Ticket Pricing</a><a href="program.html">Schedule</a>
        <a href="index.html#keynote"${keynoteCurrent}>Keynote</a><a href="speakers.html"${speakersCurrent}>Speakers</a><a href="index.html#masterclasses">Masterclass</a><a href="venue.html">The Venue</a>
        <a class="nav-code-of-conduct" href="https://docs.google.com/document/d/1-7y74X6447_YUxSULtUTXp0sF3fZIB0uYlkNgwn9JMs/edit?tab=t.0" target="_blank" rel="noopener">Code of Conduct</a>
      </nav>
      <p class="event-date label-1"><span>OCTOBER 12-14, 2026</span><span class="event-date-separator" aria-hidden="true"> | </span><span>CCEC, KUALA LUMPUR</span></p>
      <a class="ticket-button label-1" href="https://luma.com/3c4l7tek" target="_blank" rel="noopener"><span>Get Tickets</span><img class="cta-arrow" src="images/arrow-up.svg" alt="" aria-hidden="true"></a>
    </header>
    <main class="speaker-profile-main">
      <section class="speaker-profile-section">
        <div class="page-wrap speaker-profile-layout">
          <img class="speaker-profile-photo" src="images/speakers/${escapeSpeakerHtml(speaker.image)}" alt="${escapeSpeakerHtml(speaker.name)}">
          <div class="speaker-profile-content">
            <div class="speaker-profile-about">
              <h1>About</h1>
              ${speakerAboutTemplate(speaker)}
              <div class="speaker-profile-identity">
                <p class="speaker-profile-name">${escapeSpeakerHtml(speaker.name)} <em>(${escapeSpeakerHtml(speaker.pronouns)})</em></p>
                <p>${escapeSpeakerHtml(speaker.role)}${company}</p>
                ${socialLinks}
              </div>
            </div>
            ${sessionSection}
          </div>
        </div>
      </section>
    </main>
    <div class="speaker-profile-footer-band"><div class="page-wrap"><footer class="site-footer">
      <img class="footer-logo" src="images/footer-un-logo.png" alt="Game UX Summit"><p>© 2026 Game UX Summit • 1st professional UX event dedicated to the video game industry</p>
      <div class="social-links" aria-label="Social links"><a href="https://www.instagram.com/gameuxsummit26/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg></a><a href="https://www.linkedin.com/company/game-ux-summit/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h4v12H4z"></path><path d="M6 6.7a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2z"></path><path d="M10 8h3.8v1.7c.7-1.1 1.9-2 3.9-2 3.2 0 4.3 2.1 4.3 5.5V20h-4v-6.2c0-1.5-.5-2.5-1.8-2.5-1.5 0-2.2 1.1-2.2 3V20h-4z"></path></svg></a><a href="https://bsky.app/profile/gameuxsummit.com" target="_blank" rel="noopener" aria-label="Bluesky"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12.7C9.4 8.7 5.1 4.9 2.8 6.7.6 8.4 5 14.5 8.3 15.6c-3 .7-5.5 3.1-3.7 5.1 1.9 2.1 5.4-.8 7.4-3.8 2 3 5.5 5.9 7.4 3.8 1.8-2-0.7-4.4-3.7-5.1 3.3-1.1 7.7-7.2 5.5-8.9-2.3-1.8-6.6 2-9.2 6z"></path></svg></a></div>
    </footer></div></div>`;
}

let speakerPageRoot = document.querySelector("[data-speaker-page]");
if (!speakerPageRoot && document.body.dataset.speakerId) {
  document.body.innerHTML = '<div data-speaker-page></div>';
  speakerPageRoot = document.querySelector("[data-speaker-page]");
}
if (speakerPageRoot) {
  const speakerId = document.body.dataset.speakerId;
  const speaker = speakerPages[speakerId];
  if (speaker) {
    document.title = `${speaker.name} | Game UX Summit 2026`;
    speakerPageRoot.innerHTML = speakerPageTemplate(speaker, speakerId);
  }
}
