import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../css/landingpage.css';

const scrolling = {
  duration: 800,
  offset: 1,
  smooth: true
};

const LandingPage = () => {
  return (
    <div class='page'>
      <header className='nav-bar'>
        <img className='icon' src={require('../images/legendary.png')} />
        <ul className='nav-bar'>
          <li>
            <Link
              to='what-is-halo-ce'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              className='nav-btn'
              href='#'
            >
              Setup Halo CE
            </Link>
          </li>
          <li>
            <Link
              to='single-player'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              className='nav-btn'
              href='#'
            >
              Single Player
            </Link>
          </li>
          <li>
            <Link
              to='firefight'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              className='nav-btn'
              href='#'
            >
              Firefight
            </Link>
          </li>
          <li>
            <Link
              to='multiplayer'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              className='nav-btn'
              href='#'
            >
              Multiplayer
            </Link>
          </li>
          <li>
            <Link
              to='addons'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              className='nav-btn'
              href='#'
            >
              Addons
            </Link>
          </li>
          <li>
            <Link
              to='community'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              className='nav-btn'
              href='#'
            >
              Community
            </Link>
          </li>
        </ul>
      </header>
      {/*Landing*/}
      <div className='welcome'>
        <h1>Welcome to Halo Custom Edition!</h1>
      </div>
      {/* <!--What-Is-Halo-Custom-Edition--> */}
      <div className='container'>
        <section className='text-section circuits' id='what-is-halo-ce'>
          <div className='title'>
            <h1>What is Halo Custom Edition?</h1>
          </div>
          <div className='text'>
            <p>
              Halo Custom Edition is an expansion of the Windows version of Halo
              Combat Evolved. It supports user-created maps, and it is freely
              available to anyone who purchased the retail game.
            </p>
          </div>
          <div className='title'>
            <h1>How do I download Halo Custom Edition?</h1>
          </div>
          <div className='text setup'>
            <p>
              In order to install Halo Custom Edition, you need to own Halo:
              Combat Evolved for the PC. Using the CD Key you got with Halo:
              Combat Evolved, Follow
              <a
                className='link'
                href='https://www.youtube.com/watch?v=nREnJyzRAiY&ab_channel=Arm%27sTutorials'
                target='_blank'
              >
                this guide
              </a>
              to install the Halo Custom Edition game.
            </p>
          </div>
        </section>
      </div>
      {/* <!--What-Does-Halo-Custom-Edition-Have-To-Offer--> */}
      <div className='spv3'>
        <h1 className='title-text'>
          What does Halo Custom Edition have to offer?
        </h1>
        <section className='card-list'>
          <div className='card'>
            <Link to='single-player' smooth={scrolling.smooth} offset={scrolling.offset} duration={scrolling.duration} className='nav-btn' href='#'>
              <img src={require('../images/1_full.jpg')} />
            </Link>
            
            <h3>Single Player</h3>
            <p>
              Fully featured single player missions that offer unique campaign
              stories and fun enemies to fight!
            </p>
          </div>
          <div className='card'>
            <Link to='firefight' smooth={scrolling.smooth} offset={scrolling.offset} duration={scrolling.duration} className='nav-btn' href='#'>
              <img src={require('../images/descent-1.jpg')} />
            </Link>
            <h3>Firefight</h3>
            <p>
            Firefight is a single or cooperative campaign mode brought to
            Halo: Custom Edition where the player goes up against waves of
            enemy attackers.
            </p>
          </div>
          <div className='card'>
            <Link to='multiplayer' smooth={scrolling.smooth} offset={scrolling.offset} duration={scrolling.duration} className='nav-btn' href='#'>
              <img src={require('../images/precipice.png')} />
            </Link>
            <h3>Multiplayer</h3>
            <p>
              Multiplayer is the online player vs. player component of Halo: Custom Edition.
              You can play on many maps and gamemodes on a wide variety of dedicated servers.
            </p>
          </div>
          <div className='card'>
            <Link to='addons' smooth={scrolling.smooth} offset={scrolling.offset} duration={scrolling.duration} className='nav-btn' href='#'>
              <img src='https://dummyimage.com/1900x1080/fff/000.png' />
            </Link>
            <h3>Addons</h3>
            <p>
              Placeholder. Lorem ipsum goofy boo boo text text temporary.
            </p>
          </div>
          <div className='card'>
            <img src={require('../images/nuclear-b.png')} />
            <h3>Halo Editing Kit</h3>
            <p>
              HEK is a kit of tools allowing you to develop custom content for
              Halo: Custom Edition.
              To get started, read the{' '}
              <a
                className='link'
                target='_blank'
                href='HEK_Tutorial/index.html'
              >
                Official HEK Tutorial
              </a>
            </p>
          </div>
        </section>
      </div>
      {/* <!--Singleplayer Text Section--> */}
      <div className='container'>
        <section className='text-section panel' id='single-player'>
          <div className='title'>
            <h1>Single Player</h1>
          </div>
          <div className='text'>
            <p>
              Single player mode has a wide variety of offerings in Halo: Custom Edition.
              You can play the standard Halo: Combat Evolved campaign missions, custom missions,
              and even a fully revamped campaign known as CMT SPV3. <br /> <br />

              The single player mode offers hours of entertainment with new missions and modes
              coming out regularly.
            </p>
          </div>
        </section>
      </div>
      {/* <!--Featured Single Player Projects--> */}
      <div className='sp'>
        <h1 className='title-text'>Featured Single Player Projects</h1>
        <section className='card-list'>
          <div className='card'>
            <a href='https://www.reddit.com/r/halospv3/' target='_blank'>
              <img src={require('../images/spv3_6_full.jpg')} />
            </a>
            <h3>CMT SPV3</h3>
            <p>
            SPV3 is a total overhaul of the Halo 1 campaign for the PC. The mod
            includes new weapons, enemies, vehicles, areas, custom soundtracks, and
            easter eggs.
            </p>
          </div>
          <div className='card'>
            <a href='https://www.lumoriace.com' target='_blank'>
              <img src={require('../images/Lumoria_01.jpg')} />
            </a>
            <h3>Project Lumoria</h3>
            <p>
              Lumoria is a custom two part episodic experience for Halo: Custom Edition. The SPv3 team released
              a modified version of Lumoria with new content.
            </p>
          </div>
          <div className='card'>
            <a href='http://www.halomods.com/ips/index.php?/topic/850-cmts-the-silent-cartographer-evolved-release-beyond/'>
              <img src={require('../images/tsce-grunt.jpg')} />
            </a>
            <h3>The Silent Cartographer Evolved</h3>
            <p>
            The Silent Cartographer: Evolved, also referred as TSC:E, is a re-imagining of the Silent Cartographer.
            It was included in Halo SPv3.
            </p>
          </div>
        </section>
      </div>
      {/* <!--Firefight Text Section--> */}
      <div className='container'>
        <section className='text-section rocks' id='firefight'>
          <div className='title'>
            <h1>Firefight</h1>
          </div>
          <div className='text'>
            <p>
            This mode allows them to battle in multiple environments based on campaign maps,
            on foot or in vehicles, and against increasingly difficult waves of enemy attackers. <br /> <br />

            Many modes, maps, and varieties are avaliable to enhance the firefight experience.
            </p>
          </div>
        </section>
      </div>
      {/* <!--Featured Single Player Projects--> */}
      <div className='firefight'>
        <h1 className='title-text'>Featured Firefight Projects</h1>
        <section className='card-list'>
          <div className='card'>
            <a
              href='http://hce.halomaps.org/index.cfm?fid=6463'
              target='_blank'
            >
              <img src={require('../images/descent-1.jpg')} />
            </a>
            <h3>Descent</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a
              href='http://hce.halomaps.org/index.cfm?fid=5336'
              target='_blank'
            >
              <img src={require('../images/ff-portent.jpg')} />
            </a>
            <h3>Portent</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a href='https://haloce3.com/downloads/singleplayer/original-singleplayer/firefight-sector-09/'>
              <img src={require('../images/sector09/10screenshot00.jpg')} />
            </a>
            <h3>Sector 09</h3>
            <p>Fight the covenant as an ODST in the city of Mombassa!</p>
          </div>
        </section>
      </div>

      {/* <!--Multiplayer Text Section--> */}
      <div className='container'>
        <section className='text-section grass' id='multiplayer'>
          <div className='title'>
            <h1>Multiplayer</h1>
          </div>
          <div className='text'>
            <p>
              Multiplayer is a competitive player versus player mode allowing you to connect and play with people from across the world.
              Many dedicated servers exist to offer a wide variety of experiences. From vanilla slayer on bloodgulch to custom space battle
              experiences you will always have something to do. <br /> <br />
              
            </p>
          </div>
        </section>
      </div>
      {/* <!--Featured MultiPlayer Projects--> */}
      <div className='arrival'>
        <h1 className='title-text'>Featured Multiplayer Projects</h1>
        <section className='card-list'>
          <div className='card'>
            <a
              href='https://opencarnage.net/index.php?/topic/5838-bigassv3/'
              target='_blank'
            >
              <img src={require('../images/bigass-b.jpg')} />
            </a>
            <h3>Bigass</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a
              href='https://haloce3.com/downloads/multiplayer/original-multiplayer/intensity-beta-1-6/'
              target='_blank'
            >
              <img src={require('../images/intensity.jpg')} />
            </a>
            <h3>Intensity Beta 1.6</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a href='https://haloce3.com/downloads/multiplayer/original-multiplayer/arrival'>
              <img src={require('../images/arrival-2.jpg')} />
            </a>
            <h3>Arrival</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a href='https://haloce3.com/downloads/multiplayer/original-multiplayer/oni/'>
              <img src={require('../images/oni.jpg')} />
            </a>
            <h3>ONI</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
        </section>
      </div>
      {/* <!--HaloCE Addons Text Section--> */}
      <div className='container'>
        <section className='text-section snow' id='addons'>
          <div className='title'>
            <h1>Halo CE Addons</h1>
          </div>
          <div className='text'>
            <p>
              Halo: Custom Edition has many addons which add different
              functionality to the game. Many changes can be made to improve
              your game and tailor the experience to each invidivdual. <br />{' '}
              <br />
              <b>Client Addons:</b> Client addons change the players experience
              in the game. Changes such as graphics enhancement, field of view,
              fps increasing, and more are avaliable with various addons. <br />{' '}
              <br />
              <b>Server Addons:</b> Server addons will allow modification of the
              usually limiting server software. Functionality such as no
              leading, lua scripting, and more are avaliable through the server
              addons.
            </p>
          </div>
        </section>
      </div>
      {/* <!--Featured Addons --> */}
      <div className='addons'>
        <h1 className='title-text'>Recommended Halo: CE Addons</h1>
        <section className='card-list'>
          <div className='card'>
            <a
              href='http://client.haloanticheat.com/release.zip'
              target='_blank'
            >
              <img src='https://dummyimage.com/1900x1080/fff/000.png' />
            </a>
            <h3>Halo Anticheat 2 (HAC2)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a
              href='https://opencarnage.net/index.php?/topic/6916-chimera-build-49/'
              target='_blank'
            >
              <img src='https://dummyimage.com/1900x1080/fff/000.png' />
            </a>
            <h3>
              <a href='https://opencarnage.net/index.php?/topic/6916-chimera-build-49/'>
                Chimera
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a
              href='https://bitbucket.org/KornnerStudios/opensauce-release/wiki/Halo1/Doc_Halo1_Home'
              target='_blank'
            >
              <img src='https://dummyimage.com/1900x1080/fff/000.png' />
            </a>
            <h3>Open Sauce</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a href='http://halo.isimaginary.com/'>
              <img src='https://dummyimage.com/1900x1080/fff/000.png' />
            </a>
            <h3>Server App (SAPP)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
        </section>
      </div>
      {/* <!--Community Text Section--> */}
      <div className='container'>
        <section className='text-section cliffs' id='community'>
          <div className='title'>
            <h1>Community</h1>
          </div>
          <div className='text'>
            <p>
              The community is one of the best parts of Halo Custom Edition.
              Over a decade ago the community began and it is still strong to
              this day. All of the updates, addons, servers, and more are
              developed by the community. Great projects and maps have made the
              game a unique experience unlike any other game. <br /> <br />
              New content is being released every single day! Below you can find
              some of our picks of forums, creations, youtube channels, and
              more. Check it out!
            </p>
          </div>
        </section>
      </div>
      {/* <!--Featured Community --> */}
      <div className='community'>
        <h1 className='title-text'>Halo CE Community</h1>
        <section className='card-list'>
          <div className='card'>
            <a
              href='https://www.youtube.com/user/StormUndBlackbird?&ab_channel=StormUndBlackbird'
              target='_blank'
            >
              <img src={require('../images/maxresdefault.jpg')} />
            </a>
            <h3>Storm & Blackbird</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a href='https://haloce3.com/' target='_blank'>
              <img src='https://dummyimage.com/1900x1080/fff/000.png' />
            </a>
            <h3>CE3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a href='http://www.halomaps.org/' target='_blank'>
              <img src='https://dummyimage.com/1900x1080/fff/000.png' />
            </a>
            <h3>Halo Maps</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
          <div className='card'>
            <a href='https://opencarnage.net/'>
              <img src='https://dummyimage.com/1900x1080/fff/000.png' />
            </a>
            <h3>Open Carnage</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus et incidunt repellat.
            </p>
          </div>
        </section>
      </div>

      <footer>
        <h5>
          This website has no affiliation or connection with Bungie, 343
          Industries, or Microsoft Corporation. This is a fan site only.
        </h5>
        <h5>Website Design &copy; 2019, Nickster5000</h5>
      </footer>
    </div>
  );
};

export default LandingPage;
