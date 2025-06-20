import { useState } from 'react'
const sample = {
    reason: {
      path: "../assets/reason.jpg",
      text: `<strong><a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmJSN3NtR3V5dV9RWUNIX00tWmlTVE9DQ0J6d3xBQ3Jtc0tsbkZyeGE4RG83bmRxQXJzUDFxeGh5SlpxOFhnUWNRUEJfLUlRNGlVRWVaQ3J2Wm02SVVFcWpqV08zRkMtclpBc084S29iNUFQMWx1NU1IbFVGd0tscGM3Skh5SUYwTlJ6M3hGQ1hrM2FleVcweFBCbw&q=https%3A%2F%2Freason.com%2Fvideo%2F2023%2F01%2F24%2Fheroin-addiction-psychedelics-ayahuasca-therapy%2F&v=w6vnyJuHbi8" target="_blank">Does psychedelic therapy live up to the hype?  |  Dec8 Productions</a></strong>
        <p>Although the Van Tuinens have no official training or licensing, 
        they are part of a broader movement. 
        Therapists and researchers increasingly see psychedelics as an effective 
        way of treating addiction and related issues, and the Food and Drug 
        Administration is nearing approval of MDMA, psilocybin, and other 
        substances in therapeutic settings.
        </p><small>Associate Producer</small>`,
      category: 'editorial',
      name:`Pschedelic therapy`,
      asset:`<iframe width="560" height="315" src="https://www.youtube.com/embed/w6vnyJuHbi8?si=UafpkuYS9JyAauJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      assetType:"iframe"
    },
    essex: {
      path: "../assets/Essex_Hemphill.jpg",
      text: `<strong><i><a href="https://www.thecoffeehousedc.com/" target="_blank">Fierceness Served!</i>  |  Dec8 Productions</a></strong>
        <p>The Fierceness Served! The ENIKAlley Coffeehouse documentary focuses on 
        the local history of a Black LGBT performance venue, rehearsal space, 
        and meeting place for artists and political organizations in Washington, DC 
        from the 1980s to the mid-90s. It was the epicenter of a cultural renaissance 
        that paralleled The Harlem Renaissance.
        </p><small>Production Assistant Intern</small>`,
      category: 'editorial',
      name:`Fierceness Served!`,
      asset:["../assets/sample-assets/serve1.png", "../assets/sample-assets/serve2.png"],
      assetType:"gallery"
    },
    galaxy: {
      path: "../assets/amnh.gif",
      text: `<strong><a href="http://user.astro.columbia.edu/~esandford/keplerAtlas/home.html" target="_blank">Kepler Atlas | American Museum of Natural History</a></strong>
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
      asset:["../assets/sample-assets/unnamed-1.png", "../assets/sample-assets/unnamed.png"],
      assetType:"gallery"
    },
    strong: {
      path: "../assets/SafeStrong.jpg",
      text: `<strong> <i><a href="https://sbpress.com/2021/03/coming-back-safe-and-strong/" target="_blank">"Coming Back Safe and Strong"</i> | Stony Brook Press</a></strong>
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
      asset:"",
      assetType:"text"
    },
    mega: {
      path: "../assets/spaceman2.gif",
      text: `<strong><a href="https://www.usnews.com/topics/series/megatrends" target="_blank">ASCII gifs  |  U.S. News</a></strong>
        <p>As part of U.S. News & World Report's investing series on megatrends, 
        I contributed by creating ASCII GIFs to bring these concepts to life. 
        These GIFs were designed to add a dynamic and visually compelling element, 
        making trends like AI and the space race more captivating and interactive for readers. 
        Each GIF provided a unique visual perspective, enhancing reader engagement with 
        the future of investing in these transformative areas.
        </p><small>Digital Producer</small>`,
      category: 'web',
      name:`Megatrends`,
      asset:["../assets/sample-assets/earth.gif","../assets/sample-assets/ghost.gif","../assets/sample-assets/turbines.gif"], 
      assetType:"gallery"
    },
    network: {
      path: "../assets/heart.gif",
      text: `<strong><a href="">Network</a></strong>
        <p>I developed a clone of Twitter using Django, a powerful web framework in Python. 
        This project involved creating a platform that mimics key functionalities of Twitter, 
        such as user authentication, posting tweets, following users, and real-time updates. 
        By leveraging Django's robust features like ORM for database management, I ensured the clone was scalable and efficient. 
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
      text: `<strong><a href=""><a href="https://glitch.motherboard.live" target="_blank">Glitch Magazine</a> and<a href="https://cms-version1-0.onrender.com" target="_blank">Glitch CMS</a></strong>
        <p>A robust CMS and news platform built with Django, utilizing the Django ORM for efficient 
        data modeling and database management across shared models for articles, authors, 
        and section fronts. The platform supports customizable homepage layouts, 
        real-time search capabilities with Django Haystack, and rich-text content 
        editing via TinyMCE. User authentication is handled with Django Allauth, 
        featuring custom profile management and email verification. The CMS also tracks 
        and displays change history with Django Simple History, capturing user actions 
        and timestamps for auditability. Media assets are managed through integration with 
        DigitalOcean Spaces using Django-Storages, ensuring scalable and cloud-based file 
        storage
        </p><small>Software Developer</small>`,
      category: 'web', 
      name:`Glitch News and CMS`,
      asset:""
    },
  };
  
  const RenderProjects = () => {
    const [selectedSample, setSelectedSample] = useState(null);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [sampleAsset, setSampleAsset] = useState(null);
    const [assetType, setAssetType] = useState(null);
  
  
  
  
    const handleMouseOver = (key) => {
      setHoveredImage(sample[key].path);
    };
  
    const handleMouseOut = () => {
      setHoveredImage(null);
    };
  
    const handleClick = (key) => {
      setSelectedSample(sample[key].text);
      setSampleAsset(sample[key].asset)
      setAssetType(sample[key].assetType);
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
  
    const renderAssets = () => {
      if (assetType === 'image') {
        return <img src={sampleAsset} alt="sample-img" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />;
      } else if (assetType === 'gallery') {
        return (
          <div className="gallery">
            {sampleAsset.map((src, index) => (
              <img key={index} src={src} className={`gallery-img ${index+1}`} alt={`gallery img${index + 1}`} style={{ borderRadius:'5%', height: '200px', width: '200px', objectFit: 'cover' }} />
            ))}
          </div>
        );
      } else if (assetType === 'iframe') {
        return <div className="sample-vid" dangerouslySetInnerHTML={{ __html: sampleAsset }} />;
      } else {
        return null;
      }
    };
  
    return (
  
      
      <div id="container">
        
        <div id="projects">
          <div className="web">
            <h2><i>Web</i></h2>
            <ul>
              {renderItems('web')}
            </ul>
          </div>
  
          <div className="editorial">
            <h2><i>Editorial</i></h2>
            <ul>
              {renderItems('editorial')}
            </ul>
          </div>
  
        </div>
        {hoveredImage && (
          <img className="hovered" src={hoveredImage} alt="Hovered project" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
        )}
        {selectedSample && (
          <div className="bottom">
            <div id="exerpt">
              <div className="sample" dangerouslySetInnerHTML={{ __html: selectedSample }} />
              <div id="sample-assets" style={{ width: '70%'}}>
              {renderAssets()}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default RenderProjects;