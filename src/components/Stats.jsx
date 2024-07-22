import React from 'react';
import StatBox from './StatBox';
import StatBox2 from './StatBox2';
import StatBox3 from './StatBox3';
import StatBox4 from './StatBox4';

const Stats = () => {
  return (
    <section className='justify-center md:ml-[60px]' >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-20 mx-5'>
      <StatBox />
      <StatBox2 />
      <StatBox3 />
      <StatBox4 />
      </div>
    </section>
  );
};

export default Stats;
