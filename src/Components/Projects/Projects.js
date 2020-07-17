import React, { Component } from 'react';

export default class Projects extends Component{
    render() {
      return (
        <>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://gatewayproject.netlify.app/" title>
                      <img alt="GateWay" src="images/portfolio/gateway.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>HTML/CSS</h5>
                          <p>Gateway Project</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://hotelaustin.netlify.app/" title>
                      <img alt="" src="images/portfolio/hotelaustin.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>HTML/CSS</h5>
                          <p>Hotel Website</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://productspage.netlify.app/" title>
                      <img alt="" src="images/portfolio/products.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>React</h5>
                          <p>eCommerce Products Page</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://make-a-list.netlify.app/" title>
                      <img alt="" src="images/portfolio/todolist.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>React</h5>
                          <p>To Do List</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://tic-tac-toe2020.netlify.app/" title>
                      <img alt="" src="images/portfolio/tictactoe.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>React</h5>
                          <p>Tic Tac Toe Game</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://github-cards-2020.netlify.app/" title>
                      <img alt="" src="images/portfolio/githubcards.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>React</h5>
                          <p>GitHub Cards</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://github.com/AustinCordova/pokemoninquirer.git" title>
                      <img alt="" src="images/portfolio/pokemon.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Node.js</h5>
                          <p>Pokemon Trainer Game</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://guessing-game2020.netlify.app/" title>
                      <img alt="" src="images/portfolio/guessinggame.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>HTML/CSS/JavaScript</h5>
                          <p>Guessing Game</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  {/* item end */}
                 <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://animated-navbar2020.netlify.app/" title>
                      <img alt="" src="images/portfolio/hamburgermenu.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>HTML/CSS</h5>
                          <p>Animated Nav Bar</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                 <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://counter-app2020.netlify.app/" title>
                      <img alt="" src="images/portfolio/counter.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Life Cycle Methods</h5>
                          <p>Counter App</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div>
          </div></section>
          </>
      );
    }
  };
