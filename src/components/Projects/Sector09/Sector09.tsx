import React from 'react';
import './style.css';

const Sector09: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className='intro'>
        <h1>Welcome to Sector09 V2.</h1>
      </section>
      <div className='background'>
        <h1 className='title'>
          <i>Today is the last day of your life.</i>
        </h1>
        <section className='card'>
          <p className='container'>
            Sector09 V2 is a new take on the original Sector 09, a Halo 3: ODST
            themed firefight for Halo Custom Edition. You will learn quickly in
            Sector 09 V2 that there are a unique variety of enemies that will
            attack you at every corner. Sector 09 V2 promises that every
            firefight experience is unique. This is because Sector 09 V2 is
            designed to spawn enemies randomly.
          </p>
        </section>

        {/* <!--Firefight Wave Progression--> */}
        <h1 className='title'>Sector 09 Wave Progression</h1>
        <section className='firefight-information card'>
          <p className='container'>
            As mentioned previously, this firefight takes a major inspiration
            from Halo 3: ODST. It behaves and functions very similar to Halo 3:
            ODST. Defeating five waves completes one round, and defeating three
            rounds completes one set.The first two sets in Sector 09 are
            considered to be "normal" difficulty. However, once you begin Set 3
            (Wave 31), "Legendary mode" will activate. This guarantees that the
            firefight will send you the most difficult, challenging, and most
            importantly fun encounters that Sector 09 has to offer.
          </p>
        </section>
        <h1 className='title'>Sector 09 Ranking</h1>
        <section className='firefight-ranks card'>
          <ul className='ranking-list container'>
            <li>Survive Wave 1 -- Private</li>
            <li>Survive Wave 5 -- Corporal</li>
            <li>Survive Wave 15 -- Sergeant</li>
            <li>Survive Wave 30 -- Warrant Officer</li>
            <li>Survive Wave 60 -- Captain</li>
            <li>Survive wave 100 -- General</li>
          </ul>
        </section>
        <h1 className='title'>History of Sector 09</h1>
        <section className='history'>
          <ul className='card'>
            <h2>2012</h2>
            <p className='container'>
              -Firefight Sector 09 was conceived
              <br />
              -Massive BSP provided many opportunities, including the idea of
              minigames
              <br />
              -Unfortunately, the BSP size would prove too large, and would
              later be redesigned several times.
            </p>
            <h2>2014</h2>
            <p className='container'>
              -Alpha video is released <br />
              -New BSP is designed after many issues (Gameplay, Scale, ETC.)
              <br />
              -However, this new BSP would prove to be too claustrophobic and
              even worse gameplay. <br />
              -Motivation is very slim
            </p>
            <h2>2015</h2>
            <p className='container'>
              -Polyonymous is formed, with members from VKMT. <br />
              -Polyonymous attempts to finish Sector 09 as an easy project for
              the young mapping team. <br />
              -New BSP is designed, which would take stage in CE3 2015 <br />
              -Sector 09 reaches points never achieved before, with the CE3 2015
              trailer. <br />
              -Unfortunately, in October of 2015, Polyonymous breaks up due to
              personal issues, and production on Sector 09 is halted.
            </p>
            <h2>2016</h2>
            <p className='container'>
              -Nickster5000 draws up, yet again, a new BSP concept and decides
              to model it to see how it looks in Halo CE.
              <br />
              -The results of the new BSP are absolutely phenomenal <br />
              -After new encounters are tested, gameplay proves to be very fun
              <br />
              -All resources / Efforts are combined from last 4 years of Sector
              09 development into this version. <br />
              <strong>
                {' '}
                -Sector 09 is released during CE3 2016 on 8/20/16
              </strong>
            </p>
            <h2>2019</h2>
            <p className='container'>-Forgot a raincoat?</p>
          </ul>
        </section>
        {/* <!--Links--> */}
        <h1 className='title'>Links</h1>
        <section className='links'>
          <ul className='card'>
            <li>
              <a
                className='nav-btn'
                href='http://forum.halomaps.org/index.cfm?page=topic&topicID=49661'
                target='_blank'
              >
                Halomaps Thread
              </a>
            </li>
            <li>
              <a
                className='nav-btn'
                href='https://opencarnage.net/index.php?/topic/5584-project-sector-09/#comment-77472'
                target='_blank'
              >
                OpenCarnage Thread
              </a>
            </li>
            <li>
              <a
                className='nav-btn'
                href='https://haloce3.com/downloads/singleplayer/original-singleplayer/firefight-sector-09/'
                target='_blank'
              >
                Download Firefight: Sector 09 Here!
              </a>
            </li>
          </ul>
        </section>
        <section className='footer'>
          Copyright &copy; 2019, Nickster5000
        </section>
      </div>
    </React.Fragment>
  );
};

export default Sector09;
