import React, {Component} from 'react';;

export default class Skills extends Component{
    render() {
      return (
        <>
        <div id="skills" className="row skill">
          <div className="three columns header-col">
            <h1 className="skills--heading"><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p className="skills--paragraph">Below are a set of tech skills I have been developing within the last six months. Note that these skills are always in flex and are consistently changing. 
            I am always learning new things, and I'm always improving on my tech skills. 
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand" data-percent="90%">90%</span><em>CSS</em></li>
                <li><span className="bar-expand" data-percent="90%">90%</span><em>HTML5</em></li>
                <li><span className="bar-expand" data-percent="70%">70%</span><em>JavaScript</em></li>
                <li><span className="bar-expand" data-percent="80%">80%</span><em>React</em></li>
                <li><span className="bar-expand" data-percent="50%">50%</span><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> 
        </>
      );
    }
  };
