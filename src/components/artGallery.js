import * as React from "react"
import { useEffect, useState } from 'react'

import "./artGallery.css"
import { ArtGalleryCard } from "./artGalleryCard";

export default function ArtGallery({ products = [] }){
  const [offsetY, setoffsetY] = useState(0);

  // Speed setting for each column
  const speedOne = -0.1;
  const speedTwo = 0.02;
  const speedThree = -0.25;
  const speedFour = 0.07;

  useEffect(() => {
     const handleScroll = () => setoffsetY(window.pageYOffset);

     window.addEventListener('scroll', handleScroll);

     return function cleanupListener() {
        window.removeEventListener('scroll', handleScroll)
      }
  }, []);



  

  return(
    <div className="outFrame">
      <div className="parFrame">
        <div className="par-col1" style={{transform: `translateY(${offsetY * speedOne}px)`}}>

          <div className="parCard par-zero">
            <ArtGalleryCard image="https://ucarecdn.com/2fcdd8ad-d6cb-47a6-8b9a-53aed1d19d10/61437780432__E8A1D934308E485FA831F85C102674BD.jpeg" eager={true} />
          </div>
          
           <div className="parCard par-one">
          <ArtGalleryCard image="https://ucarecdn.com/6046adf3-3705-4d09-a98c-010b32463de0/IMG_4718.jpeg" eager={false} />          </div>

          <div className="parCard par-two">
            <ArtGalleryCard image="https://ucarecdn.com/28b0bd81-50f8-4dde-b7d3-6c5affff8fd0/IMG_7590.jpeg" eager={false} />
          </div>

          <div className="parCard par-three">
          <ArtGalleryCard image="https://ucarecdn.com/99992717-6cf0-430e-8da9-1c35418882da/63149364798__5609E40EE329453A83C7295158C99A65.jpeg" eager={false} />
          </div>

          <div className="parCard par-four">
          <ArtGalleryCard image="https://ucarecdn.com/7ba1718f-e6aa-4940-ab98-e207056ece19/IMG_7586.jpeg" eager={false} />
          </div>

        </div>

   <div className="par-col2" style={{transform: `translateY(${offsetY * speedTwo}px)`}}>
          <div className="parCard par-five">
          <ArtGalleryCard image="https://ucarecdn.com/0cf47a9f-4581-40e7-8c68-17db759591da/IMG_4712.jpeg" eager={true} />
          </div>

          <div className="parCard par-six">
          <ArtGalleryCard image="https://ucarecdn.com/a6152be7-d8e6-4dda-9ad3-9b299393f729/IMG_7587.jpeg" eager={false} />
          </div>

          <div className="parCard par-seven">
          <ArtGalleryCard image="https://ucarecdn.com/8d3c828e-1bc8-446b-b444-9ce703a4f4f1/IMG_4713.jpeg" eager={false} />
          </div>

          <div className="parCard par-eight">
          <ArtGalleryCard image="https://ucarecdn.com/94e6195f-fcf4-4d93-a443-76ed0e96c967/IMG_6750.jpeg" eager={false} />
          </div> 

        </div>
   
        <div className="par-col3" style={{transform: `translateY(${offsetY * speedThree}px)`}}>
          <div className="parCard par-nine">
          <ArtGalleryCard image="https://ucarecdn.com/c8096a88-4f5c-44d5-9a22-65d6189d4ee4/IMG_7591.jpeg" eager={true} />
          </div>

          <div className="parCard par-ten">
          <ArtGalleryCard image="https://ucarecdn.com/9d205833-5e42-4cba-af26-af9800f7b30f/IMG_4717.jpeg" eager={false} />
          </div>

          <div className="parCard par-eleven">
          <ArtGalleryCard image="https://ucarecdn.com/e3d1f2e1-8fca-438f-9e47-15caa9c14535/IMG_4715.jpeg" eager={false} />
          </div>

          <div className="parCard par-twelve">
          <ArtGalleryCard image="https://ucarecdn.com/ced9bc4c-e4cd-4258-8c10-ee1554ce9e74/IMG_7263.jpeg" eager={false} />
          </div>

          <div className="parCard par-thirteen">
          <ArtGalleryCard image="https://ucarecdn.com/dd41a402-52ed-417d-a1e7-790f4c1a4ca6/IMG_4714.jpeg" eager={false} />
          </div>
        </div>

        <div className="par-col4" style={{transform: `translateY(${offsetY * speedFour}px)`}}>
          <div className="parCard par-fourteen">
          <ArtGalleryCard image="https://ucarecdn.com/a282516f-0127-4b37-9986-04212bd2ea3f/IMG_7589.jpeg" eager={true} />
          </div>

          <div className="parCard par-fifteen">
          <ArtGalleryCard image="https://ucarecdn.com/703c25a5-1d2e-41b8-90c0-975c6a6d64f7/IMG_7588.jpeg" eager={false} />
          </div>

          <div className="parCard par-sixteen">
          <ArtGalleryCard image="https://ucarecdn.com/87d701df-707b-4a5d-9dc1-3b51ae986f05/IMG_2337.jpeg" eager={false} />
          </div>

          <div className="parCard par-seventeen">
          <ArtGalleryCard image="https://ucarecdn.com/4d6cf478-2580-4d0e-85b6-dd4a4b8617ee/IMG_4709.jpeg" eager={false} />
          </div>
        </div>
      </div>

  </div>
  )
}
// SHOPIFY MODE
// export function ArtGallery({ products = [] }){
//   const [offsetY, setoffsetY] = useState(0);

