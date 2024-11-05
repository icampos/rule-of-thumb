import BackgroundPeopleImg from '../assets/img/bg-people.png'
import BackgroundPeopleImg2x from '../assets/img/bg-people.@2x.png'

const BannerBottom = () => {
  return (
    <aside
      className="banner banner-bottom"
      role="doc-tip"
      aria-label="Submit a name"
    >
      <img
        srcSet={`${BackgroundPeopleImg} 750w, ${BackgroundPeopleImg2x} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        className="banner__background"
        src={BackgroundPeopleImg}
        alt=""
        role="none"
      />
      <div className="banner__left">
        <h2 className="banner__heading">
          Is there anyone else you would want us to add? Let us know.
        </h2>
      </div>
      <div className="banner__right">
        <button className="banner__cta">Submit a name</button>
      </div>
    </aside>
  );
};

export default BannerBottom;
