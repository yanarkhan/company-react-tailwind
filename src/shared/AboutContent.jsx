const AboutContent = ({
  imageSrc,
  title,
  highlight,
  text,
  reverse,
  useMaxWidth,
}) => {
  return (
    <div
      className={`flex flex-col justify-between items-center gap-8 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } lg:px-12`}
    >
      <div className="md:w-1/2">
        <img src={imageSrc} alt="About Image" />
      </div>

      <div className="w-3/5">
        <h2
          className={`text-3xl font-bold text-primary mb-5 md:leading-normal md:text-5xl  ${
            useMaxWidth ? "max-w-lg" : "max-w-xl"
          }
          }`}
        >
          {title} <span className="text-secondary">{highlight}</span>
        </h2>
        <p className="text-lg text-tertiary mb-7 max-w-lg">{text}</p>
        <button className="btnPrimary">Get Started</button>
      </div>
    </div>
  );
};

export default AboutContent;
