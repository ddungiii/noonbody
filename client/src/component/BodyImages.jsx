import React, { useEffect, useState } from 'react';
import "./BodyImages.css"

const BobyImages = () => {
//   const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
//   const [dogs, setDogs] = useState([]);
//   const [breed, setBreed] = useState(breeds[0]);
//   const [likes, setLikes] = useState(0);
//   const [isLiked, setIsLiked] = useState([false, false, false, false, false]);

//   useEffect(() => {
//     fetch(`http://localhost:8000/breed/${breed}/image/random/5`)
//       .then(res => res.json())
//       .then(result => {
//         setDogs(result.message)
//       })
//   }, [breed]);

//   useEffect(() => {
//     setLikes(0);
//     setIsLiked([false, false, false, false, false]);
//   }, [dogs]);

//   const onClick = (currentIndex) => {
//     if (isLiked[currentIndex]) {
//       setIsLiked(
//         isLiked.map((like, index) =>
//           index === currentIndex ? false : like
//           )
//       )
//       setLikes(likes-1)
//     }
//     else{
//       setIsLiked(
//         isLiked.map((like, index) =>
//           index === currentIndex ? true : like
//           )
//       )
//       setLikes(likes+1)
//     }
//   } 

  return (
    <div>
      Hi
    </div>
  )
}

export default BobyImages;