//   // Speed setting for each column
//   const speedOne = -0.1;
//   const speedTwo = 0.02;
//   const speedThree = -0.25;
//   const speedFour = 0.07;

//   useEffect(() => {
//      const handleScroll = () => setoffsetY(window.pageYOffset);

//      window.addEventListener('scroll', handleScroll);

//      return function cleanupListener() {
//         window.removeEventListener('scroll', handleScroll)
//       }
//   }, []);

//   return(
//     <div className="outFrame">
//       <div className="parFrame">
//         <div className="par-col1" style={{transform: `translateY(${offsetY * speedOne}px)`}}>
//           <div className="parCard par-zero">
//             <ArtGalleryCard product={products[0]} key={products[0].id} eager={true} />
//           </div>
          
//           <div className="parCard par-one">
//             <ArtGalleryCard product={products[1]} key={products[1].id} eager={false} />
//           </div>

//           <div className="parCard par-two">
//             <ArtGalleryCard product={products[2]} key={products[2].id} eager={false} />
//           </div>

//           <div className="parCard par-three">
//             <ArtGalleryCard product={products[3]} key={products[3].id} eager={false} />
//           </div>

//           <div className="parCard par-four">
//             <ArtGalleryCard product={products[4]} key={products[4].id} eager={false} />
//           </div>

//         </div>

//         <div className="par-col2" style={{transform: `translateY(${offsetY * speedTwo}px)`}}>
//           <div className="parCard par-five">
//             <ArtGalleryCard product={products[5]} key={products[5].id} eager={false} />
//           </div>

//           <div className="parCard par-six">
//             <ArtGalleryCard product={products[6]} key={products[6].id} eager={false} />
//           </div>

//           <div className="parCard par-seven">
//             <ArtGalleryCard product={products[7]} key={products[7].id} eager={false} />
//           </div>

//           <div className="parCard par-eight">
//             <ArtGalleryCard product={products[8]} key={products[8].id} eager={false} />
//           </div> 

//         </div>

//         <div className="par-col3" style={{transform: `translateY(${offsetY * speedThree}px)`}}>
//           <div className="parCard par-nine">
//             <ArtGalleryCard product={products[9]} key={products[9].id} eager={false} />
//           </div>

//           <div className="parCard par-ten">
//             <ArtGalleryCard product={products[10]} key={products[10].id} eager={false} />
//           </div>

//           <div className="parCard par-eleven">
//             <ArtGalleryCard product={products[11]} key={products[11].id} eager={false} />
//           </div>

//           <div className="parCard par-twelve">
//             <ArtGalleryCard product={products[12]} key={products[12].id} eager={false} />
//           </div>

//           <div className="parCard par-thirteen">
//             <ArtGalleryCard product={products[13]} key={products[13].id} eager={false} />
//           </div>
//         </div>

//         <div className="par-col4" style={{transform: `translateY(${offsetY * speedFour}px)`}}>
//           <div className="parCard par-fourteen">
//             <ArtGalleryCard product={products[14]} key={products[14].id} eager={false} />
//           </div>

//           <div className="parCard par-fifteen">
//             <ArtGalleryCard product={products[15]} key={products[15].id} eager={false} />
//           </div>

//           <div className="parCard par-sixteen">
//             <ArtGalleryCard product={products[16]} key={products[16].id} eager={false} />
//           </div>

//           <div className="parCard par-seventeen">
//             <ArtGalleryCard product={products[17]} key={products[17].id} eager={false} />
//           </div>
//         </div>
//       </div>

//   </div>
//   )



// }