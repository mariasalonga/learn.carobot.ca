import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'LEARN',
    Svg: 'img/learn.svg',
    description: (
      <>
        Here at CAROBOT you can learn through our provided tutorials on 
        how to use the components needed for your project!
      </>
    ),
  },
  {
    title: 'BUILD',
    Svg: 'img/build.svg',
    description: (
      <>
        Choose the Guide tab, select a guide, and follow with step by step 
        instructions on how to make a cool robotics project!
      </>
    ),
  },
  {
    title: 'CREATE',
    Svg: 'img/create.svg',
    description: (
      <>
        The sky's the limit! You can design and build your own robotics project!!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.fontColour}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
