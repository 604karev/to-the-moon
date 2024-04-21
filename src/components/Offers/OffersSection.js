import React from "react";
import "./OffersSection.scss";
import Offer from "./Offer";
import moveBorders from "assets/images/move-borders.jpg";
import spaceJourney from "assets/images/space-journey.jpg";
import dreamOfStars from "assets/images/dream-of-stars.jpg";
import fantasticDreams from "assets/images/fantastic-dreams.jpg";

const offersData = [
  {
    id: 1,
    title: "Move the borders of reality!",
    description: "Go on a space adventure",
    imageUrl: moveBorders,
    link: "#move-borders",
  },
  {
    id: 2,
    title: "Space is not just stars and planets",
    description: "Go on a space adventure ",
    imageUrl: spaceJourney,
    link: "#space-journey",
  },
  {
    id: 3,
    title: "For those who dream of stars ",
    description: "Our offer: make your dream come true",
    imageUrl: dreamOfStars,
    link: "#dream-of-stars",
  },
  {
    id: 4,
    title: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
    imageUrl: fantasticDreams,
    link: "#fantastic-dreams",
  },
];

const OffersSection = () => {
  return (
    <section className="offers-section">
      <div className="container">
        <h2 className="heading heading_offers">Offers</h2>
        <div className="offers">
          {offersData.map((offer) => (
            <Offer key={offer.id} {...offer} />
          ))}
        </div>
        <h2 className="heading">Embark on a space journey</h2>
        <div className="description">
          <div class="read-more-container">
            <input type="checkbox" id="readmore" class="read-more-state" />
            <p class="read-more-wrap">
              Travelling into space is one of the most exciting and
              unforgettable adventures that can change your life forever. And if
              you have ever dreamed of exploring stars, planets and galaxies,
              then our company is ready to help you realize this dream. We offer
              a unique experience that will allow you to go on a space journey
              and see all the secrets of the universe. We guarantee that every
              moment in space will be filled with incredible impressions,
              excitement and new discoveries. Our team of professionals takes
              care of your safety and comfort so that you can fully enjoy your
              adventure in space. We offer various options for space excursions.
              <span class="read-more-target">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </span>
            </p>
            <label for="readmore" class="read-more-trigger">
              Read More
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
