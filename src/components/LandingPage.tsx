import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../css/landingpage.css';

const scrolling = {
  duration: 800,
  offset: 1,
  smooth: true
};

const LandingPage: React.FunctionComponent = () => {
  return (
    <div className='page'>
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
            <Link
              to='single-player'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              href='#'
            >
              <img src={require('../images/1_full.jpg')} />
            </Link>
            <h3>Single Player</h3>
            <p>
              Fully featured single player missions that offer unique campaign
              stories and fun enemies to fight!
            </p>
          </div>
          <div className='card'>
            <Link
              to='firefight'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              href='#'
            >
              <img src={require('../images/descent-1.jpg')} />
            </Link>
            <h3>Firefight</h3>
            <p>
              Firefight is a take on Halo 3: ODST's game mode, allowing players
              to go up against waves of enemy attackers.
            </p>
          </div>
          <div className='card'>
            <Link
              to='multiplayer'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              href='#'
            >
              <img src={require('../images/precipice.png')} />
            </Link>
            <h3>Multiplayer</h3>
            <p>
              Multiplayer allows you to fight friends and other players on a
              wide variety of dedicated servers.
            </p>
          </div>
          <div className='card'>
            <Link
              to='addons'
              smooth={scrolling.smooth}
              offset={scrolling.offset}
              duration={scrolling.duration}
              href='#'
            >
              <img src={require('../images/halo.jpg')} />
            </Link>
            <h3>Addons</h3>
            <p>
              Addons will add new features that will change or enhance your
              gameplay.
            </p>
          </div>
          <div className='card'>
            <img src={require('../images/nuclear-b.png')} />
            <h3>Create your own maps!</h3>
            <p>
              Halo Editing Kit (HEK) is the tool that allows you to create
              custom content for Halo: Custom Edition.{' '}
              <a
                className='link'
                target='_blank'
                href='HEK_Tutorial/index.html'
              >
                Get started here.
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
              In Halo Custom Edition Single Player missions, you can fight
              against challenging enemies in a variety of missions. You can play
              the original Halo Combat Evolved Campaign, custom campaigns, and
              custom missions created by various members of the community. The
              single player mode offers hours of entertainment!
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
              SPV3 is a total overhaul of the Halo Combat Evolved. The mod
              includes a variety of new custom content.
            </p>
          </div>
          <div className='card'>
            <a href='https://www.lumoriace.com' target='_blank'>
              <img src={require('../images/Lumoria_01.jpg')} />
            </a>
            <h3>Project Lumoria</h3>
            <p>
              Lumoria is an immersive two-part custom campaign that features
              custom environments.
            </p>
          </div>
          <div className='card'>
            <a
              href='http://www.halomods.com/ips/index.php?/topic/850-cmts-the-silent-cartographer-evolved-release-beyond/'
              target='_blank'
            >
              <img src={require('../images/tsce-grunt.jpg')} />
            </a>
            <h3>The Silent Cartographer Evolved</h3>
            <p>
              The Silent Cartographer: Evolved (TSC:E) is a re-imagining of Halo
              Combat Evolved's Silent Cartographer
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
              This is the exact game mode that was introduced in Halo 3: ODST.
              Firefight allows players to battle against increasingly difficult
              waves of enemies in unique environments. In Halo Custom Edition,
              users have added their own spin on the concept of firefight.
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
              Defend your forerunner base from covenant enemies that descend
              down the gravity lift.
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
              Eliminate covenant enemies to earn credits. Players can use
              credits to buy weapons and upgrades!
            </p>
          </div>
          <div className='card'>
            <a href='sector09/index.html' target='blank'>
              <img src={require('../images/sector09/sector09v2-4.jpg')} />
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
              Halo Custom Edition was built for Multiplayer. There are a variety
              of gamemodes including Slayer, Caputre the Flag, Race, King of the
              Hill, and Oddball. You can expect to play with players all around
              the world on fun dedicated servers hosting a variety of maps and
              game modes.
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
              Fight your friends on a large, expansive map. Includes a Battle
              Royale game mode.
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
              Fight your friends on a remarkable forerunner structure. Inspired
              by the original Intensity by CMT.
            </p>
          </div>
          <div className='card'>
            <a
              href='https://haloce3.com/downloads/multiplayer/original-multiplayer/arrival'
              target='_blank'
            >
              <img src={require('../images/arrival-2.jpg')} />
            </a>
            <h3>Arrival</h3>
            <p>
              Fight your friends in the middle of a lush, gorgeous forerunner
              forest.
            </p>
          </div>
          <div className='card'>
            <a
              href='https://haloce3.com/downloads/multiplayer/original-multiplayer/oni/'
              target='_blank'
            >
              <img src={require('../images/oni.jpg')} />
            </a>
            <h3>ONI</h3>
            <p>
              Fight your friends in a large human structure built by ONI.
              Inspired from Halo Reach.
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
              functionality to the game. Addons serve to improve your game and
              tailor the experience to each invidivdual. There are two types of
              addons in Halo Custom Edition. <strong>Client addons</strong>{' '}
              change the players experience in the game. Some enhancements
              include post processing, graphics, field of view, FPS increases,
              and much more with various addons. <strong>Server addons</strong>{' '}
              allow modification of Halo's multiplayer server software. Server
              admins can add complex functionality to their servers such as no
              leading, lua scripting, and much more with various addons.
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
              <img src={require('../images/halo.jpg')} />
            </a>
            <h3>Halo Anticheat 2 (HAC2)</h3>
            <p>
              A mod that adds things like the ability to change fov, save server
              bookmarks, cache maps for a quicker gameload, halo reach style
              medals, custom chat and more.
            </p>
          </div>
          <div className='card'>
            <a
              href='https://opencarnage.net/index.php?/topic/6916-chimera-build-49/'
              target='_blank'
            >
              <img src={require('../images/halo.jpg')} />
            </a>
            <h3>
              <a
                href='https://opencarnage.net/index.php?/topic/6916-chimera-build-49/'
                target='_blank'
              >
                Chimera
              </a>
            </h3>
            <p>
              This mod adds interpolation to the game so that animations look
              smooth on framerates higher than 30. Other, mainly graphical,
              features are available.
            </p>
          </div>
          <div className='card'>
            <a
              href='https://bitbucket.org/KornnerStudios/opensauce-release/wiki/Halo1/Doc_Halo1_Home'
              target='_blank'
            >
              <img src={require('../images/halo.jpg')} />
            </a>
            <h3>Open Sauce</h3>
            <p>
              A mod that adds extended graphical capability, memory
              enchancements, scripting addons, and much more new functionality
              to the game.
            </p>
          </div>
          <div className='card'>
            <a href='http://halo.isimaginary.com/' target='_blank'>
              <img src={require('../images/halo.jpg')} />
            </a>
            <h3>Server App (SAPP)</h3>
            <p>
              Addon for dedicated servers containing server management tools,
              event scripting, lua scripting, removes cd-key check and makes
              life a lot easier.
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
              game a unique experience unlike any other game. New content is
              being released every single day! Below you can find some of our
              picks of forums, creations, youtube channels, and more. Check it
              out!
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
              Popular Halo CE youtube channel known for playing custom maps.
            </p>
          </div>
          <div className='card'>
            <a href='https://haloce3.com/' target='_blank'>
              <img src={require('../images/ce3.jpg')} />
            </a>
            <h3>CE3</h3>
            <p>
              Website designed to archive maps and files relating to Halo CE.
            </p>
          </div>
          <div className='card'>
            <a href='http://www.halomaps.org/' target='_blank'>
              <img src={require('../images/halo.jpg')} />
            </a>
            <h3>Halo Maps</h3>
            <p>
              One of the largest and oldest repositories of Halo CE maps, tools,
              and more. Many resources can be found here as well as a forum.
            </p>
          </div>
          <div className='card'>
            <a href='https://opencarnage.net/' target='_blank'>
              <img src={require('../images/halo.jpg')} />
            </a>
            <h3>Open Carnage</h3>
            <p>
              Halo forum housing a very active community. Developers, mappers,
              and players can come together here to discuss the game.
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
