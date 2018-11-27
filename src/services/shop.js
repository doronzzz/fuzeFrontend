// @ts-check

import { client } from './shopify-client';


/**
* @typedef ProductItem
* 
* @property {string|number} id
* @property {string} title
* @property {string} descriptionHtml
* @property {string} vendor
* @property {string[]} tags
* @property {string[]} images
* @property {string} price
*/



/**
* @param {object} graphModel 
* @returns ProductItem
*/
function sanitizeModel (graphModel) {

  // @t`s-ignore
  const { id, descriptionHtml, title, vendor, tags, images } = graphModel;
  const price = parseFloat(graphModel.variants[0].price).toFixed(2);
  
  /** @type ProductItem */
  const productItem = {
    id,
    descriptionHtml,
    title,
    vendor,
    tags,
    price,
    images: images.map( (img) => img.src)
  }
  return productItem;
}








/**
 * 
 * @param {string} id 
 * @returns Promise<ProductItem>
 */
export const getProductById = async (id) => {
  if (!id) {
    throw new Error('Id not provided');
  }
  const fromCache = localStorage.getItem('shopify-product-' + id);
  if (!fromCache) {
    const graphModel = await client.product.fetch(id);
    const sanitized = sanitizeModel(graphModel);
    localStorage.setItem('shopify-product-' + id, JSON.stringify(sanitized));
    return sanitized;
  } else {
    return JSON.parse(fromCache);
  }
};





/**
* @returns Promise<ProductItem[]>
*/
export const getProducts = async (page = 0) => {
  const cache = localStorage.getItem('shopify-cache-page-' + page);
  if (!cache) {
    const raw = await client.product.fetchAll(page);
    debugger;
    /** @type ProductItem[] */
    const sanitized = raw.map(sanitizeModel);
    localStorage.setItem('shopify-cache-page-' + page, JSON.stringify(sanitized));
    return sanitized;
  }
  return JSON.parse(cache);
}


/*
const sample = {
  "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4MTAwNDA1ODYzMzg=",
  "createdAt": "2018-11-03T10:10:12Z",
  "updatedAt": "2018-11-22T21:18:32Z",
  "descriptionHtml": "Description:<br>Colour: Black<br>Model:for xbox360<br>Game machine accessories type: other game peripherals<br>Applicable products:for XBOX360<br>Scope of application: sensory magnifier<br>Video game rating: entry level, elite level, enthusiast level<br>Experience distance: within 1.8m<br>Applicable:Can be used in any game that supports for Kinect and play for single and multiplayer<br>Product size: 12.5*8.0*4.0cm<br>",
  "description": "Description:Colour: BlackModel:for xbox360Game machine accessories type: other game peripheralsApplicable products:for XBOX360Scope of application: sensory magnifierVideo game rating: entry level, elite level, enthusiast levelExperience distance: within 1.8mApplicable:Can be used in any game that supports for Kinect and play for single and multiplayerProduct size: 12.5*8.0*4.0cm",
  "handle": "somatosensory-magnifier-game-sensory-magnifier-convenient-game-families-game-sensor-wide-lens-pvc-play-game-peripherals",
  "productType": "",
  "title": "Somatosensory Magnifier Game Sensory Magnifier Convenient Game Families Game Sensor Wide Lens PVC Play Game Peripherals",
  "vendor": "RoyKTikal",
  "tags": [],
  "publishedAt": "2018-11-04T11:51:05Z",
  "onlineStoreUrl": null,
  "options": [
    {
      "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0T3B0aW9uLzI0NDM0MDg4MDE4OTA=",
      "name": "Title",
      "values": [
        {
          "value": "Default Title",
          "type": {
            "name": "String",
            "kind": "SCALAR"
          }
        }
      ],
      "type": {
        "name": "ProductOption",
        "kind": "OBJECT",
        "fieldBaseTypes": {
          "name": "String",
          "values": "String"
        },
        "implementsNode": true
      }
    }
  ],
  "images": [
    {
      "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvNTk2MzQ5MDQ1OTc0Ng==",
      "src": "https://cdn.shopify.com/s/files/1/0049/5186/7490/products/product-image-783880089.jpg?v=1541239815",
      "altText": null,
      "type": {
        "name": "Image",
        "kind": "OBJECT",
        "fieldBaseTypes": {
          "altText": "String",
          "id": "ID",
          "src": "URL"
        },
        "implementsNode": false
      },
      "hasNextPage": false,
      "hasPreviousPage": false,
      "variableValues": {
        "first": 20
      }
    }
  ],
  "variants": [
    {
      "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNjk5ODY1NTk1MDk0Ng==",
      "title": "Default Title",
      "price": "30.92",
      "weight": 0,
      "available": true,
      "sku": "409142",
      "compareAtPrice": "30.92",
      "image": {
        "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvNTk2MzQ5MDQ1OTc0Ng==",
        "src": "https://cdn.shopify.com/s/files/1/0049/5186/7490/products/product-image-783880089.jpg?v=1541239815",
        "altText": null,
        "type": {
          "name": "Image",
          "kind": "OBJECT",
          "fieldBaseTypes": {
            "altText": "String",
            "id": "ID",
            "src": "URL"
          },
          "implementsNode": false
        }
      },
      "selectedOptions": [
        {
          "name": "Title",
          "value": "Default Title",
          "type": {
            "name": "SelectedOption",
            "kind": "OBJECT",
            "fieldBaseTypes": {
              "name": "String",
              "value": "String"
            },
            "implementsNode": false
          }
        }
      ],
      "type": {
        "name": "ProductVariant",
        "kind": "OBJECT",
        "fieldBaseTypes": {
          "available": "Boolean",
          "compareAtPrice": "Money",
          "id": "ID",
          "image": "Image",
          "price": "Money",
          "product": "Product",
          "selectedOptions": "SelectedOption",
          "sku": "String",
          "title": "String",
          "weight": "Float"
        },
        "implementsNode": true
      },
      "hasNextPage": false,
      "hasPreviousPage": false,
      "variableValues": {
        "first": 20
      }
    }
  ],
  "type": {
    "name": "Product",
    "kind": "OBJECT",
    "fieldBaseTypes": {
      "createdAt": "DateTime",
      "description": "String",
      "descriptionHtml": "HTML",
      "handle": "String",
      "id": "ID",
      "images": "ImageConnection",
      "onlineStoreUrl": "URL",
      "options": "ProductOption",
      "productType": "String",
      "publishedAt": "DateTime",
      "tags": "String",
      "title": "String",
      "updatedAt": "DateTime",
      "variants": "ProductVariantConnection",
      "vendor": "String"
    },
    "implementsNode": true
  },
  "hasNextPage": {
    "value": true
  },
  "hasPreviousPage": false,
  "variableValues": {
    "first": 20
  }
}
*/