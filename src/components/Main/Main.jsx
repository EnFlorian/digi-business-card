import "./Main.css";
import { content } from "../../data/main";

const Main = () => {
  return (
    <main className="main container">
      <div className="main__wrapper">
        <div className="main__content">
          <h1 className="main__title">{content.title}</h1>
          <h1 className="main__subtitle">
            & <span className="main__accent">{content.subtitle}</span>
          </h1>
          <p className="main__description">
            <span className="main__tag-line">{content.tagline}</span> {""}
            {content.description}
          </p>
          <a className="main__button" rel="noopener noreferrer" href={content.button.link}>
            {content.button.name}
          </a>
        </div>
        <div className="main__image-wrapper">
          <div className="main__image-border">
            <div className="main__image-background">
              <img className="main__image" src={content.image} alt="main" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
