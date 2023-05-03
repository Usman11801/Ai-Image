import { useState, useEffect } from "react";

export function Test() {
  useEffect(() => {
    console.log("Working");
    // const Token = localStorage.getItem("token");
    const Token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMDg1NzgyLCJpYXQiOjE2ODMwODIxODIsImp0aSI6ImNlNGFkMDkxM2RiMjQ3ODQ5ZGQ1NTRkYTEwMWEwZjIzIiwidXNlcl9pZCI6NH0.ZGA3btrA4uEuX3f-bwrYneU8RimtdyPnW8gmVddh2eQ";
    console.log("tokentoken token:", Token);
    fetch("http://127.0.0.1:5000/api/gallery/images/", {
      headers: {
        Authorization: `Bearer ${Token}`,
        // "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // setGalleryData(data);
        console.log("galleryData,", data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>hi</h1>
      {/* Display the API data */}
      {/* {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))} */}
    </div>
  );
}
