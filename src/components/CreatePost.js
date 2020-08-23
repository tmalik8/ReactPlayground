// Example use case
// <CreatePost name='James Foody' location='Cambridge, MA, US'
//             img='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>

import React from 'react';
import '../styles/CreatePost.css'

const CreatePost = ({name, location, img}) => {
  return (
      <div className='create-post-wrapper'>
        <div className='cont'>
          <div className='info-wrapper'>
            <div className='info'>
              <div className='img-container'>
                <img src={img} alt='me'/>
              </div>
              <div>
                <div className='name'>{name}</div>
                <div className='loc'>{location}</div>
              </div>
            </div>
            <div>
              <div className='btn'>+ Create Events</div>
            </div>
          </div>
          <div className='text-area'>
            <textarea rows={4} placeholder="What's on your mind?"/>
          </div>
          <div className='flex-panel'>
            <div className='tools'>
              <i>picture</i>
              <i>video</i>
              <i>document</i>
            </div>
            <div className='btn'>OK</div>
          </div>
        </div>
      </div>
  );
};

export default CreatePost;