import React from "react";

const Links = () => {
  const Link = ({ id, url, text, subtext }) => {
    return (
      <a
        id={id}
        className="flex flex-col justify-center items-center text-lg font-medium px-8 py-6 text-gray-900 bg-[#EAECF0] rounded-lg w-full"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {text}
        {subtext && <span className="text-xs text-center">{subtext}</span>}
      </a>
    );
  };

  const linksArray = [
    {
      id: "btn__zuri",
      text: "Zuri Team",
      url: "https://training.zuri.team/",
    },
    {
      id: "books",
      text: "Books",
      subtext: "Browse our collection of books on Design and Coding",
      url: "http://books.zuri.team",
    },
    {
      id: "book__python",
      text: "Basic Coding 1.0",
      subtext: "The beginner's guide to coding every new developer needs",
      url: "https://books.zuri.team/python-for-beginners?ref_id=tolumaestro",
    },
    {
      id: "pitch",
      text: "Developers for Hire",
      subtext: "Hire the best Web Developers to bring your ideas to life",
      url: "https://background.zuri.team",
    },
    {
      id: "book__design",
      text: "HNG Design Rules Book",
      subtext: "Free design book offered by Zuri",
      url: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <div className="xl:container flex flex-col gap-6 justify-center items-center mx-4 lg:mx-8 xl:mx-auto mt-14 mb-6">
      {linksArray.map((link) => (
        <Link
          id={link.id}
          url={link.url}
          text={link.text}
          subtext={link.subtext}
          key={link.id}
        />
      ))}
    </div>
  );
};

export default Links;
