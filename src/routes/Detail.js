import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  if (loading) {
    return "loading";
  }
  if (data && data.movie) {
    return <h1>{data.movie.title}</h1>;
  }
};

export default Detail;
