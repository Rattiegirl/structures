"use client";
import { useState, useEffect, useRef } from "react";
// import "@tensorflow/tfjs";
// import * as mobileNet from "@tensorflow-models/mobilenet";

import TagsContainer from "../components/TagsContainer";
import ProjectInfo from "@/components/ProjectInfo";
import Quail from "@/components/Quail";

const TagClassificationDemo = () => {
  // const [model, setModel] = useState(null);
  // const [predictions, setPredictions] = useState([]);
  // const [imageURL, setImageURl] = useState(null);
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const loadModel = async () => {
  //     const model = await mobileNet.load();
  //     setModel(model);
  //   };
  //   loadModel();
  // }, []);

  // const handleUploadChange = ({ target }) => {
  //   setImageURl(URL.createObjectURL(target.files[0]));
  // };

  // const drawImageOnCanvas = (image, canvas, ctx) => {
  //   const naturalWidth = image.naturalWidth;
  //   const naturalHeight = image.naturalHeight;
  //   canvas.width = image.width;
  //   canvas.height = image.height;

  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   const isLandscape = naturalWidth > naturalHeight;
  //   ctx.drawImage(
  //     image,
  //     isLandscape ? (naturalWidth - naturalHeight) / 2 : 0,
  //     isLandscape ? 0 : (naturalHeight - naturalWidth) / 2,
  //     isLandscape ? naturalHeight : naturalWidth,
  //     isLandscape ? naturalHeight : naturalWidth,
  //     0,
  //     0,
  //     ctx.canvas.width,
  //     ctx.canvas.height
  //   );
  // };

  // const onImageChange = async ({ target }) => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   drawImageOnCanvas(target, canvas, ctx);

  //   const predictions = await model.classify(canvas, 5);
  //   console.log(predictions);
  //   setPredictions(predictions);
  // };

  // const renderInput = () => (
  //   <input
  //     type="file"
  //     onChange={handleUploadChange}
  //     accept="image/x-png,image/gif,image/jpeg"
  //   />
  // );

  // const renderPreview = () => (
  //   <canvas className="classified-image" ref={canvasRef}>
  //     <img alt="preview" onLoad={onImageChange} src={imageURL} />
  //   </canvas>
  // );

  return (
    <div className="app">
        <div className="project-cards">
        <ProjectInfo title="Image Classification" img="/img/hen.jpg"/>
        <ProjectInfo title="Plants vs Animals" img="/img/rooster.jpg"/>
        <ProjectInfo title="Furniture" img="/img/picnic_table.jpg"/>
        <Quail title="Eggs" img="/img/quail_eggs.jpg"/>
          {/* {renderInput()}
          {imageURL && renderPreview()}
          {!!predictions.length && <TagsContainer predictions={predictions} />} */}
        </div>
        <div className="quail-cards">
        <Quail title="Eggs" img="/img/quail_eggs.jpg"/>
        </div>
    </div>
  );
};

export default TagClassificationDemo;
