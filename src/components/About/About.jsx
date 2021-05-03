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
    <section className={styles.aboutContainer}>
      <section className={styles.About}>
        <h1>About Sonic Blooming</h1>
        <img src={aboutPage.photoURL} alt="Flower with sensors attached" className={styles.photo}/>
        <p>{aboutPage.description}</p>
        <section>
        Sponsored by: &nbsp;
          <a href={aboutSponsors.sponsorOneURL} target="_blank" rel="noopener noreferrer">
            {aboutSponsors.sponsorOne}
          </a> 
          &nbsp;&&nbsp;
          <a href={aboutSponsors.sponsorTwoURL} target="_blank" rel="noopener noreferrer">
            {aboutSponsors.sponsorTwo}
          </a> 
        </section>

        <section>
        Map designed by: &nbsp;
          <a href={aboutQu.portfolioURL} target="_blank" rel="noopener noreferrer">
            {aboutQu.name}
          </a> 
          &nbsp; Photos by: &nbsp;
          <a href={aboutClamber.portfolioURL} target="_blank" rel="noopener noreferrer">
            {aboutClamber.name}
          </a> 
        </section>
        
        <section className={styles.dev}>
          <img src={aboutCrystal.photoURL} alt="Crystal Profile Picture"/>
          <section className={styles.links}>
            <a href={aboutCrystal.portfolioURL} target="_blank" rel="noopener noreferrer">
              <img src={aboutPage.wwwIcon} alt="portfolio" className={styles.icons}/>
            </a> 
          </section>   
          <section>{aboutCrystal.name}: {aboutCrystal.role}</section>
          <p>{aboutCrystal.bio}</p>
        </section>


        <section className={styles.dev}>
          <img src={aboutMikey.photoURL} alt="Mikey Profile Picture"/>
          <section className={styles.links}>
            <a href={aboutMikey.portfolioURL} target="_blank" rel="noopener noreferrer">
              <img src={aboutPage.wwwIcon} alt="portfolio" className={styles.icons}/>
            </a> 
            <a href={aboutMikey.gitHubURL} target="_blank" rel="noopener noreferrer">
              <img src={aboutPage.gitHubIcon} alt="github" className={styles.icons}/>
            </a>
            <a href={aboutMikey.linkedInURL} target="_blank" rel="noopener noreferrer">
              <img src={aboutPage.linkedInIcon} alt="linked in" className={styles.icons}/>
            </a> 
          </section>   
          <section>{aboutMikey.name}: {aboutMikey.role}</section>
          <p>{aboutMikey.bio}</p>
        </section>

        <section className={styles.dev}>
          <img src={aboutJena.photoURL} alt="Jena Profile Picture"/>
          <section className={styles.links}>
            <a href={aboutJena.portfolioURL} target="_blank" rel="noopener noreferrer">
              <img src={aboutPage.wwwIcon} alt="portfolio" className={styles.icons}/>
            </a> 
            <a href={aboutJena.gitHubURL} target="_blank" rel="noopener noreferrer">
              <img src={aboutPage.gitHubIcon} alt="github" className={styles.icons}/>
            </a>
            <a href={aboutJena.linkedInURL} target="_blank" rel="noopener noreferrer">
              <img src={aboutPage.linkedInIcon} alt="linked in" className={styles.icons}/>
            </a> 
          </section>   
          <section>{aboutJena.name}: {aboutJena.role}</section>
          <p>{aboutJena.bio}</p>
        </section>

      </section>
    </section>
  );
};

export default About;
