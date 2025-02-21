import React, { useEffect } from 'react';
import './home.css';
// import Navbar from '../Navbar/Navbar';
import Navbar from '../Navbar/Navbar.jsx';

const Home = () => {
  const toggleMovieDetails = (movieId) => {
    const movieDetails = document.getElementById(movieId);

    // Close any open movie details before opening a new one
    document.querySelectorAll(".movie-details").forEach((detail) => {
      if (detail !== movieDetails) {
        detail.style.display = "none";
      }
    });

    // Toggle visibility
    if (movieDetails.style.display === "none" || movieDetails.style.display === "") {
      movieDetails.style.display = "flex";
    } else {
      movieDetails.style.display = "none";
    }
  };

  const moveSlider = (direction) => {
    const slider = document.querySelector(".slider");
    const sliderList = document.querySelector(".list");
    const thumbnail = document.querySelector(".thumbnail");

    const sliderItems = sliderList.querySelectorAll(".item");
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    if (sliderItems.length === 0 || thumbnailItems.length === 0) {
      console.error("No items found in slider or thumbnail!");
      return;
    }

    slider.classList.remove("next", "prev");

    if (direction === "next") {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add("next");
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add("prev");
    }

    // Change the background dynamically based on the active item
    const newBackground = sliderList.querySelector(".item").getAttribute("data-bg");
    slider.style.backgroundImage = `url('${newBackground}')`;

    // Ensure buttons remain clickable
    setTimeout(() => {
      slider.classList.remove("next", "prev");
      document.getElementById("next").style.pointerEvents = "auto";
      document.getElementById("prev").style.pointerEvents = "auto";
    }, 500);
    
  };

  const updateThumbnailVisibility = () => {
    const thumbnailItems = document.querySelectorAll(".thumbnail .item");

    // Reset all to visible
    thumbnailItems.forEach((item) => {
      item.style.visibility = "visible";
      item.classList.remove("zoomed"); // Remove zoomed class on all items
    });

    // Always hide the 5th and 6th items
    if (thumbnailItems.length > 4) thumbnailItems[4].style.visibility = "hidden";
    if (thumbnailItems.length > 5) thumbnailItems[5].style.visibility = "hidden";

    // Add the zoom effect to the first visible image
    if (thumbnailItems.length > 0) {
      thumbnailItems[0].classList.add("zoomed"); // Enlarge the first item
    }
  };

  useEffect(() => {
    // Ensure all movie details are hidden when the page loads
    document.querySelectorAll(".movie-details").forEach((detail) => {
      detail.style.display = "none";
    });

    // Add event listeners for next and previous buttons
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    if (nextBtn && prevBtn) {
      nextBtn.onclick = () => {
        moveSlider("next");
        updateThumbnailVisibility();
      };

      prevBtn.onclick = () => {
        moveSlider("prev");
        updateThumbnailVisibility();
      };
    }

    // Call this function on page load
    updateThumbnailVisibility();
  }, []);


  return (
    <>

    <Navbar/>

    <div className="slider">
        <div className="list">

           {/* Movie 1 */}
         < div className="item">
          <video autoPlay loop muted>
            <source src="\src\assets\Video\video1.mp4" type="video/mp4" />
          </video>
          <div className="content">
            <div className="title">The Bad Guys 2</div>
            <div className="topic">Releases August 1, 2025</div>
            <div className="desc">
              The Bad Guys are struggling to find trust and acceptance in their newly minted
              lives as Good Guys, when they are pulled out of retirement and forced to do "one last job"
              by an all-female squad of criminals.
            </div>
            <div className="buttons">
              <button onClick={() => toggleMovieDetails('movie1')}>SEE MORE</button>
            </div>
            {/* Movie 1 Details */}
            <div id="movie1" className="movie-details">
              <div className="movie-poster">
                <img src="\src\assets\images\poster1.jpg" alt="Movie 1 poster" />
              </div>
              <div className="movie-info">
                <h1 className="movie-title">The Bad Guys 2</h1>
                <div className="genre-tags">
                  <span>Animation</span>
                  <span>Comedy</span>
                  <span>Adventure</span>
                  <span>Heist</span>
                  <span>Family</span>
                </div>
                <p className="storyline">
                  The Bad Guys—Mr. Wolf, Mr. Snake, Mr. Shark, Mr. Piranha, and Ms.
                  Tarantula—have reformed and are trying to live good lives. Their
                  peace is shattered when the Bad Girls, a group of notorious female criminals,
                  recruit them for one final heist. The team is thrust back into the criminal world.
                  They must navigate their old habits while learning to trust each other and decide if they can stay on the right path.
                </p>
                <h2>Casts</h2>
                <div className="cast-list">
                  <div className="cast">
                    <img src="\src\assets\images\actor1.png" alt="actor1" />
                    <p>Mr.Wolf</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor2.png" alt="actor2" />
                    <p>Mr.Snake</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor3.png" alt="actor3" />
                    <p>Ms.Tarantula</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor4.png" alt="actor4" />
                    <p>Mr.Shark</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor5.png" alt="actor5" />
                    <p>Mr.Pirahna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Movie 2 */}
        <div className="item">
          <video autoPlay loop muted>
            <source src="\src\assets\Video\video2.mp4" type="video/mp4" />
          </video>
          <div className="content">
            <div className="title">How to Train Your Dragon</div>
            <div className="topic">Releases June 13, 2025</div>
            <div className="desc">
              Follows a young Viking as he aspires to hunt dragons, and how he unexpectedly
              becomes a friend of a young dragon.
            </div>
            <div className="buttons">
              <button onClick={() => toggleMovieDetails('movie2')}>SEE MORE</button>
            </div>
            {/* Movie 2 Details */}
            <div id="movie2" className="movie-details">
              <div className="movie-poster">
                <img src="\src\assets\images\poster2.png" alt="Movie 2 poster" />
              </div>
              <div className="movie-info">
                <h1 className="movie-title">How to Train Your Dragon</h1>
                <div className="genre-tags">
                  <span>Action</span>
                  <span>Drama</span>
                  <span>Adventure</span>
                  <span>Fantasy</span>
                  <span>Family</span>
                </div>
                <p className="storyline">
                  In the live-action adaptation of How to Train Your Dragon, young Viking Hiccup
                  befriends a dragon named Toothless, challenging his village's belief that dragons
                  are enemies. Together, they strive to change perceptions and foster harmony between their peoples.
                </p>
                <h2>Casts</h2>
                <div className="cast-list">
                  <div className="cast">
                    <img src="\src\assets\images\actor12.png" alt="actor1" />
                    <p>Astrid Parker</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor13.png" alt="actor2" />
                    <p>Hiccup Horrendous</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor14.png" alt="actor3" />
                    <p>Stoick the vast</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor15.png" alt="actor4" />
                    <p>Gueulfor</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor16.png" alt="actor5" />
                    <p>Ruffnut</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Movie 3 */}
        <div className="item">
          <video autoPlay loop muted>
            <source src="\src\assets\Video\video3.mp4" type="video/mp4" />
          </video>
          <div className="content">
            <div className="title">Elio</div>
            <div className="topic">Releases June 13, 2025</div>
            <div className="desc">
              Elio, a space fanatic with an active imagination, finds himself on
              a cosmic misadventure where he must form new bonds with alien lifeforms,
              navigate a crisis of intergalactic proportions and somehow discover who he is
              truly meant to be.
            </div>
            <div className="buttons">
              <button onClick={() => toggleMovieDetails('movie3')}>SEE MORE</button>
            </div>
            {/* Movie 3 Details */}
            <div id="movie3" className="movie-details">
              <div className="movie-poster">
                <img src="\src\assets\images\poster3.png" alt="Movie 3 poster" />
              </div>
              <div className="movie-info">
                <h1 className="movie-title">Elio</h1>
                <div className="genre-tags">
                  <span>Alien invasion</span>
                  <span>Space Sci-Fi</span>
                  <span>Adventure</span>
                  <span>Animation</span>
                  <span>Drama</span>
                </div>
                <p className="storyline">
                  Elio, an 11-year-old space enthusiast, is mistakenly chosen as Earth's
                  ambassador by an intergalactic organization called the Communiverse.
                  As he embarks on a cosmic adventure, Elio forms bonds with eccentric
                  aliens and faces a crisis that challenges his sense of purpose. Throughout
                  his journey, Elio seeks to understand his true self and redefine his destiny in the vast universe.
                </p>
                <h2>Casts</h2>
                <div className="cast-list">
                  <div className="cast">
                    <img src="\src\assets\images\actor31.png" alt="actor1" />
                    <p>Elio</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor32.png" alt="actor2" />
                    <p>Olga Solis</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor33.png" alt="actor3" />
                    <p>Ambassador Questa</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor34.png" alt="actor4" />
                    <p>Lord Grigon</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor35.png" alt="actor5" />
                    <p>Olga Solis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


         {/* Movie 4 */}
         <div className="item">
          <video autoPlay loop muted>
            <source src="\src\assets\Video\video4.mp4" type="video/mp4" />
          </video>
          <div className="content">
            <div className="title">Dog Man</div>
            <div className="topic">Releases January 31, 2025</div>
            <div className="desc">
              Dog Man, half dog and half man, is sworn to protect and serve as
              he doggedly pursues the feline supervillain Petey the Cat.
            </div>
            <div className="buttons">
              <button onClick={() => toggleMovieDetails('movie4')}>SEE MORE</button>
            </div>
            {/* Movie 4 Details */}
            <div id="movie4" className="movie-details">
              <div className="movie-poster">
                <img src="\src\assets\images\poster4.png" alt="Movie 4 poster" />
              </div>
              <div className="movie-info">
                <h1 className="movie-title">Dog Man</h1>
                <div className="genre-tags">
                  <span>crime</span>
                  <span>SuperHero</span>
                  <span>Adventure</span>
                  <span>Animation</span>
                  <span>Drama</span>
                </div>
                <p className="storyline">
                  Dog Man is born when a life-saving surgery fuses a police officer with
                  his dog, creating a unique half-dog, half-man hero. He patrols his city
                  with bravery until his nemesis, Petey the Cat, clones himself and unleashes
                  chaos. In the midst of the turmoil, Dog Man discovers the true power of friendship,
                  responsibility, and family.
                </p>
                <h2>Casts</h2>
                <div className="cast-list">
                  <div className="cast">
                    <img src="\src\assets\images\actor41.png" alt="actor1" />
                    <p>Petey</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor42.png" alt="actor2" />
                    <p>Chief</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor43.png" alt="actor3" />
                    <p>Butler</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor44.png" alt="actor4" />
                    <p>Sarah Hatoff</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor45.png" alt="actor5" />
                    <p>Flippy the Fish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



            {/* Movie 5 */}
        <div className="item">
          <video autoPlay loop muted>
            <source src="\src\assets\Video\video5.mp4" type="video/mp4" />
          </video>
          <div className="content">
            <div className="title">Kayara</div>
            <div className="topic">Releases March 30, 2025</div>
            <div className="desc">
              A young Inca girl dreams of joining the all-male Chasqui messenger
              group. She challenges traditions and gender norms to pursue her ambition against all
              odds.
            </div>
            <div className="buttons">
              <button onClick={() => toggleMovieDetails('movie5')}>SEE MORE</button>
            </div>
            {/* Movie 5 Details */}
            <div id="movie5" className="movie-details">
              <div className="movie-poster">
                <img src="\src\assets\images\poster5.png" alt="Movie 5 poster" />
              </div>
              <div className="movie-info">
                <h1 className="movie-title">Kayara</h1>
                <div className="genre-tags">
                  <span>Action</span>
                  <span>Family</span>
                  <span>Adventure</span>
                  <span>Animation</span>
                  <span>Drama</span>
                </div>
                <p className="storyline">
                  In the upcoming animated film "Kayara" (2025), a courageous 16-year-old Inca
                  girl named Kayara dreams of joining the elite, all-male Chasqui messenger group.
                  Defying tradition, she disguises herself as a man to compete in the Messenger
                  Race before the Incan Emperor. Upon revealing her true identity, she faces
                  potential punishment, but gains unexpected support from the young prince, Paullu.
                  Through her journey, Kayara not only proves her capabilities but also uncovers the ancient stories of her land and people.
                </p>
                <h2>Casts</h2>
                <div className="cast-list">
                  <div className="cast">
                    <img src="\src\assets\images\actor51.png" alt="actor1" />
                    <p>Kayara</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor52.png" alt="actor2" />
                    <p>Martin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Movie 6 */}
        <div className="item">
          <video autoPlay loop muted>
            <source src="\src\assets\Video\video6.mp4" type="video/mp4" />
          </video>
          <div className="content">
            <div className="title">The Witcher: Sirens of the Deep</div>
            <div className="topic">Releases February 11, 2025</div>
            <div className="desc">
              Hired to probe seaside village attacks, mutant monster hunter
              Geralt unravels an age-old conflict between humans and sea people that threatens
              war between kingdoms. Aided by allies, he must solve the mystery before hostilities escalate.
            </div>
            <div className="buttons">
              <button onClick={() => toggleMovieDetails('movie6')}>SEE MORE</button>
            </div>
            {/* Movie 6 Details */}
            <div id="movie6" className="movie-details">
              <div className="movie-poster">
                <img src="\src\assets\images\poster6.png" alt="Movie 6 poster" />
              </div>
              <div className="movie-info">
                <h1 className="movie-title">The Witcher: Sirens of the Deep</h1>
                <div className="genre-tags">
                  <span>Anime</span>
                  <span>Mystery</span>
                  <span>Adventure</span>
                  <span>Animation</span>
                  <span>Fantasy</span>
                </div>
                <p className="storyline">
                  In "The Witcher: Sirens of the Deep," Geralt of Rivia, a mutated monster
                  hunter, is hired to investigate attacks in a seaside village. He uncovers a
                  centuries-old conflict between humans and merpeople, threatening to escalate
                  into war. With the help of allies like Jaskier and Yennefer, Geralt must navigate
                  political tensions and ancient grudges to prevent catastrophe. Along the way, he
                  confronts moral dilemmas and the complexities of interspecies relations.
                </p>
                <h2>Casts</h2>
                <div className="cast-list">
                  <div className="cast">
                    <img src="\src\assets\images\actor61.png" alt="actor1" />
                    <p>Geralt of Rivia</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor62.png" alt="actor2" />
                    <p>Yennefer</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor63.png" alt="actor3" />
                    <p>Jaskier</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor64.png" alt="actor4" />
                    <p>Essi Daven</p>
                  </div>
                  <div className="cast">
                    <img src="\src\assets\images\actor65.png" alt="actor5" />
                    <p>Various</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Arrows */}
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        <div className="item">
          <img src="\src\assets\images\image1.jpg" alt="Thumbnail 1" />
        </div>
        <div className="item">
          <img src="\src\assets\images\image2.png" alt="Thumbnail 2" />
        </div>
        <div className="item">
          <img src="\src\assets\images\image3.png" alt="Thumbnail 3" />
        </div>
        <div className="item">
          <img src="\src\assets\images\image4.png" alt="Thumbnail 4" />
        </div>
        <div className="item">
          <img src="\src\assets\images\image5.png" alt="Thumbnail 5" />
        </div>
        <div className="item">
          <img src="\src\assets\images\image6.png" alt="Thumbnail 6" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;



