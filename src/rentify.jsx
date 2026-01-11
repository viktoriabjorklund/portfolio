import Navbar from './navbar';
import './App.css';
import DetailsNavbar from './details_navbar';
import NavbarBottom from './navbar_bottom';
import { useEffect, useRef, useState } from 'react';
import ProjectHeader from './project_header';


function Rentify() {
    return (
      <div>
        {/* Header bakgrund + nav */}
        <div className="bg-linear-to-b from-[#659FC9] to-white h-72">
          <DetailsNavbar />
        </div>
  
        {/* Content */}
        <div className="flex flex-col text-left ml-24 mr-24">
          {/* TOP: vänster text, höger bild */}
          <div className="flex flex-row items-start gap-12">
            {/* Vänster kolumn */}
            <div className="flex flex-col w-1/2 pr-8">
              <ProjectHeader
                title="rentify"
                description="A social web application where you can rent tools!"
              />
  
              <div className="mt-8">
                <p className="font-bold text-xl mb-2">description</p>
                <p>
                This fullstack application aimed to support users to rent tools of each others instead of
                always buying new ones that only collects dust. This solution is both environmentally and
                economical friendly as it supports collective usage of tools. A user can register, browse and 
                filter tools, upload ads of their own tools they wish to rent out, request to rent other people's tools
                and let other users rent their own tools. The project was conducted by me and 4 others, where I was mainly 
                responsible for the backend architecture and its implementation. 
                <p className='mb-6'></p>
                The database is hosted on <b>Neon</b> so all 
                users can access the shared data. In order to let users upload and fetch images, the image files are 
                handled via <b>Cloudinary</b>. The server runs in a <b>Docker image</b> which is hosted on <b>Render</b>. Lastly,
                the frontend is deployed on <b>Vercel</b>.

                </p>
              </div>
  
              <div className="mt-8">
                <p className="font-bold text-xl">tech stack</p>
                <p>Next.js, TailwindCSS, Express.js, Node.js, PostgreSQL + Prisma </p>
              </div>
  
              <div className="mt-8">
                <p className="font-bold text-xl mb-2">links</p>
                <p>
                    <div className='flex flex-col'>
                    <a
                        href="https://github.com/viktoriabjorklund/rentify"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4398D1" }}
                        className="underline mb-2"
                        >
                        GitHub repository
                    </a>

                    <a
                    href="https://hub.docker.com/repository/docker/viktoriabjorklund/rentify-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#4398D1" }}
                    className="underline"
                    >
                    Docker image
                    </a>
                    </div>
                </p>
              </div>

  
              <div className="mt-8">
                <p className="font-bold text-xl">duration</p>
                <p>08/2025 - 10/2025</p>
              </div>
            </div>
  
            {/* Höger kolumn: huvudbild */}
            <div className="flex w-1/2 justify-center">
              <img
                src="/assets/rentifyhome.png"
                className="w-[600px] 2xl:w-[800px] h-auto"
                alt="rentify home"
              />
            </div>
          </div>
  
          {/* BOTTOM: tre centrerade bilder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-36 place-items-center">
            <img src="assets/searchome.png" className="w-[650px] 2xl:w-[800px] h-auto" />
            <img src="assets/requests.png" className="w-[650px] 2xl:w-[800px] h-auto" />
            <img src="assets/yourads.png" className="w-[650px] 2xl:w-[800px] h-auto" />
            <img src="assets/book.png" className="w-[650px] 2xl:w-[800px] h-auto" />
          </div>


  
          {/* Bottom nav */}
          <NavbarBottom />
        </div>
      </div>
    );
  }
  

export default Rentify;
