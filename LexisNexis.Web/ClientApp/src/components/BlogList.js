import React, { Component } from 'react';
import './BlogList.css'

export class BlogList extends Component {


    render() {
        return (
            <div className="container-fluid">
                <div>
                    <h1 className="text-primary tasty-title">Bloogle</h1>
                </div>
                <div className="album py-5 bg-light g-3">
                    <div className="container">
                        <div className="row  row-cols-sm-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/hallows.png" alt="deathly hallows" />
                                    <div className="card-body">
                                        <h4 className="card-title">Hogwarts in real life</h4>
                                        <p className="card-text">An in-depth review on how the wizarding would would affect modern day</p>
                                        <h5>Submitted: Apr 26th 2022</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/bongos.png" alt="Bongos" />
                                    <div className="card-body">
                                        <h4 className="card-title">Furniture banging on drums</h4>
                                        <p className="card-text">A humor project explaining why Banister should play the Bongos</p>
                                        <h5>Submitted: Jan 6th 2002</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/saddog.jpg" alt="butterfly dog" />
                                    <div className="card-body">
                                        <h4 className="card-title">Fairies are actually Dogs!</h4>
                                            <p className="card-text">Magical beasts that live in plain sight. You just might be missing them.</p>
                                        <h5>Submitted: Nov 19th 2012</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/sillycatface.jpg" alt="man screams at cat" />
                                    <div className="card-body">
                                        <h4 className="card-title">Horror in the home</h4>
                                        <p className="card-text">Why my cat hates it when i work. Why must you cause problems?</p>
                                        <h5>Submitted: Mar 16th 2002</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/strudel.jpg" alt="Strudel" />
                                    <div className="card-body">
                                        <h4 className="card-title">Studels Strudels</h4>
                                        <p className="card-text">My journey to create a strudel worthy of the gods. A holy Strudel will solve world peace.</p>
                                        <h5>Submitted: Dec 28th 2009</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/Csharp.png" alt="C#" />
                                    <div className="card-body">
                                        <h4 className="card-title">C# is the best language</h4>
                                        <p className="card-text">Why we all love C#, the Supreme Language</p>
                                        <h5>Submitted: Jan 7th 2003</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/meme.jpeg" alt="A Bad Joke" />
                                    <div className="card-body">
                                        <h4 className="card-title">A Humor Blog</h4>
                                        <p className="card-text">A Blog on humor and memes.We love to laugh.</p>
                                        <h5>Submitted: Sept 6th 2003</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/hallows.png" alt="deathly hallows" />
                                    <div className="card-body">
                                        <h4 className="card-title">Hogwarts in real life</h4>
                                        <p className="card-text">An in-depth review on how the wizarding would would affect modern day</p>
                                        <h5>Submitted: Jul 8th 2008</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="card-img-top" src="img/hallows.png" alt="deathly hallows" />
                                    <div className="card-body">
                                        <h4 className="card-title">Hogwarts in real life</h4>
                                        <p className="card-text">An in-depth review on how the wizarding would would affect modern day</p>
                                        <h5>Submitted: Jan 9th 2006</h5>
                                        <a className="btn btn-primary btn-flex" href="/blog">Take a Look!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}