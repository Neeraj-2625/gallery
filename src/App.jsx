import { useState } from 'react'

import './App.css'
import Image from './components/Image';

function App() {
  
  const images = [
    {
      src:'https://images.pexels.com/photos/9633530/pexels-photo-9633530.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    },
    {
      src:'https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      src:'https://images.pexels.com/photos/25478461/pexels-photo-25478461/free-photo-of-men-girl.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      src:'https://images.pexels.com/photos/26756097/pexels-photo-26756097/free-photo-of-a-woman-reading-a-book-on-a-couch.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      src:'https://images.pexels.com/photos/25288239/pexels-photo-25288239/free-photo-of-a-bride-and-groom-riding-a-moped-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      src:'https://images.pexels.com/photos/19486511/pexels-photo-19486511/free-photo-of-flowers-in-vases-on-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      src:'https://images.pexels.com/photos/25551694/pexels-photo-25551694/free-photo-of-paper-cups-and-bowls-with-forks-and-straws-on-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      src:'https://images.pexels.com/photos/26442528/pexels-photo-26442528/free-photo-of-horses-on-hill.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      src:'https://images.pexels.com/photos/9116768/pexels-photo-9116768.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
     src:'https://images.pexels.com/photos/17710992/pexels-photo-17710992/free-photo-of-small-child-in-a-bucket-hat-and-dungarees-among-the-strawberry-beds-in-the-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    }
    // Add more images as needed

  ];

  return (
    <div className='bg-bg-main w-full p-4'>
      <div className=' gap-10 grid grid-cols-3 '>
      {images.map((img)=>(<Image src = {img.src} key={img.src}/>))}
      </div>
    </div>
  )
}

export default App
