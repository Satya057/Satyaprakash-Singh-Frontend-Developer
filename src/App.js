import React from 'react';
import './animation.css';

// Import images
import Picture2 from './images/Picture (2).png';
import Picture1 from './images/Picture (1).png';
import Picture4 from './images/Picture (4).png';
import Picture8 from './images/Picture (8).png';
import Picture11 from './images/Picture (11).png';
import Picture13 from './images/Picture (13).png';
import Picture12 from './images/Picture (12).png';
import Picture9 from './images/Picture (9).png';
import Picture14 from './images/Picture (14).png';
import Avatar from './images/avatar.png';
import Core from './images/Core.png';
import Img1 from './images/1-Picture.png';
import Img1_1 from './images/1-Picture-1.png';
import Img1_2 from './images/1-Picture-2.png';
import Img2 from './images/2-Picture.png';
import Img2_1 from './images/2-Picture-1.png';
import Img2_2 from './images/2-Picture-2.png';
import Img3 from './images/3-Picture.png';
import Img3_1 from './images/3-Picture-1.png';
import Img3_2 from './images/3-Picture-2.png';
import Img4 from './images/4-Picture.png';
import Img4_1 from './images/4-Picture-1.png';
import Img4_2 from './images/4-Picture-2.png';
import Img5 from './images/5-Picture.png';
import Img5_1 from './images/5-Picture-1.png';
import Img5_2 from './images/5-Picture-2.png';
import Img6 from './images/6-Picture.png';
import Img6_1 from './images/6-Picture-1.png';
import Img6_2 from './images/6-Picture-2.png';
import Img7 from './images/7-Picture.png';
import Img7_1 from './images/7-Picture-1.png';
import Img7_2 from './images/7-Picture-2.png';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="bg-black bg-opacity-20 border-b border-neutral-800 flex justify-between items-center py-4 right-56 absolute z-10 bg-dark-200 outfit sticky top-0">
        <a href="#" className="ml-16 mr-12 aigen text-xl font-medium text-light">AI.GEN</a>
        <nav className="flex justify-between items-center flex-grow">
          <ul className="flex gap-x-8">
            <a href="#features" className="text-base">Features</a>
            <a href="#roadmap" className="text-base">Roadmap</a>
            <a href="#tokenomics" className="text-base">Tokenomics</a>
          </ul>
          <div className="flex-grow"></div>
          <button className="h-12 ml-4 bg-gray-500 px-6 py-3 text-base font-medium rounded text-white">
            Whitepaper
          </button>
          <button className="h-12 mr-16 ml-4 px-6 py-3 styledbtn text-base font-medium rounded text-white">
            Get Started
          </button>
        </nav>
      </header>

      {/* SECTION-1 HOMEPAGE */}
      <section className="homepage w-3/4 ml-44 flex justify-between outfit">
        <div className="w-2/4">
          <div className="mt-24 flex border-1 border rounded-lg border-grey py-1.5 px-3 gap-2 w-80">
            <h5 className="text-base font-normal leading-6 text-left">🎉</h5>
            <h5 className="text-base font-normal leading-6 text-left">New in AI.GEN: Real Time Interaction</h5>
          </div>

          <div className="mt-16 text-4xl font-medium leading-14 text-left w-full">
            <h1>IOTA polygon serum ipsum</h1>
            <h1 className="text-light bg-opacity-50">WAX terraUSD gala THETA.</h1>
          </div>

          <div className="mt-6 font-outfit text-lg font-normal leading-10 text-left">
            <p>Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
          </div>

          <button className="mt-12 h-12 ml-0 px-6 py-3 styledbtn text-base font-medium rounded text-white">
            Get Started
          </button>
        </div>

        <div className="flex opacity-70">
          <div className="absolute right-1/4 scroll-up-fast">
            <img src={Picture2} alt="" />
            <img src={Picture1} alt="" />
            <img src={Picture4} alt="" />
          </div>
          <div className="absolute right-40 top-3">
            <img src={Picture8} alt="" />
            <img src={Picture11} alt="" />
            <img src={Picture13} alt="" />
          </div>
          <div className="absolute right-0 scroll-up-fast">
            <img src={Picture12} alt="" />
            <img src={Picture9} alt="" />
            <img src={Picture14} alt="" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - TEXT-ON-IMAGE */}
      <section className="text-on-img w-3/4 mx-auto mt-60 purple-bg flex justify-center items-center flex-col h-screen relative">
        <div className="flex relative align-center">
          <div className="image-container">
            <img src={Img1} alt="" />
            <img src={Img1_1} alt="" />
            <img src={Img1_2} alt="" />
          </div>
          <div className="image-container">
            <img src={Img2} alt="" />
            <img src={Img2_1} alt="" />
            <img src={Img2_2} alt="" />
          </div>
          <div className="image-container">
            <img src={Img3} alt="" />
            <img src={Img3_1} alt="" />
            <img src={Img3_2} alt="" />
          </div>
          <div className="image-container">
            <img src={Img4} alt="" />
            <img src={Img4_1} alt="" />
            <img src={Img4_2} alt="" />
          </div>
          <div className="image-container">
            <img src={Img5} alt="" />
            <img src={Img5_1} alt="" />
            <img src={Img5_2} alt="" />
          </div>
          <div className="image-container">
            <img src={Img6} alt="" />
            <img src={Img6_1} alt="" />
            <img src={Img6_2} alt="" />
          </div>
          <div className="image-container">
            <img src={Img7} alt="" />
            <img src={Img7_1} alt="" />
            <img src={Img7_2} alt="" />
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center text-center">
          <h1 className="text-white">
            <span>Create, customize, and publish </span><br />
            your digital persona to life effortlessly.
          </h1>
        </div>
      </section>

      {/* SECTION 3 - AVATAR */}
      <section id="features" className="avatar flex gap-x-8 items-center py-20 mb-95">
        <img src={Avatar} alt="Avatar" />
        <div className="text-center">
          <h1>How it works</h1>
          <h2>Select an Avatar</h2>
          <h2>Create or Generate Script</h2>
          <h2>Select AI Voices</h2>
          <h2>Publish</h2>
        </div>
      </section>

     {/* SECTION 4- SLIDER */}
     <section className="relative slider mb-20">
        <img className="absolute inset-2/4 top-0" src="images/Core.png" alt="" />

        <div className="flex left-to-right text-3xl pt-10 gap-x-6 w-max flex-wrap">
          <p className="px-4 py-3 gradient-bg-1 max-w-fit rounded-lg">Outfits</p>
          <p className="px-4 py-3 gradient-bg-1 max-w-fit rounded-lg">Avatar</p>
          <p className="px-4 py-3 gradient-bg-2 max-w-fit rounded-lg">Technology</p>
          <p className="px-4 py-3 gradient-bg-3 max-w-fit rounded-lg">Design</p>
          <p className="px-4 py-3 gradient-bg-8 max-w-fit rounded-lg">Artificial Intelligence</p>
          <p className="px-4 py-3 gradient-bg-5 max-w-fit rounded-lg">AI Chat Bot</p>
          <p className="px-4 py-3 gradient-bg-6 max-w-fit rounded-lg">Customizable</p>
          <p className="px-4 py-3 gradient-bg-7 max-w-fit rounded-lg">3D Model</p>
        </div>

        <img className="absolute top-15 left-1/4" src="images/video player.png" alt="" />
        <img className="absolute top-15 inset-3/4" src="images/Mic.png" alt="" />

        <div className="right-to-left flex text-3xl pt-10 gap-x-6 absolute top-20 right-5 w-max flex-wrap">
          <p className="px-4 pb-2 pt-3 gradient-bg-1 max-w-fit rounded-lg">Artificial Intelligence</p>
          <p className="px-4 pb-2 pt-3 gradient-bg-1 max-w-fit rounded-lg">People</p>
          <p className="px-4 pb-2 pt-3 gradient-bg-2 max-w-fit rounded-lg">Technology</p>
          <p className="px-4 pb-2 pt-3 gradient-bg-3 max-w-fit rounded-lg">Design</p>
          <p className="px-4 pb-2 pt-3 gradient-bg-4 max-w-fit rounded-lg">AI Chat Bot</p>
          <p className="px-4 pb-2 pt-3 gradient-bg-5 max-w-fit rounded-lg">Customizable</p>
          <p className="px-4 pb-2 pt-3 gradient-bg-6 max-w-fit rounded-lg">3D Model</p>
          <p className="px-4 pb-2 pt-3 gradient-bg-7 max-w-fit rounded-lg">Outfits</p>
        </div>
      </section>

      {/* SECTION-5 CARDS */}
      <section className="cards w-full py-10 mb-10">
        <div className="flex justify-between px-40 py-14 bg-dark-200 border rounded-lg border-neutral-800">
          {/* Card 1 */}
          <div className="w-80 bg-black bg-opacity-20 rounded-lg py-6 px-6">
            <img className="w-2/4" src="images/Rectangle 4.png" alt="" />
            <h4 className="pt-4">Title</h4>
            <p className="pt-4">Text1</p>
            <p className="pt-4">Text2</p>
            <p className="pt-4">Text3</p>
          </div>

          {/* Card 2 */}
          <div className="w-80 bg-black bg-opacity-20 rounded-lg py-6 px-6">
            <img className="w-2/4" src="images/Rectangle 4.png" alt="" />
            <h4 className="pt-4">Title</h4>
            <p className="pt-4">Text1</p>
            <p className="pt-4">Text2</p>
            <p className="pt-4">Text3</p>
          </div>

          {/* Card 3 */}
          <div className="w-80 bg-black bg-opacity-20 rounded-lg py-6 px-6">
            <img className="w-2/4" src="images/Rectangle 4.png" alt="" />
            <h4 className="pt-4">Title</h4>
            <p className="pt-4">Text1</p>
            <p className="pt-4">Text2</p>
            <p className="pt-4">Text3</p>
          </div>
        </div>
      </section>

      {/* SECTION-6 */}
      <section className="flex flex-col items-center justify-center text-center py-20 mb-10">
        <h2 className="mb-4">What is AI.GEN?</h2>
        <p className="w-2/4">
          AiGen allows you to create, customize, and publish your own digital persona in seconds using AI technology. With
          advanced features such as script generation, AI voice selection, and real-time interaction, AiGen is the ultimate
          tool for bringing your digital character to life. Explore the future of digital interaction with AiGen.
        </p>
      </section>

      {/* SECTION-7- FOOTER */}
      <footer className="footer flex justify-between bg-dark-200 text-light py-8 px-40">
        <div className="flex gap-4">
          <a href="#" className="text-light">Home</a>
          <a href="#features" className="text-light">Features</a>
          <a href="#roadmap" className="text-light">Roadmap</a>
          <a href="#tokenomics" className="text-light">Tokenomics</a>
        </div>
        <div>
          <p>&copy; 2024 AI.GEN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
