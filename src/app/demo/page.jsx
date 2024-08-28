"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const page = () => {
  const { data: faqs, isLoading } = useQuery({
    queryKey: ["faqs"],
    queryFn: () =>
      //   fetch(`http://192.168.11.110:8000/api/faqs`).then((res) => res.json()),

      axios.get(`${apiBaseUrl}/faqs`).then(function (response) {
        // handle success
        console.log(response);
      }),
  });

  console.log(faqs);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>This is page component</h1>
    </div>
  );
};

export default page;
