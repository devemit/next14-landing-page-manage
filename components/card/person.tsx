'use client';

import { useState } from 'react';
import styles from './person.module.css';
import Image, { StaticImageData } from 'next/image';
import ali from '../../public/avatar-ali.png';
import anisha from '../../public/avatar-anisha.png';
import richard from '../../public/avatar-richard.png';
import shanai from '../../public/avatar-shanai.png';
import { motion } from 'framer-motion';

import { IoMdArrowDropleft } from 'react-icons/io';
import { IoMdArrowDropright } from 'react-icons/io';

interface Person {
  name: string;
  text: string;
  img: StaticImageData;
}
const data: any = [
  {
    name: 'Ali Bravo',
    text: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross channel and everyone is much more focused.',
    img: ali,
  },
  {
    name: 'Anisha Li',
    text: 'Manage has supercharged our team workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
    img: anisha,
  },
  {
    name: 'Richard Watts',
    text: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can not stop recommending them to everyone i talk to.',
    img: richard,
  },
  {
    name: 'Shanai Brown',
    text: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive.',
    img: shanai,
  },
];

export default function Person() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  }
  function handlePrev() {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.person}
      >
        <Image
          src={data[currentIndex].img}
          height={75}
          width={75}
          alt='person'
          style={{ borderRadius: '50' }}
        />
        <div className={styles.person_name}>{data[currentIndex].name}</div>
        <div className={styles.person_text}>{data[currentIndex].text}</div>
      </motion.div>
      <div className={styles.controls}>
        <IoMdArrowDropleft onClick={handlePrev} size={22} className={styles.controler} />
        <IoMdArrowDropright onClick={handleNext} size={22} className={styles.controler} />
      </div>
    </>
  );
}
