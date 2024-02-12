import React from 'react';

function Profile({ scientist, size = 100 }) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={'https://i.imgur.com/' + scientist.imageId + '.jpg'}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: {scientist.awards.length} </b>
          {scientist.awards.map((award, index) => (
            <span key={index}>
              {award}
              {index !== scientist.awards.length - 1 ? ', ' : ''}
            </span>
          ))}
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  const scientists = [
    {
      name: 'Maria Skłodowska-Curie',
      imageId: 'szV5sdGs',
      profession: 'physicist and chemist',
      awards: [
        'Nobel Prize in Physics',
        'Nobel Prize in Chemistry',
        'Davy Medal',
        'Matteucci Medal'
      ],
      discovered: 'polonium (element)'
    },
    {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2s',
      profession: 'geochemist',
      awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
      discovered: 'a method for measuring carbon dioxide in seawater'
    }
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist, index) => (
        <Profile key={index} scientist={scientist} size={100} />
      ))}
    </div>
  );
}
