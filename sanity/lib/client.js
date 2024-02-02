import { createClient, groq } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export async function getBanners (){
  return client.fetch (
    groq`*[_type == "banner"]{
      _id,
      "image":image.asset->url,
      product,
      buttonText,
      Desc,
      smallText,
      midText,
      largeText1,
      largeText2,
    }`
  )
}
export async function getUsers() {
  return client.fetch(
    groq`*[_type == "user"]{
      _id,
      createdAt,
      name,
      email
    }`
  );
}

export async function getUserByEmail(email) {
  return client.fetch(
    groq`*[_type == "user" && email == $email]{
      _id,
      createdAt,
      name,
      email
    }`,
    { email }
  );
}

export async function createUser(userData) {
const { name, email } = userData;

// Add any additional validation or data preparation here

// Create a new user document
const newUser = await client.create({
  _type: "user",
  name,
  email,
  createdAt: new Date().toISOString(),
});

return newUser;
}
export async function getProductBySlug(slug) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
    }`,
    { slug }
  );
}

export async function getOrdersByEmail(email) {
  try {
    // Query orders from Sanity with a GROQ query
    const orders = await client.fetch(
      `*[_type == 'order' && email == $email] | order(createdAt desc)`,
      { email }
    );

    // Return the sorted orders
    return orders;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error getting orders:', error.message);
    throw new Error('Failed to get orders');
  }
}

export async function createOrder(email,cart) {
  console.log(email,cart);
  try {
    // Create an array to store the promises for creating each order
    const orderCreationPromises = [];

    // Iterate over the orderDataArray and create a promise for each order
    cart.forEach((orderData) => {
      // Extract order data
      const { name, quantity, price} = orderData;

      // Create a promise for creating each order
      const orderCreationPromise = client.create({
        _type: 'order',
        name,
        qty: quantity,
        price,
        paid: true,
        delivered: false,
        email: email,
        createdAt: new Date().toISOString(),
      });

      // Add the promise to the array
      orderCreationPromises.push(orderCreationPromise);
    });

    // Wait for all order creation promises to resolve
    const createdOrders = await Promise.all(orderCreationPromises);

    // Return the created orders
    return createdOrders;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error creating order:', error.message);
    throw new Error('Failed to create order');
  }
}