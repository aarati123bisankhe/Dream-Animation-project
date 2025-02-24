import React, { useEffect } from 'react';
import './MovieSection.css'; // Assuming you have a CSS file for styling

const MovieSection = () => {
    const movies = {
        "Movie1": { detailId: "movie1", videoSrc: "/src/assets/Video/section1.mp4" },
        "Movie2": { detailId: "movie2", videoSrc: "/src/assets/Video/section2.mp4" },
        "Movie3": { detailId: "movie3", videoSrc: "/src/assets/Video/section3.mp4" },
        "Movie4": { detailId: "movie4", videoSrc: "/src/assets/Video/section4.mp4" },
        "Movie5": { detailId: "movie5", videoSrc: "/src/assets/Video/section5.mp4" },
        "Movie6": { detailId: "movie6", videoSrc: "/src/assets/Video/section6.mp4" },
        "Movie7": { detailId: "movie7", videoSrc: "/src/assets/Video/section7.mp4" },
        "Movie8": { detailId: "movie8", videoSrc: "/src/assets/Video/section8.mp4" },
        "Movie9": { detailId: "movie9", videoSrc: "/src/assets/Video/section9.mp4" },
        "Movie10": { detailId: "movie10", videoSrc: "/src/assets/Video/section10.mp4" },
        "Movie11": { detailId: "movie11", videoSrc: "/src/assets/Video/section11.mp4" },
        "Movie12": { detailId: "movie12", videoSrc: "/src/assets/Video/section12.mp4" },
        "Movie13": { detailId: "movie13", videoSrc: "/src/assets/Video/section13.mp4" },
        "Movie14": { detailId: "movie14", videoSrc: "/src/assets/Video/section14.mp4" },
        "Movie15": { detailId: "movie15", videoSrc: "/src/assets/Video/section15.mp4" },
        "Movie16": { detailId: "movie16", videoSrc: "/src/assets/Video/section16.mp4" }
    
    };
    
    const openMovieDetail = (img) => {
        const movieKey = img.alt;
        if (movies[movieKey]) {
          document.getElementById(movies[movieKey].detailId).style.display = "block";
        }
      };
    
      const closeMovieDetail = (movieId) => {
        document.getElementById(movieId).style.display = "none";
      };
    
      const playVideo = (btn) => {
        const movieDetail = btn.closest(".modal");
        const videoModal = document.getElementById("videoModal");
        const videoPlayer = document.getElementById("movieVideo");
    
        const allMovies = document.querySelectorAll(".modal");
        allMovies.forEach((modal) => {
          modal.style.zIndex = "100";
        });
    
        for (let key in movies) {
          if (movies[key].detailId === movieDetail.id) {
            videoPlayer.src = movies[key].videoSrc;
            break;
          }
        }
    
        videoModal.style.display = "block";
        videoPlayer.play();
        movieDetail.style.zIndex = "2";
      };
    
      const closeVideo = () => {
        const videoModal = document.getElementById("videoModal");
        const videoPlayer = document.getElementById("movieVideo");
        videoPlayer.pause();
        videoPlayer.src = "";
        videoModal.style.display = "none";
      };
    
      // If you want to add event listeners to images, consider using useEffect
      useEffect(() => {
        const imageElements = document.querySelectorAll(".movie-track img");
        imageElements.forEach(img => {
          img.addEventListener("mousedown", () => {
            img.classList.add("active");
          });
          img.addEventListener("mouseup", () => {
            setTimeout(() => {
              img.classList.remove("active");
            }, 200);
          });
        });
        // Cleanup event listeners on unmount
        return () => {
          imageElements.forEach(img => {
            img.removeEventListener("mousedown", () => {});
            img.removeEventListener("mouseup", () => {});
          });
        };
      }, []);

  return (
    <div>
      <h1>Movie Section</h1>

      <div className="slider-container">
        <div className="movie-slider">
          <div className="movie-track">

          <img src="\src\assets\images\section1.png" alt="Movie1" onClick={(e) => openMovieDetail(e.target)}/>
            
          <img src="\src\assets\images\section2.png" alt="Movie2" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section3.png" alt="Movie3" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section4.png" alt="Movie4" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section5.png" alt="Movie5" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section6.png" alt="Movie6" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section7.png" alt="Movie7" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section8.png" alt="Movie8" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section9.png" alt="Movie9" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section10.png" alt="Movie10" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section11.png" alt="Movie11" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section12.png" alt="Movie12" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section13.png"  alt="Movie13" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section14.png" alt="Movie14" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section15.png" alt="Movie15" onClick={(e) => openMovieDetail(e.target)}/>

          <img src="\src\assets\images\section16.png" alt="Movie16" onClick={(e) => openMovieDetail(e.target)}/>

          </div>
        </div>
      </div>



      {/* Movie1 Detail Modal */}
      <div id="movie1" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeMovieDetail("movie1")}>&times;</span>
          <div className="modal-container">
            <div className="poster">
              <img id="moviePoster" src="\src\assets\images\sectionpo1.png" alt="Movie1 Poster"/>
              <buttons className="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
            </div>
            <div className="Movie-detail">
              <h3 id="movieTitle">The wild Robort (2024)</h3>
              <p id="movieDescription">
                After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. 
                To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.
              </p>
              <p><strong>Genres:</strong> <span id="movieGenres">Animation, Survival, Sci-Fi, Artifical Intelligence</span></p>
              <p><strong>Writers:</strong> <span id="movieWriters">Chris Sanders, Peter Brown</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <div id="videoModal" className="modal">
        <div className="modal-content video-modal">
          <span className="close" onClick={closeVideo}>&times;</span>
          <video id="movieVideo" controls>
            <source src="\src\assets\Video\section1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>




      {/* Movie2 Detail Modal */}
       <div id="movie2" className="modal">
       <div className="modal-content">
       <span className="close" onClick={() => closeMovieDetail("movie2")}>&times;</span>
       <div className="modal-container">
         <div className="poster">
        <img id="moviePoster" src="\src\assets\images\sectionpo2.png" alt="Movie2 Poster" />
        <buttons className="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
      </div>
       <div className="Movie-detail">
        <h3 id="movieTitle">Raya and the Last Dragon (2021)</h3>
        <p id="movieDescription">
          In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.
        </p>
        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Fantasy Epic, Quest, Action, Adventure</span></p>
        <p><strong>Writers:</strong> <span id="movieWriters">Qui Nguyen, Adele Lim, Paul Briggs</span></p>
        </div>
      </div>
      </div>
      </div>

         {/* Video Player Modal */}
         <div id="videoModal" className="modal">
           <div className="modal-content video-modal">
             <span className="close" onClick={closeVideo}>&times;</span>
               <video id="movieVideo" controls>
           <source src="\src\assets\Video\section2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              </div>
              </div>



        {/* <!-- Movie3 Detail Modal --> */}
        <div id="movie3" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie3")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo3.png" alt="Movie3 Poster" />
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Klaus (2019)</h3>
                    <p id="movieDescription">When Smeerensburg's new postman, Jesper, befriends toymaker Klaus,
                         their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Holiday Animation, Holiday Comedy, Animation, Family</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Sergio Pablos, Jim Mahoney, Zach Lewis</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>       





     {/* <!-- Movie4 Detail Modal --> */}
     <div id="movie4" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie4")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo4.png" alt="Movie4 Poster" />
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">WALL-E (2008)</h3>
                    <p id="movieDescription">A robot who is responsible for cleaning a waste-covered Earth meets 
                        another robot and falls in love with her. Together, they set out on a journey that will alter 
                        the fate of mankind.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Space Sci-Fi, Adventure, Family</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Andrew Stanton, Pete Docter, Jim Reardon</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div> 




    {/* <!-- Movie5 Detail Modal --> */}
    <div id="movie5" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie5")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo5.png" alt="Movie5 Poster" />
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Monster House (2006)</h3>
                    <p id="movieDescription">Three teens discover that their neighbor's house is
                         really a living, breathing, scary monster.</p>      
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Slapstick, Mystery, Family</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Dan Harmon, Rob Schrab, Pamela Pettler</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>




    {/* <!-- Movie6 Detail Modal --> */}
      <div id="movie6" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie6")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo6.png" alt="Movie6 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Kung Fu Panda 4 (2024)</h3>
                    <p id="movieDescription">Po kicked butt as the Dragon Warrior, and he thinks he may 
                        have found his successor if they can defeat a new villain with shapeshifting powers.</p>      
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Action, Animation, Family</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Jonathan Aibel, Glenn Berger, Darren Lamke</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close"  onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section6.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>



    {/* <!-- Movie7 Detail Modal --> */}
    <div id="movie7" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie7")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo7.png" alt="Movie7 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Spider-Man: Into the Spider-Verse (2018)</h3>
                    <p id="movieDescription">Teen Miles Morales becomes the Spider-Man of his universe 
                        and must join with five spider-powered individuals from other dimensions to stop a threat for all 
                        realities.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Superhero, Adventure, Supernatural Fantasy</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Andrew Stanton, Pete Docter, Jim Reardon</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section7.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
       



    {/* <!-- Movie8 Detail Modal --> */}
    <div id="movie8" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie8")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo8.png" alt="Movie8 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">The Monkey King (2023)</h3>
                    <p id="movieDescription">Inspired by an epic Chinese tale, translated into an action-packed comedy, a Monkey
                         and his magical fighting Stick battle demons, dragons, gods and the greatest 
                         adversary of all - Monkey's ego.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Action, Adventure, Fantasy</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Steve Bencich, Ron J. Friedman, Rita Hsiao</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section8.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>




    {/* <!-- Movie9 Detail Modal --> */}
    <div id="movie9" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie9")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo9.png" alt="Movie9 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Migration (2023)</h3>
                    <p id="movieDescription">A family of ducks try to convince their overprotective father to go on the vacation of a lifetime.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Comedy, Animal Adventure, Family</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Mike White, Benjamin Renner, Ken Daurio</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section9.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>



    {/* <!-- Movie10 Detail Modal --> */}
    <div id="movie10" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie10")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo10.png" alt="Movie10 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">The Croods: A New Age (2020)</h3>
                    <p id="movieDescription">The prehistoric family the Croods are challenged by a rival family
                         the Bettermans, who claim to be better and more evolved.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Comedy, Animal Adventure, Family</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Kevin Hageman, Dan Hageman, Paul Fisher</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section10.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>



    {/* <!-- Movie11 Detail Modal --> */}
    <div id="movie11" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie11")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo11.png" alt="Movie11 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Guillermo del Toro's Pinocchio (2022)</h3>
                    <p id="movieDescription">A father's wish magically brings a wooden boy to life in Italy, giving him a chance 
                        to care for the child.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Fairy Tale, Dark Fantasy, Drama</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Guillermo del Toro, Patrick McHale, Carlo Collodi</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section11.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>





    {/* <!-- Movie12 Detail Modal --> */}
    <div id="movie12" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie12")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo12.png" alt="Movie12 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Rango (2011)</h3>
                    <p id="movieDescription">Rango is an ordinary chameleon who accidentally winds up in the town of Dirt, a 
                        lawless outpost in the Wild West in desperate need of a new sheriff.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation Epic, Desert Adventure, Action, Quirky Comedy</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>John Logan, Gore Verbinski, James Ward Byrkit</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section12.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>



    {/* <!-- Movie13 Detail Modal --> */}
    <div id="movie13" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie13")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo13.png" alt="Movie13 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">The sea Beast (2022)</h3>
                    <p id="movieDescription">When a young girl stows away on the ship of a legendary sea monster hunter, they launch an 
                        epic journey into uncharted waters - and make history to boot.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Sea Adventure, Action, Comedy</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Chris Williams, Nell Benjamin, Sam Stratton</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section13.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>




    {/* <!-- Movie14 Detail Modal --> */}
    <div id="movie14" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie14")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo14.png" alt="Movie14 Poster"/>
                    <buttons class="play-btn"  onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Rio (2011)</h3>
                    <p id="movieDescription">When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely 
                        independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Adventure, Action, Family</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Carlo Saldanha, Earl Rischey Jones, Todd R. Jones</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section14.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>






    {/* <!-- Movie15 Detail Modal --> */}
    <div id="movie15" class="modal">
        <div class="modal-content">
            <span class="close"onClick={() => closeMovieDetail("movie15")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo15.png" alt="Movie15 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Ice Age: Continental Drift (2012)</h3>
                    <p id="movieDescription">Manny, Diego, and Sid embark upon another adventure after their continent is set adrift.
                         Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Adventure, Comedy, Family</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>Carlo Saldanha, Earl Rischey Jones, Todd R. Jones</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section15.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>





     {/* <!-- Movie16 Detail Modal --> */}
     <div id="movie16" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => closeMovieDetail("movie16")}>&times;</span>
            
            <div class="modal-container">

                <div class="poster">
                    <img id="moviePoster" src="\src\assets\images\sectionpo16.png" alt="Movie16 Poster"/>
                    <buttons class="play-btn" onClick={(e) => playVideo(e.target)}>▶ Play</buttons>
                </div>

                <div class="Movie-detail">
                    <h3 id="movieTitle">Turbo (2013)</h3>
                    <p id="movieDescription">A freak accident might just help an everyday garden snail achieve his biggest
                         dream: winning the Indy 500.</p>
                        <p><strong>Genres:</strong> <span id="movieGenres">Animation, Adventure, Motorsport, Sport</span></p>
                        <p><strong>Writers:</strong> <span id="movieWriters"></span>David Soren, Darren Lemka, Robert Siegel</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Video Player Modal --> */}
    <div id="videoModal" class="modal">
        <div class="modal-content video-modal">
            <span class="close" onClick={closeVideo}>&times;</span>
            <video id="movieVideo" controls>
                <source src="\src\assets\Video\section16.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>


      



    </div>
  );
};

export default MovieSection;