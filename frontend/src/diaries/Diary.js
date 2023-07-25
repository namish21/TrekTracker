import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPostDetails } from "../api-helpers/helpers";
import PlaceIcon from "@mui/icons-material/Place";

const Diary = () => {
  const id = useParams().id;

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    date: "",
    name: "",
  });

  const [post, setPost] = useState();

  useEffect(() => {
    getPostDetails(id)
      .then((data) => {
        setPost(data.post);
        setInputs({
          title: data.post.title,
          description: data.post.description,
          imageUrl: data.post.image,
          location: data.post.location,
          date: new Date(`${data.post.date}`).toLocaleDateString(),
          name: data.post.user.name,
        });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    //    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
    // 	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
    // 		<img src = {inputs.imageUrl} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
    // 		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
    // 			<div className="space-y-2">
    // 				<h1 className="inline-block text-3xl text-zinc-50 font-semibold sm:text-3xl"> { inputs.title } </h1>
    // 				<p className="text-xs dark:text-gray-400">By
    // 					<div className="text-xs hover:underline"> {inputs.name} </div>
    // 				</p>
    // 			</div>
    // 			<div className="dark:text-gray-100">
    // 				<p> { inputs.description } </p>
    // 			</div>
    // 		</div>
    // 	</div>
    //     </div>

    <article className="py-18 mx-auto mb-10 space-y-12 dark:bg-gray-800 dark:text-gray-50">

    <img src = {inputs.imageUrl} alt="" className="w-8/12 mx-auto my-4 h-60 sm:h-96 dark:bg-gray-500" />
    <div className="max-w-3xl px-3 w-full mx-auto " >
    <div className="text-center">
        <h1 className="text-4xl font-bold leadi md:text-5xl">
        { inputs.title } 
        </h1>
        <p className="text-sm text-gray-600 mt-2 text-end mb-2">
            <p> {inputs.name} on <time datetime="2021-02-12 15:34:18-0200"> {inputs.date} </time> </p>
            <div className="mt-1 justify-self-start hover:justify-self-end" > {inputs.location}   <PlaceIcon/>  </div>
            
        </p>
      </div>
      <hr></hr>
      <div className="dark:text-gray-100 pb-4 mb-10 ">
        <p> {inputs.description}  </p>
    </div>
        
    </div>


    </article>

  );
};

export default Diary;
