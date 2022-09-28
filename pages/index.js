import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.scss'
import software from '../public/Untitled-design.gif';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { GiContract } from 'react-icons/gi';
import { FaEdit, FaSms } from 'react-icons/fa';
import mobile from '../public/Cost-of-Mobile-App-Development-in-Singapore-removebg-preview.png';
import graph from '../public/graph.png';
import barber from '../public/aesthetics-colour.jpeg';
export default function Home() {
  const child = { width: `300em`, height: `100%` }
  return (
    <div>
      <Head>
        <title>Revyfy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.textContainer}>
        <p className={styles.businessFasterHeading}>MAKE YOUR BUSINESS <br /><span className={styles.primaryClrText}>BETTER {'&'} FASTER !</span> </p>
        <p className={styles.introTextContainer}>Get a salon management software that is dedicated to growing every aspect of your business. Born on the salon floor, bred to help you thrive.</p>
      </div>
      <div className={styles.softwarePictureContainer}>
        <Image src={software} alt='software-gif' />
      </div>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <p className={styles.textLineBelowBanner}>Join the thousands of salon, spa and barber professionals in the UK who use Shortcuts everyday to be a cut above the rest</p>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className={styles.threeBoxesRow}>
          <div className={styles.boxContainer}>
            <GiContract size={45} color='#E60E89' />
            <p className={styles.heading}>No contract</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod ad aspernatur ea cupiditate. Nulla magni molestiae, hic fugit voluptas harum cumque, pariatur dignissimos maxime, natus blanditiis corporis recusandae laborum.
            </p>
          </div>
          <div className={styles.boxContainer}>
            <FaEdit size={45} color='#E60E89' />
            <p className={styles.heading}>Achieve more bookings</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod ad aspernatur ea cupiditate. Nulla magni molestiae, hic fugit voluptas harum cumque, pariatur dignissimos maxime, natus blanditiis corporis recusandae laborum.
            </p>
          </div>
          <div className={styles.boxContainer}>
            <FaSms size={45} color='#E60E89' />
            <p className={styles.heading}>SMS reminders</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod ad aspernatur ea cupiditate. Nulla magni molestiae, hic fugit voluptas harum cumque, pariatur dignissimos maxime, natus blanditiis corporis recusandae laborum.
            </p>
          </div>
        </div>
      </AnimationOnScroll>
      <div className={styles.video}>
        <iframe className={styles.iframe} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' frameborder='0' height='621' src='https://www.youtube.com/embed/_MXtbjwsz3A' width='1261'></iframe>
      </div>
      <div className={styles.softwarePictureContainerOfMobileWithDesc}>
        <div className={styles.softwareDetailsContainer}>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <p className={styles.textHeading}>Software created by your industry, for your industry</p>
            <p className={styles.detailsText}>At Shortcuts, we work closely with our customers to create solutions that will actually work for YOU! A bunch of our team we called Shorties come from the hair, beauty and barber industry and help us design features that will actually solve your problems and run your business in the unique way we love so much about this industry!</p>
          </AnimationOnScroll>

        </div>
        <div className={styles.pictureContainer}>
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <Image src={mobile} alt='mobile' />
          </AnimationOnScroll>
        </div>
      </div>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <p className={styles.textLineBelowBanner}>Trusted by some of the best</p>
        <div className={styles.mainScrollContainer}>
          <div className={styles.scrollableContainer}>
            <img className={styles.comanyPicture} src="https://www.shortcuts.co.uk/wp-content/uploads/sites/2/2022/03/daniel-gavin-logo.jpg" alt="img" />
            <img className={styles.comanyPicture} src="https://www.shortcuts.co.uk/wp-content/uploads/sites/2/2022/03/jersey.jpg" alt="img" />
            <img className={styles.comanyPicture} src="https://www.shortcuts.co.uk/wp-content/uploads/sites/2/2022/03/hob.jpg" alt="img" />
            <img className={styles.comanyPicture} src="https://www.shortcuts.co.uk/wp-content/uploads/sites/2/2022/03/headmasters.jpg" alt="img" />
            <img className={styles.comanyPicture} src="https://www.shortcuts.co.uk/wp-content/uploads/sites/2/2022/03/pm.jpg" alt="img" />
            <img className={styles.comanyPicture} src="https://www.shortcuts.co.uk/wp-content/uploads/sites/2/2022/03/logo-rixon.jpg" alt="img" />
          </div>
        </div>
      </AnimationOnScroll>
      <div className={styles.softwarePictureContainerOfMobileWithDescBackground}>
        <div className={styles.softwareDetailsContainer}>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <p className={styles.textHeading}>Some awesome features</p>
            <ul>
              <li className={styles.detailsText}>Appointment schedule with online booking </li>
              <li className={styles.detailsText}>Book out individual rooms  </li>
              <li className={styles.detailsText}>Unlimited users </li>
              <li className={styles.detailsText}>Unlimited locations</li>
              <li className={styles.detailsText}>Automatic sms/ email reminders </li>
              <li className={styles.detailsText}>Customer history showing records card, spend , loyalty points, attendance and account balance , invoices and deposits.  </li>
              <li className={styles.detailsText}>Access from any device </li>
              <li className={styles.detailsText}>Full till and point of sale management </li>
              <li className={styles.detailsText}>Stock control with low stock warnings  </li>
              <li className={styles.detailsText}>Pc,tablet and phone friendly   </li>
              <li className={styles.detailsText}>Marketing  </li>
              <li className={styles.detailsText}>Daily dashboard analytics   </li>
              <li className={styles.detailsText}>Employee management  </li>

            </ul>
          </AnimationOnScroll>

        </div>
        <div className={styles.pictureContainer}>
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <Image src={graph} alt='mobile' />
          </AnimationOnScroll>
        </div>
      </div>
      <p className={styles.solutionHeading}>Complete software solution tailored to your industry</p>
      <div className={styles.containerForRightAnimationOfGallery}>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <div className={styles.imgsRow}>
            <div className={styles.galleryImgContainer}>
              <Image className={styles.galleryImg} src={barber} />
            </div>
            <div className={styles.galleryImgContainer}>
              <Image className={styles.galleryImg} src={barber} />
            </div>
            <div className={styles.galleryImgContainer}>
              <Image className={styles.galleryImg} src={barber} />
            </div>
          <div className={styles.galleryImgContainer}>
            <Image className={styles.galleryImg} src={barber} />
          </div>
          <div className={styles.galleryImgContainer}>
            <Image className={styles.galleryImg} src={barber} />
          </div>
          <div className={styles.galleryImgContainer}>
            <Image className={styles.galleryImg} src={barber} />
          </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div >
  )
}
