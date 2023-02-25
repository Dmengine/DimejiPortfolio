import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Oladimeji, and I am a ReactJS developer with extensive experience in building high-quality web applications using the ReactJS framework, as well as Node.js and JavaScript.

I am passionate about creating beautiful, responsive, and dynamic user interfaces that provide engaging experiences for users. With my in-depth understanding of ReactJS fundamentals, including component-based architecture, state and props management, and lifecycle methods, I am able to create web applications that are not only visually appealing but also performant.

In addition to my expertise in ReactJS, I have a strong background in JavaScript, the programming language used by React. I am proficient in working with ES6 and have experience with popular JavaScript frameworks and libraries such as Angular, Vue.js, and jQuery.
        </p>

        <br />

        <p className="text-xl">
        I am also well-versed in Node.js, an open-source, cross-platform JavaScript runtime environment that allows developers to build scalable and high-performance applications. With my experience in using Node.js to build server-side applications and APIs, I am able to create robust and scalable web applications that can handle high traffic and complex workflows.

Overall, I am a dedicated and experienced ReactJS developer who is committed to delivering high-quality web applications that meet the needs of my clients. I am able to work collaboratively with other developers, designers, and project managers to deliver projects on time and within budget, while maintaining a strong attention to detail and a commitment to best practices.

Thank you for visiting my about page, and I look forward to working with you on your next project.
        </p>
      </div>
    </div>
  );
};

export default About;
