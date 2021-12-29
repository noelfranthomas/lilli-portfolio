import * as React from "react"
import { Link } from "gatsby"
import { useEffect } from "react"

// SHOPIFY MODE
// import { getShopifyImage } from "gatsby-source-shopify"

import "./artGallery.css"


export function ArtGalleryCard({image, eager }) {

  useEffect(() => {
    (function(src, cb) {
      var s = document.createElement('script'); s.setAttribute('src', src);
      s.onload = cb; (document.head || document.body).appendChild(s);
    })('https://ucarecdn.com/libs/blinkloader/3.x/blinkloader.min.js', function() {
      window.Blinkloader.optimize({
        pubkey:'c249ebd45dcd4fd41737',
        fadeIn:true,
        lazyload:true,
        smartCompression:true,
        responsive:true,
        retina:true,
        webp:true
      });
    })
  }, [])


  return (
    <Link
      to="/products/"
      aria-label={`View`}
    >
      <div className="crosshair">
        <img data-blink-src={image} style={{objectFit:"cover", backgroundColor: "white"}} loading={eager ? "eager" : "lazy"}/>
      </div>
    </Link>
  )
}

// SHOPIFY MODE
// export function ArtGalleryCard({ product, eager }) {
//   const {
//     title,
//     slug,
//     images: [firstImage],
//     storefrontImages,
//   } = product

//   const defaultImageHeight = 500
//   const defaultImageWidth = 500
//   let storefrontImageData = {}
//   if (storefrontImages) {
//     const storefrontImage = storefrontImages.edges[0].node
//     try {
//       storefrontImageData = getShopifyImage({
//         image: storefrontImage,
//         layout: "fixed",
//         width: defaultImageWidth,
//         height: defaultImageHeight,
//       })
//     } catch (e) {
//       console.error(e)
//     }
//   }

//   const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length

//   return (
//     <Link
//       to={slug}
//       aria-label={`View ${title} product page`}
//     >
//       {hasImage
//         ? (
//           <div className="crosshair">
//             <GatsbyImage
//               alt={firstImage?.altText ?? title}
//               image={firstImage?.gatsbyImageData ?? storefrontImageData}
//               loading={eager ? "eager" : "lazy"}
//             />
//           </div>
//         ) : (
//           <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
//         )
//       }
//     </Link>
//   )
// }

// export const query = graphql`
//   fragment ProductCard on ShopifyProduct {
//     id
//     title
//     slug: gatsbyPath(
//       filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
//     )
//     images {
//       id
//       altText
//       gatsbyImageData(aspectRatio: 1, width: 640)
//     }
//     priceRangeV2 {
//       minVariantPrice {
//         amount
//         currencyCode
//       }
//     }
//     vendor
//   }
// `
