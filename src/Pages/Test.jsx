import { useState, useEffect } from "react";

export function Test() {
  const [isLoading, setIsLoading] = useState(true);
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Working");
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (!token) {
      console.log("No token found in localStorage");
      return;
    }
    fetch("http://127.0.0.1:5000/api/gallery/images/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          //           throw new Error(HTTP error! status: ${response.status});
        }
        return response.json();
      })
      .then((data) => {
        console.log("galleryData:", data);
        setGalleryData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
            <h1>hi</h1>     {" "}
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
                   {" "}
          {galleryData.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
                 {" "}
        </div>
      )}
         {" "}
    </div>
  );
}
