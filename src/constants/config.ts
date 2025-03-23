type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Alok — 3D Portfolio",
    fullName: "Alok Pratap Jadon",
    email: "alok8273739734@mail.com",
  },
    resume: {
      image: "/assets/resume.png", // Ensure this path is correct
    },

  hero: {
    name: "Alok Pratap Jadon",
    p: [""],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `I'm a pre-final year B.Tech CSE student passionate about frontend development with a strong foundation in HTML, CSS, JavaScript, React, and Angular. I also have basic knowledge of backend technologies like Node.js and SQL, allowing me to build complete web applications. Always eager to learn and grow, I stay updated with the latest trends in web development. Let’s create something amazing together!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "My Certifications",
    },
    feedbacks: {
      h2: "Do you like my projects.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

