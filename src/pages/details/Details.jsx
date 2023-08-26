import React from "react";
import "./Details.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./detailsBanner/videoSection/VideoSection";
import Similar from "./caroussels/Similiar";
import Recommendation from "./caroussels/Recomendations";
const Details = () => {


const { mediaType, id } = useParams();
const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
const { data:credits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);


  return <div>
    <DetailsBanner video={data?.results?.[0]} crew = {credits?.crew}/>
    <Cast data={credits?.cast} loading={creditsLoading} />
    <VideosSection data={data} loading={loading
    }/>
    <Similar mediaType={mediaType
    } id={id}/>
    <Recommendation mediaType={mediaType} id={id}/>
  </div>;
};

export default Details;
