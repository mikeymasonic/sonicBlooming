import React from 'react';
import {
  aboutPage,
  aboutSponsors,
  aboutQu,
  aboutClamber,
  aboutKale,
  aboutCrystal,
  aboutMikey,
  aboutJena,
} from '../../utils/data';
import styles from './About.css';

const About = () => {
  return (
    <section className={styles.aboutPage}>
      <section className={styles.About}>
        <h1>About Sonic Blooming</h1>

        <section className={styles.aboutContainer}>
          <img src={aboutPage.photoURL} alt="Flower with sensors attached" className={styles.photo}/>
          <p>
            {aboutPage.descriptionPartOne}
            <a href={aboutPage.mapURL} target="_blank" rel="noopener noreferrer">
              {aboutPage.descriptionTestGarden}
            </a> 
            {aboutPage.descriptionPartTwo}
          </p>
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

          <br/> 

          <span>Audio Mastered by: &nbsp;</span>
          <a href={aboutKale.portfolioURL} target="_blank" rel="noopener noreferrer">
            {aboutKale.name}
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
          <p className={styles.crystalBio}>
            {aboutCrystal.bioPartOne}
            <a href={aboutCrystal.whateverSpaceURL} target="_blank" rel="noopener noreferrer">
              {aboutCrystal.bioWhatever}
            </a> 
            {aboutCrystal.bioPartTwo}
          </p>
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
          <a href={aboutMikey.instagramURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.instagramIcon} alt="mikey instagram" className={styles.icons}/>
          </a> 
        </section>  

        <section className={styles.aboutContainer}>
          <img src={aboutMikey.photoURL} alt="Mikey Profile Picture" className={styles.devPhotos} />
          <p className={styles.devBio}>
            {aboutMikey.bioPartOne}
            <a href={aboutMikey.whateverSpaceURL} target="_blank" rel="noopener noreferrer">
              {aboutMikey.bioWhatever}
            </a> 
            {aboutMikey.bioPartTwo}
          </p>
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
          <a href={aboutJena.instagramURL} target="_blank" rel="noopener noreferrer">
            <img src={aboutPage.instagramIcon} alt="jena instagram" className={styles.icons}/>
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
