import { useState } from 'react'
import './App.css'


const sample = {
  reason: {
    path: "../assets/reason.jpg",
    text: `<strong><a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmJSN3NtR3V5dV9RWUNIX00tWmlTVE9DQ0J6d3xBQ3Jtc0tsbkZyeGE4RG83bmRxQXJzUDFxeGh5SlpxOFhnUWNRUEJfLUlRNGlVRWVaQ3J2Wm02SVVFcWpqV08zRkMtclpBc084S29iNUFQMWx1NU1IbFVGd0tscGM3Skh5SUYwTlJ6M3hGQ1hrM2FleVcweFBCbw&q=https%3A%2F%2Freason.com%2Fvideo%2F2023%2F01%2F24%2Fheroin-addiction-psychedelics-ayahuasca-therapy%2F&v=w6vnyJuHbi8">Does psychedelic therapy live up to the hype?  |  Dec8 Productions</a></strong>
      <p>Although the Van Tuinens have no official training or licensing, 
      they are part of a broader movement. 
      Therapists and researchers increasingly see psychedelics as an effective 
      way of treating addiction and related issues, and the Food and Drug 
      Administration is nearing approval of MDMA, psilocybin, and other 
      substances in therapeutic settings.
      </p><small>Associate Producer</small>`,
    category: 'editorial',
    name:`Pschedelic therapy`,
    asset:`<iframe width="560" height="315" src="https://www.youtube.com/embed/w6vnyJuHbi8?si=UafpkuYS9JyAauJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  essex: {
    path: "../assets/Essex_Hemphill.jpg",
    text: `<strong><i><a href="https://www.thecoffeehousedc.com/">Fierceness Served!</i>  |  Dec8 Productions</a></strong>
      <p>The Fierceness Served! The ENIKAlley Coffeehouse documentary focuses on 
      the local history of a Black LGBT performance venue, rehearsal space, 
      and meeting place for artists and political organizations in Washington, DC 
      from the 1980s to the mid-90s. It was the epicenter of a cultural renaissance 
      that paralleled The Harlem Renaissance.
      </p><small>Production Assistant Intern</small>`,
    category: 'editorial',
    name:`Fierceness Served!`,
    asset:"../assets/serve1.png"
  },
  galaxy: {
    path: "../assets/amnh.gif",
    text: `<strong><a href="http://user.astro.columbia.edu/~esandford/keplerAtlas/home.html">Kepler Atlas | American Museum of Natural History</a></strong>
      <p>Interning at the American Museum of Natural History, 
      I contributed to the development of an interactive Kepler Exoplanet Atlas. 
      This digital platform showcases over 2,300 confirmed exoplanets discovered 
      by NASA's Kepler Space Telescope. The atlas explores these distant 
      worlds using data primarily gathered through the transit method, 
      which detects planets as they pass in front of their stars, 
      causing a temporary dimming of light. Users can explore each
      exoplanet's characteristics such as size, temperature, and proximity 
      to its host star, providing a glimpse into the diversity and potential 
      habitability of planetary systems beyond our solar system.
      </p><small>Astrophysics Intern</small>`,
    category: 'web',
    name:`Milkyway Map`,
    asset:""
  },
  strong: {
    path: "../assets/SafeStrong.jpg",
    text: `<strong> <i><a href="https://sbpress.com/2021/03/coming-back-safe-and-strong/">"Coming Back Safe and Strong"</i> | Stony Brook Press</a></strong>
      <p>I reported and wrote an article on Stony Brook University's Member Action Coalition SBU (MAC), 
      a caucus within the United University Professions (UUP) union, challenging the administration's 
      directive for professional staff to return to campus. Despite a statewide telecommuting agreement set to expire, 
      MAC argues the return order poses COVID-19 risks and could disproportionately impact caregivers, women, and people of color. 
      Over 100 individuals signed a petition opposing the return mandate, reflecting widespread concerns within the university 
      community. My reporting for the Stony Brook Press, where I advanced from writer to editor, earned me the Best Student 
      COVID Reporting award from the Long Island Press Club.  
      </p><small>Writer and Editor</small>`,
    category: 'editorial',
    name:`"Coming Back Safe and Strong"`,
    asset:""
  },
  mega: {
    path: "../assets/spaceman2.gif",
    text: `<strong><a href="https://www.usnews.com/topics/series/megatrends">ASCII gifs  |  U.S. News</a></strong>
      <p>As part of U.S. News & World Report's investing series on megatrends, 
      I contributed by creating ASCII GIFs to bring these concepts to life. 
      These GIFs were designed to add a dynamic and visually compelling element, 
      making trends like AI and the space race more captivating and interactive for readers. 
      Each GIF provided a unique visual perspective, enhancing reader engagement with 
      the future of investing in these transformative areas.
      </p><small>Digital Producer</small>`,
    category: 'web',
    name:`Megatrends`,
    asset:""
  },
  network: {
    path: "../assets/heart.gif",
    text: `<strong><a href="">Network</a></strong>
      <p>I developed a clone of Twitter using Django, a powerful web framework in Python. 
      This project involved creating a platform that mimics key functionalities of Twitter, 
      such as user authentication, posting tweets, following users, and real-time updates. 
      By leveraging Django's robust features like ORM for database management and Django Rest 
      Framework for API development, I ensured the clone was scalable and efficient. 
      The project aimed to provide a hands-on learning experience in web development while 
      exploring the architecture and design principles behind a popular social media platform 
      like Twitter.
      </p><small>Software Developer</small>`,
    category: 'web',
    name:`Network`,
    asset:""
  },
  circa: {
    path: "../assets/circa.gif",
    text: `<strong><a href="">Circa</a></strong>
      <p>A custom news site was developed using an API integration and a tailored CMS. 
      This project aimed to streamline content aggregation and publication processes by leveraging 
      API data feeds from reliable sources. The custom CMS enabled efficient content management, 
      including article creation, editing, and scheduling. By combining the API's dynamic content 
      with a user-friendly CMS interface, the news site provided curated and timely information to 
      its audience while optimizing editorial workflows behind the scenes.
      </p><small>Software Developer</small>`,
    category: 'web', 
    name:`Circa`,
    asset:""
  },
};

const App = () => {
  const [selectedSample, setSelectedSample] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [sampleAsset, setSampleAsset] = useState(null)

  const handleMouseOver = (key) => {
    setHoveredImage(sample[key].path);
  };

  const handleMouseOut = () => {
    setHoveredImage(null);
  };

  const handleClick = (key) => {
    setSelectedSample(sample[key].text);
    setSampleAsset(sample[key].asset)
  };

  const renderItems = (category) => {
    return Object.keys(sample)
      .filter(key => sample[key].category === category)
      .map((key) => (
        <li
          key={key}
          className={`porfolio-tile ${key}`}
          onMouseOver={() => handleMouseOver(key)}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick(key)}
        >
          ↵ {sample[key].name}
        </li>
      ));
  };

/*   const renderAssets = (asset) => {
    return Object.keys(sample)
    .filter(key => sample[key].asset {

    })
  } */

  return (
    <div id="container">
      
      <div id="projects">
        <div className="web">
          <h2>Web</h2>
          <ul>
            {renderItems('web')}
          </ul>
        </div>

        {selectedSample && (
          <div className="arrow bouncing">↓</div>
        )}

        <div className="editorial">
          <h2>Editorial</h2>
          <ul>
            {renderItems('editorial')}
          </ul>
        </div>

      </div>
      {hoveredImage && (
        <img src={hoveredImage} alt="Hovered project" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
      )}
      {selectedSample && (
        <div className="bottom">
          <div id="exerpt">
            <div className="sample" dangerouslySetInnerHTML={{ __html: selectedSample }} />
            {sampleAsset && (
              <div className="assets">
                {sampleAsset}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;