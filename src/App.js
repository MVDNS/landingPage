import React from 'react';
import './App.css'
import logo from './assets/logo.png'
import interior from './assets/001-interior-design.png'
import architecture from './assets/002-blueprint.png'
import planning from './assets//003-task.png'
import interiorPick from './assets/interior-pick.jpg'


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
				<div className="interior">
					<div className="container interior-container">
						<div className="interior__left">
							<div className="interiot__title title">Modern interior</div>
							<div className="intetior__subtitle subtitle subtitle-big">Create Your
								Interior Design.</div>
							<div className="interior__description description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation.
							</div>
							<div className="interior__btn btn"><a href="#">Contact</a></div>
						</div>
						<div className="interior__right">
							<img src={interiorPick} alt="pick" />
						</div>

					</div>
				</div>
				<div className="service">
					<div className="service-container container">
						<div className="service__title title">What we do</div>
						<div className="service__subtitle subtitle">Our Service</div>
						<div className="service__cards">
							<div className="card card-active">
								<div className="card__logo">
									<img src={interior} alt="" />
								</div>
								<div className="card__description">
									<div className="card__title">Interior Design</div>
									<div className="card__text">Lorem ipsum dolor amet consectetur
										adipiscing elit sed eiusmod tempor
										incididunt ut labore.</div>
								</div>
							</div>
							<div className="card">
								<div className="card__logo">
									<img src={architecture} alt="" />
								</div>
								<div className="card__description">
									<div className="card__title">Architecture</div>
									<div className="card__text">Lorem ipsum dolor amet consectetur
										adipiscing elit sed eiusmod tempor
										incididunt ut labore.</div>
								</div>
							</div>
							<div className="card">
								<div className="card__logo">
									<img src={planning} alt="" />
								</div>
								<div className="card__description">
									<div className="card__title">Planning</div>
									<div className="card__text">Lorem ipsum dolor amet consectetur
										adipiscing elit sed eiusmod tempor
										incididunt ut labore.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="footer">
				<div className="container footer__container">
					<div className="footer__copyright">
						Copyright @ 2020 <span>MVDNSX</span>.all right reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
