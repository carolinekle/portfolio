import { useState } from 'react'
const sample = {
    dog: {
      path: "../assets/wave.gif",
      text: `<strong><a href="https://huggingface.co/spaces/carolineklew/dogwhistle" target="_blank">Dog Ear </a></strong>
        <p> A fine-tuned RoBERTa classifier for dogwhistle ideology attribution, 
        benchmarked against Llama Guard 3 and OpenAI Moderation on the SALT-NLP silent_signals 
        dataset (16,199 examples). Production safety APIs miss 82% of labeled dogwhistle content, 
        with LG3 at 0% recall on politically coded language like "liberal" and "climate change denier," 
        while the fine-tuned model achieves 93.6% macro-F1 across 17 ideological categories. The project 
        includes a complete data pipeline, manual PyTorch training loop, and a deployed FastAPI web app 
        with the model hosted on Hugging Face.
        </p><small>Astrophysics Intern</small>`,
      category: 'web',
      name:`Dog Ear`,
      asset:"",
      assetType:"text"
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
    mega: {
      path: "../assets/spaceman2.gif",
      text: `<strong><a href="https://www.usnews.com/topics/series/megatrends" target="_blank">ASCII gifs  |  U.S. News</a></strong>
        <p>As part of U.S. News & World Report's investing series on megatrends, 
        I contributed by creating ASCII GIFs to bring these concepts to life. 
        These GIFs were designed to add a dynamic and visually compelling element, 
        making trends like AI and the space race more captivating and interactive for readers. 
        Each GIF provided a unique visual perspective, enhancing reader engagement with 
        the future of investing in these transformative areas.
        </p><small>Digital Producer and Developer</small>`,
      category: 'web',
      name:`Megatrends`,
      asset:["../assets/sample-assets/earth.gif","../assets/sample-assets/ghost.gif","../assets/sample-assets/turbines.gif"], 
      assetType:"gallery"
    },
    circa: {
      path: "../assets/circa.gif",
      text: `<strong><a href="https://glitch.motherboard.live" target="_blank">Glitch News</a> and <a href="https://glitch-cms.motherboard.live/login?next=/" target="_blank">Glitch CMS</a></strong>
        <p>A robust CMS and news platform built with Django, utilizing the Django ORM for efficient 
        data modeling and database management across shared models for articles, authors, 
        and section fronts. The platform supports customizable homepage layouts, 
        real-time search capabilities with Django Haystack, and rich-text content 
        editing via TinyMCE. User authentication is handled with Django Allauth, 
        featuring custom profile management and email verification. The CMS also tracks 
        and displays change history with Django Simple History, capturing user actions 
        and timestamps for auditability. Media assets are managed through integration with 
        DigitalOcean Spaces using Django-Storages, ensuring scalable and cloud-based file 
        storage.
        </p><small>Software Engineer</small>`,
      category: 'web',
      name:`Glitch News and CMS`,
      asset:"",
      assetType:"text"
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
      setSampleAsset(sample[key].asset);
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
            <ul>
              {renderItems('web')}
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