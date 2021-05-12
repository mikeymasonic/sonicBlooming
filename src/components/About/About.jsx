import React from 'react';
import {
  aboutPage,
  aboutSponsors,
  aboutQu,
  aboutClamber,
  aboutCrystal,
  aboutMikey,
  aboutJena,
} from '../../utils/data';
import styles from './About.css';
// import githubIcon from '../../assets/about/Github-Icon.png';
// import linkedInIcon from '../../assets/about/LinkedIn-Icon.png';

const About = () => {
  return (
    <section className={styles.aboutPage}>
      <section className={styles.About}>
        <h1>About Sonic Blooming</h1>

        <section className={styles.aboutContainer}>
          <img src={aboutPage.photoURL} alt="Flower with sensors attached" className={styles.photo}/>
          <p>{aboutPage.description}</p>
        </section>
        
        <section className={styles.creditsContainer}>
          <span>Sponsored by: &nbsp;</span>
          <a href={aboutSponsors.sponsorOneURL} target="_blank" rel="noopener noreferrer">
            {aboutSponsors.sponsorOne}
          </a> 
          &nbsp;&&nbsp;
          <a href={aboutSponsors.sponsorTwoURL} target="_blank" rel="noopener noreferrer">
            {aboutSponsors.sponsorTwo}
          </a> 

          <br/>

          <span>Map designed by: &nbsp;</span>
          <a href={aboutQu.portfolioURL} target="_blank" rel="noopener noreferrer">
            {aboutQu.name}
          </a> 

          <br/> 

          <span>Photos by: &nbsp;</span>
          <a href={aboutClamber.portfolioURL} target="_blank" rel="noopener noreferrer">
            {aboutClamber.name}
          </a> 
        </section>
      </section>

      <section className={styles.About}>

        <h2>
          {aboutCrystal.name}
        </h2>
        <div>
          {aboutCrystal.role}
        </div>
        <section className={styles.links}>
          <a href={aboutCrystal.portfolioURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.wwwIcon} alt="crystal portfolio" className={styles.icons}/>
          </a> 
          <a href={aboutCrystal.instagramURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.instagramIcon} alt="crystal instagram" className={styles.icons}/>
          </a> 
        </section>

        <section className={styles.aboutContainer}>
          <img src={aboutCrystal.photoURL} alt="Crystal Profile Picture" className={styles.devPhotos} />
          <p className={styles.crystalBio}>{aboutCrystal.bio}</p>
        </section>
      </section>

      <section className={styles.About}>
        <h2>
          {aboutMikey.name}
        </h2>
        <div>
          {aboutMikey.role}
        </div>
        <section className={styles.links}>
          <a href={aboutMikey.portfolioURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.wwwIcon} alt="mikey portfolio" className={styles.icons}/>
          </a> 
          <a href={aboutMikey.gitHubURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.gitHubIcon} alt="mikey github" className={styles.icons}/>
          </a>
          <a href={aboutMikey.linkedInURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.linkedInIcon} alt="mikey linked in" className={styles.icons}/>
          </a> 
        </section>  

        <section className={styles.aboutContainer}>
          <img src={aboutMikey.photoURL} alt="Mikey Profile Picture" className={styles.devPhotos} />
          <p className={styles.devBio}>{aboutMikey.bio}</p>
        </section>
      </section>

      <section className={styles.About}>
        <h2>
          {aboutJena.name}
        </h2>
        <div>
          {aboutJena.role}
        </div>
        <section className={styles.links}>
          <a href={aboutJena.portfolioURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.wwwIcon} alt="jena portfolio" className={styles.icons}/>
          </a> 
          <a href={aboutJena.gitHubURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.gitHubIcon} alt="jena github" className={styles.icons}/>
          </a>
          <a href={aboutJena.linkedInURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.linkedInIcon} alt="jena linked in" className={styles.icons}/>
          </a> 
        </section>   

        <section className={styles.aboutContainer}>
          <img src={aboutJena.photoURL} alt="Jena Profile Picture" className={styles.devPhotos} />
          <p className={styles.devBio}>{aboutJena.bio}</p>
        </section>

      </section>
    </section>
  );
};

export default About;
