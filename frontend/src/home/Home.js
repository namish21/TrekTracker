import {  Box , Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Home = () => {

  const isLoggedIn = useSelector( (state) => state.isLoggedIn );

  return (
    <Box position = {"relative"} width = "100%" height="90vh" >

      {/* <img src="/hiking.jpg" alt="Road" width={"100%"} height= "90%" />
      <Typography
        variant="h3"
        fontFamily={"Satisfy, cursive"}
        textAlign={"center"}
        width = "100%"
        sx ={{ position:"absolute",top: "0px" }}
      >
        Dare to live the life you have always wanted
      </Typography> */}
        

  <div className="carousel w-full h-90v">
  
  <div id="slide1" className="carousel-item relative w-full">
  <img src="https://images.unsplash.com/photo-1653101536266-1b776b4ca66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80" className="w-full" />
    <div class="absolute bottom-0 px-4 py-3 text-center w-full">
      <h1 class="text-white text-4xl pb-4 italic"> "A walk in the nature walks the soul back home"</h1>
      <p class="text-white italic">
        ~ Mary Davis
      </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src="https://images.unsplash.com/photo-1544558635-667480601430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80" className="w-full"  />
    <div class="absolute bottom-0 px-4 py-3 text-center w-full">
      <h1 class="text-white text-4xl pb-4 italic"> “Leave the road, take the trails.” </h1>
      <p class="text-white italic">
        ~ Pyhtagoras
      </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1530461215976-31923a646c83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80" className="w-full" />
    <div class="absolute bottom-0 px-4 py-3 text-center w-full">
      <h1 class="text-white text-4xl pb-4 italic"> “Cover the earth before it covers you.”</h1>
      <p class="text-white italic">
        ~ Dagur M.Drax
      </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>  
  </div>
  </div>  

    <div className="block max-w-sm gap-3 mx-28 mt-10 sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src="https://images.unsplash.com/photo-1636659638188-4999d56db1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" alt="demo" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl "> Rishabh Paul </h3>
				<span className="text-xs dark:text-gray-400">March 19, 2023</span>
				<p> A bird watcher's paradise, Tso Moriri witnesses a large flock of migratory birds. Cranes, geese, and grebe grace. Over 250 kilometers from Leh the Tso Moriri captures imaginations with its surreal beauty. Try to catch the mesmerizing reflection of the moon and the star-studded sky in the glistening lake. Believe me, it will be unlike anything you may have ever seen before. </p>
			</div>
		</div>

      <Box widht = "100%" height = "30%" display={"flex"} flexDirection="column" >
        <Box margin="auto"> 
        <Link className='pr-6' to = { isLoggedIn ? "/add" : "/auth" }>
        <button className="btn btn-wide">Share Your Story</button>
        </Link>
        <Link to="/diaries">
        <button className="btn btn-wide"> View diaries</button>
        </Link>
        </Box>
      </Box>
    </Box>
  )

}

export default Home