import React from 'react';
import ITyped from 'react-ityped';
import { AnimatePresence, motion } from 'framer-motion';
import Tilt from 'react-tilt';
import Image from 'next/image';
import { shimmer, toBase64 } from 'helpers/image';
import Button from '../form/Button';
import Section from '../common/Section';

const IMAGE_LIST = [
  'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
  'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80',
];

const STRINGS = ['Expert', 'Specialist', 'Professional'];

const WelcomeArea = () => (
  <Section noPaddingTop>
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mt-5">
          <h1 className="h2">
            Industry Leading <br />
            Solutions{' '}
            <span className="text-danger">
              <ITyped
                className="d-inline"
                showCursor={false}
                strings={STRINGS}
                typeSpeed={50}
                backSpeed={30}
                startDelay={100}
                backDelay={2500}
              />
            </span>
          </h1>
          <p className="lead">
            Welcome to Highrachy, a 21st century project oriented firm
            determined to meet your real estate and technological needs.
          </p>
          <Button color="primary" className="mt-3 mb-6">
            Let’s Work Together
          </Button>
        </div>
        <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
          <ImageListSection />
        </div>
      </div>
    </div>
  </Section>
);

export const ImageListSection = () => {
  const [currentImage, setCurrentImage] = React.useState(null);

  const onClick = ({ src, name }) =>
    src ? setCurrentImage({ src, name }) : setCurrentImage(null);

  return (
    <>
      <motion.section className="position-relative row g-2" layout>
        <AnimatePresence initial={false}>
          <div key="image-list__col-1" className="col-6">
            {[0, 1].map((index) => (
              <SingleImage
                key={index}
                name={`image-list-${index}`}
                tall={index === 0}
                src={IMAGE_LIST[index]}
                onClick={onClick}
              />
            ))}
          </div>
          <div key="image-list__col-2" className="col-6">
            {[2, 3].map((index) => (
              <SingleImage
                key={index}
                name={`image-list-${index}`}
                tall={index === 3}
                src={IMAGE_LIST[index]}
                onClick={onClick}
              />
            ))}
          </div>

          <BigSingleImage
            src={currentImage?.src}
            name={currentImage?.name}
            onClick={onClick}
          />
        </AnimatePresence>
      </motion.section>
    </>
  );
};

const SingleImage = ({ tall, src, name, onClick }) => {
  const height = tall ? 350 : 210;
  const width = 300;

  return (
    <motion.div
      key={name}
      layoutId={name}
      onClick={() => onClick({ src, name })}
    >
      <Tilt className="Tilt" options={{ max: 25, scale: 1.01 }}>
        <Image
          src={src}
          className="rounded Tilt-inner"
          height={height}
          width={width}
          alt="welcome area image"
        />
      </Tilt>
    </motion.div>
  );
};

const BigSingleImage = ({ src, name, onClick }) => {
  if (!src) return null;
  return (
    <motion.div
      className="position-absolute"
      layoutId={name}
      onClick={() => onClick({})}
    >
      <Tilt className="Tilt" options={{ max: 25, scale: 1.01 }}>
        <Image
          src={src}
          className="rounded Tilt-inner"
          width="554"
          height="524"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(554, 524)
          )}`}
          alt="testing"
          placeholder="blur"
        />
      </Tilt>
    </motion.div>
  );
};

export default WelcomeArea;