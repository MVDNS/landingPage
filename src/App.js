import React from 'react';
import './App.css'
import logo from './assets/logo.png'
import interior from './assets/interior-pick.jpg'
import design from './assets/001-interior-design.png'
import architec from './assets/002-blueprint.png'
import plan from './assets/003-task.png'
import aboutpick from './assets/about-pick.jpg'
import success from './assets/success-pick.png'
import louis from './assets/louis.jpg'
import rekha from './assets/rekha.jpg'
import trends from './assets/trends.jpg'
import notable from './assets/notable.jpg'

import { FaTelegramPlane } from 'react-icons/fa'
import { BsDiscord, BsTwitter, BsGithub } from 'react-icons/bs'








function App() {
	return (
		<div className="App">
			<header className="header">
				<div className="header-container container">
					<div className="header__logo">
						<a href="#"><img src={logo} alt="logo" /></a>
					</div>
					<nav className="header__nav nav">
						<ul className="nav__list">
							<li className="nav__item"><a href='#'>HOME</a></li>
							<li className="nav__item"><a href='#'>PROJECT</a></li>
							<li className="nav__item"><a href='#'>SERVICES</a></li>
							<li className="nav__item"><a href='#'>ABOUT</a></li>
							<li className="nav__item"><a href='#'>BLOG</a></li>
							<li className="nav__item"><a href='#'>SHOP</a></li>
							<li className="nav__item"><a href='#'>CONTACT</a></li>
						</ul>
					</nav>
					<div className="header__btn btn"><a href="#">Sign Up</a></div>
				</div>
			</header>
			<div className="content">
				<div className="intr">
					<div className="intr-container container">
						<div className="intr__left">
							<div className="intr__name">MODERN INTERIOR</div>
							<div className="intr__title">Create Your Interior Design.</div>
							<div className="intr__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
							<a className='int__btn btn' href="#">Contact</a>
						</div>
						<div className="intr__rigth">
							<div className="intr__pic">
								<img src={interior} alt="interior" />
							</div>
						</div>
					</div>
				</div>
				<div className="service">
					<div className="service-container container">
						<div className="service__name">WHAT WE DO</div>
						<div className="service__title">Our Service</div>
						<div className="service__cards card">
							<div className="card__item">
								<img src={design} alt="" className="card__logo" />
								<div className="card__text">
									<div className="card__title">Interior Design</div>
									<div className="card_desc">Lorem ipsum dolor amet consectetur
										adipiscing elit sed eiusmod tempor
										incididunt ut labore.</div>
								</div>
							</div>
							<div className="card__item">
								<img src={architec} alt="" className="card__logo" />
								<div className="card__text">
									<div className="card__title">Architecture</div>
									<div className="card_desc">Lorem ipsum dolor amet consectetur
										adipiscing elit sed eiusmod tempor
										incididunt ut labore.</div>
								</div>
							</div>
							<div className="card__item">
								<img src={plan} alt="" className="card__logo" />
								<div className="card__text">
									<div className="card__title">Planning</div>
									<div className="card_desc">Lorem ipsum dolor amet consectetur
										adipiscing elit sed eiusmod tempor
										incididunt ut labore.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="about">
					<div className="about-container container">
						<div className="about__stroke">
							<div className="about__left">
								<div className="about__pic">
									<img src={aboutpick} alt="aboutpick" />
								</div>
							</div>
							<div className="about__right">
								<div className="about__subtitle subtitle">About us</div>
								<div className="about__title title">Interioris The Will
									of An Epoch Mextreo</div>
								<div className="about__desc desc">There are many variations of passages of Lorem Ipsum available,
									but the majority have suffered alteration in some form injected
									humour, or randomised words which don't look even slightly
									believable.If you are going to use a passage of Lorem Ipsum,
									sure there isn't anything embarrassing hidden the middleof text.
									All the Lorem Ipsum generators on the Internettend to repeat
									predefined chunks as necessary,making this the first true
									generator on the Internet.</div>
								<a className='int__btn btn' href="#">Learn More</a>
							</div>
						</div>
						<div className="about__stroke about__stroke-reverse">
							<div className="about__left">
								<div className="about__pic about__pic-reverse">
									<img src={success} alt="aboutpick" />
								</div>
							</div>
							<div className="about__right">
								<div className="about__years">20</div>
								<div className="about__title title">Years Of Successful
									Working
									The Market</div>
								<a className='int__btn int__btn-mt btn' href="#">Read More</a>
							</div>
						</div>
					</div>
				</div>
				<div className="complete">
					<div className="complete-container container">
						<div className="complete__title title">
							3000+ Completed Work
							Which WE have Successfully Done
						</div>
						<div className="complete__info info">
							<div className="info__item">
								<div className="info__value">980</div>
								<div className="info__name">Project</div>
							</div>
							<div className="info__item">
								<div className="info__value">520</div>
								<div className="info__name">Happy Client</div>
							</div>
							<div className="info__item">
								<div className="info__value">330</div>
								<div className="info__name">Winners</div>
							</div>
							<div className="info__item">
								<div className="info__value">120</div>
								<div className="info__name">Recoment</div>
							</div>
						</div>
					</div>
				</div>
				<div className="testimonials">
					<div className="testimonials-container container">
						<div className="testimonials__subtitle subtitle">Testimonials</div>
						<div className="testimonials__title title">Client says about us</div>
						<div className="testimonials__feedback feedback">
							<div className="feedback__item">
								<div className="feedback__foto">
									<img src={louis} alt="" />
								</div>
								<div className="feedback__info">
									<div className="feedback__person">Louis Saville <span className="feedback__position">/CEO at Google inc</span></div>
									<div className="feedback__text">Lorem ipsum dolor sit amet, consectetur adipiscing
										elit, sed do eiusmod tempor incididunt ut labore
										et dolore magna aliqua.</div>
								</div>
							</div>
							<div className="feedback__item">
								<div className="feedback__foto">
									<img src={rekha} alt="" />
								</div>
								<div className="feedback__info">
									<div className="feedback__person">Rekha Varadwaz <span className="feedback__position">/Manager at Nike inc</span></div>
									<div className="feedback__text">Lorem ipsum dolor sit amet, consectetur adipiscing
										elit, sed do eiusmod tempor incididunt ut labore
										et dolore magna aliqua.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="news">
					<div className="news-container container">
						<div className="news__subtitle subtitle">Letest news</div>
						<div className="news__title title">From Our Blog</div>
						<div className="news__blog blog">
							<div className="blog__item">
								<div className="blog__header">
									<div className="blog__pick">
										<img src={trends} alt="" />
									</div>
								</div>
								<div className="blog__content">
									<div className="blog__title">2020 Interior Design Trends</div>
									<div className="blog__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
										incididunt ut labore et dolore magna aliqua.</div>
									<a className='blog__btn btn' href="#">Continue reading....</a>
								</div>

							</div>
							<div className="blog__item">
								<div className="blog__header">
									<div className="blog__pick">
										<img src={notable} alt="" />
									</div>
								</div>
								<div className="blog__content">
									<div className="blog__title">28 Notable Product at ARC Interior Design</div>
									<div className="blog__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
										incididunt ut labore et dolore magna aliqua.</div>
									<a className='blog__btn btn' href="#">Continue reading....</a>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="subsrcibe">
					<div className="subscribe-container container">
						<div className="subscribe__title title">
							DON’T FORGET TO SIGN UP
						</div>
						<div className="subscribe__desc desc">Find out early about all upcoming promotions and new product releases with
							our newsletter.</div>
						<div className="subscribe__form form">
							<input className='form__input' type="text" placeholder='Enter your email address.....' />
							<button className='form__btn btn'>Subscribe</button>
						</div>
					</div>
				</div>
			</div>
			<footer className="footer">
				<div className="footer__inform inform">
					<div className="inform-container container">
						<div className="inform__left">
							<div className="inform__logo">
								<img src={logo} alt="" />
							</div>
							<div className="inform__desc ft">
								But i must explain to you all this mistaken
								idea of dencouncing pleasure.
							</div>
						</div>
						<div className="inform__right">
							<div className="inform__item">
								<div className="inform__header">Quick Links</div>
								<div className="inform__row ft"><a href="#">About Our Company</a></div>
								<div className="inform__row ft"><a href="#">Services WE provide</a></div>
								<div className="inform__row ft"><a href="#">Career & Opportunity</a></div>
								<div className="inform__row ft"><a href="#">Privacy & policy</a></div>
								<div className="inform__row ft"><a href="#">Contact US</a></div>
							</div>
							<div className="inform__item">
								<div className="inform__header">Company</div>
								<div className="inform__row ft"><a href="#">About Company</a></div>
								<div className="inform__row ft"><a href="#">Our Testimonial</a></div>
								<div className="inform__row ft"><a href="#">Latest News</a></div>
								<div className="inform__row ft"><a href="#">Our Mission</a></div>
								<div className="inform__row ft"><a href="#">Get a free Quot</a></div>
							</div>
							<div className="inform__item">
								<div className="inform__header">Contact us</div>
								<div className="inform__row ft">Sagrada Familia, Herba</div>
								<div className="inform__row ft">Street Front USA</div>
								<div className="inform__row ft">brandoxide@gmail.com</div>
								<div className="inform__row ft">002-568423591</div>
							</div>
							<div className="inform__item inform__item-social">
								<div className="inform__header">Follow Us</div>

								<div className="inform__row row">
									<div className="row__items items">
										<div className="row__item"><FaTelegramPlane /></div>
										<div className="row__item"><BsGithub /></div>
										<div className="row__item"><BsDiscord /></div>
										<div className="row__item"><BsTwitter /></div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className="footer__copyright">
					Copyright @ 2023 <span><a href="https://github.com/MVDNSX" target='_blank'>MVDNSX</a></span>.all right reserved.
				</div>
			</footer>
		</div>
	);
}

export default App;
