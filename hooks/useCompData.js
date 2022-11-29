import { useSelector } from "react-redux";

const useCompData = (compName) => {
  // const compName = useSelector((state) => state.compName.compName);
  const featuredData = {
    header: "<h1 class='text-2xl font-semibold text-center'>Features</h1>",
    items: [
      {
        icon: "support",
        title: "<h2 class=' font-semibold'>Professional Support</h2>",
        desc: " <p>Our team works diligently to ensure that all your questions are answered and your needs met.</p>",
        id: 1,
        btn: "<span>Read More</span>",
      },
      {
        icon: "users",
        title: "<h2 class=' font-semibold'>Qualified Team</h2>",
        desc: " <p>From designers to developers to writers, our team is equipped with a diverse set of skills.</p>",
        id: 2,
        btn: "<span>Read More</span>",
      },
      {
        icon: "briefcase",
        title: "<h2 class=' font-semibold'>High Quality Work</h2>",
        desc: " <p>All our work is executed with the highest degree of efficiency.</p>",
        id: 3,
        btn: "<span>Read More</span>",
      },
      {
        icon: "asterisk",
        title: "<h2 class=' font-semibold'>Detail-oriented approach</h2>",
        desc: " <p>We focus on every aspect of our clients’ needs to leave nothing to chance.</p>",
        id: 4,
        btn: "<span>Read More</span>",
      },
    ],
  };
  const heroData = useSelector((state) => state.hero.heroData);
  const serviceData = {
    headers: {
      title: "<h1 class='text-2xl font-semibold'>Our Services</h1>",
      subTitle:
        "<p>We offer top-notch services based on countless years of experience.</p>",
    },
    items: [
      {
        pic: "https://images.unsplash.com/photo-1516728043722-b394cb2f689e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c82882f6f384a30402cc75029d9e7b11&auto=format&fit=crop&w=550&q=80",
        title: "<h3 class='text-2xl font-semi-bold'>SEM Marketing</h3>",
        desc: "<p>We develop comprehensive PPC and SEO strategies. We’ll provide your AdWords account with continuous PPC support that is monitored to adapt to the evolving industry.</p>",
        id: 1,
        btn: "<span>READ MORE</span>",
      },
      {
        pic: "https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=550&q=80",
        title:
          "<h3 class='text-2xl font-semi-bold'>Social Media Marketing</h3>",
        desc: "<p>Our team works to expand your social media presence by creating compelling content designed for you. boost your social media audience and develop a strong community around your brand.</p>",
        id: 2,
        btn: "<span>READ MORE</span>",
      },
      {
        pic: "https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a8623f526569e949b73c4c7360d4532&auto=format&fit=crop&w=550&q=80",

        title: "<h3 class='text-2xl font-semi-bold'>Content Marketing</h3>",
        desc: "<p>Our writers are wordsmiths trained in creating quality content for all aspects of your brand. We’ll take care of your website copy, SEO articles, blog posts, whitepapers and more.</p>",
        btn: "<span>READ MORE</span>",
        id: 3,
      },
    ],
  };
  const teamData = {
    headers: {
      title: "<h1 class='text-2xl font-semibold'>Our Team</h1>",
      subTitle:
        "<p>We’re led by a team who is always thinking, always creating, and always pushing forward.</p>",
    },
    items: [
      {
        userName:
          "<h2 class='text-primary text-2xl font-semibold'>Angelica Johnson</h2>",
        id: 1,
        position: " <h3 class='font-semibold'>Founder & CEO</h3>",
        pic: "https://assets.wuiltsite.com/defaults/angelika-johnson.jpg",
        about:
          "<p class='text-sm'>Angelica Johnson studied business at University of Southern California. She has lead multiple startups including Culdin, Mifi, and Purity.</p>",
      },
      {
        userName:
          "<h2 class='text-primary text-2xl font-semibold'>Peter Thomas</h2>",
        id: 2,
        position: " <h3 class='font-semibold'>Chief Finance Officer</h3>",
        pic: "https://assets.wuiltsite.com/defaults/peter.jpg",
        about:
          "<p class='text-sm'>Peter Thomas is the author of four books, including the New York Times bestseller, “Walking Down Wall Street,” inspired by 10 years of working on Wall Street.</p>",
      },
      {
        userName:
          "<h2 class='text-primary text-2xl font-semibold'>Maria Rodriguez</h2>",
        id: 3,
        position: " <h3 class='font-semibold'>Marketing Director</h3>",
        pic: "https://assets.wuiltsite.com/defaults/maria.jpg",
        about:
          "<p class='text-sm'>Maria Rodriquez is best known for co-founding Cherry Innovation, a marketing strategy firm. She has written for the Wall Street Journal, The New York Times, and The Atlantic.</p>",
      },
      {
        userName:
          "<h2 class='text-primary text-2xl font-semibold'>Bradley Hanson</h2>",
        id: 4,
        position:
          " <h3 class='font-semibold'>Senior Vice President of Design</h3>",
        pic: "https://assets.wuiltsite.com/defaults/bradely.jpg",
        about:
          "<p class='text-sm'>Bradley Hanson grew up in Newton, Massachusetts, and graduated from the University of Massachusetts at Amherst with a degree in Graphic Design.</p>",
      },
    ],
  };
  const testiData = {
    headers: {
      title: "<h1 class='text-2xl font-semibold'>What Our Clients Say</h1>",
      subTitle:
        "<p>Hundreds of customers rely on our services. See what they have to say.</p>",
    },
    items: [
      {
        id: 1,
        pic: "https://images.unsplash.com/photo-1486314547704-d16929b8a2af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c2d5d9be0196706bc93d37ecd2217c11&auto=format&fit=crop&w=500&q=80",
        userName: "<h3 class='text-2xl font-semibold'>salma</h3>",
        position:
          "<span class='block text-sm font-semibold'>CEO / Newzify</span>",
        review:
          " <p class='text-sm'>“I honestly could not be more pleased with this product. So creative and helpful.”</p>",
      },
      {
        id: 2,
        pic: "https://images.unsplash.com/photo-1511079727166-22288ec84472?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd72794d86c3e3559e56e0a6706a4599&auto=format&fit=crop&w=500&q=80",
        userName: "<h3 class='text-2xl font-semibold'>chris</h3>",
        position:
          "<span class='block text-sm font-semibold'>Art Director / Boomerangs</span>",
        review:
          " <p class='text-sm'>“I’ve never been more impressed with any other product before. I’ve tried so many of the other ones, and this is truly the one that stands out the most.”</p>",
      },
      {
        id: 3,
        pic: "https://images.unsplash.com/photo-1516486609688-38da8f268743?ixlib=rb-0.3.5&s=9d6987c2bf554dc4c0de1209c6e08b1c&auto=format&fit=crop&w=500&q=80",
        userName: "<h3 class='text-2xl font-semibold'>Cara</h3>",
        position:
          "<span class='block text-sm font-semibold'>Co-Founder / Beeply</span>",
        review:
          " <p class='text-sm'>“Avivo has been wonderful. They have the best customer service and always go above and beyond to answer my questions and make sure my needs are met.”</p>",
      },
      {
        id: 4,
        pic: "https://images.unsplash.com/photo-1516486609688-38da8f268743?ixlib=rb-0.3.5&s=9d6987c2bf554dc4c0de1209c6e08b1c&auto=format&fit=crop&w=500&q=80",
        userName: "<h3 class='text-2xl font-semibold'>Charlie Mendoza</h3>",
        position:
          "<span class='block text-sm font-semibold'>Co-Founder / Beeply</span>",
        review:
          " <p class='text-sm'>“Avivo has been wonderful. They have the best customer service and always go above and beyond to answer my questions and make sure my needs are met.”</p>",
      },
    ],
  };

  const aboutData = {
    title: "<h1 class='text-4xl font-semibold'>About Us</h1>",
    subTitle:
      "<p>Write about your businesses background, including your history, accomplishments and any awards you may have received. Use this section to show your brand’s personality.</p>",
    btn: "<span>Learn More</span>",
    pic:"https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79d169c2bf199ce6912f72c20ec301e4&auto=format&fit=crop&w=500&q=80"
  };

  const galleryData = {
    title: "<h1 class='text-2xl font-semibold'>Our Work</h1>",
    subTitle: "<p>Browse through our collection of stunning images</p>",
    btn: "<span>Start Now</span>",
    items: [
      {
        pic: "https://images.unsplash.com/photo-1580197370215-38fdb17dfe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80",
        id: 1,
      },
      {
        pic: "https://images.unsplash.com/photo-1580124173799-934609852db8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
        id: 2,
      },
      {
        pic: "https://images.unsplash.com/photo-1580152040915-ad6ceeaeb8c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
        id: 3,
      },
      {
        pic: "https://images.unsplash.com/photo-1558981822-0c0c5b070026?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
        id: 4,
      },
      {
        pic: "https://images.unsplash.com/photo-1580118586709-50d0a0eea2cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
        id: 5,
      },
      {
        pic: "https://images.unsplash.com/photo-1580142541272-4f6b7e815563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80",
        id: 6,
      },
    ],
  };

  const clientsData = {
    title: "<h1 class='text-2xl font-semibold'>Our Clients</h1>",
    subTitle:
      "<p>Some of the world’s biggest brands trust us with their services</p>",
    items: [
      { pic: "https://assets.wuiltsite.com/defaults/google-logo.png", id: 1 },
      { pic: "https://assets.wuiltsite.com/defaults/facebook-logo.png", id: 2 },
      { pic: "https://assets.wuiltsite.com/defaults/evernote-logo.png", id: 3 },
      {
        pic: "https://assets.wuiltsite.com/defaults/shutterstock-logo.png",
        id: 4,
      },
      { pic: "https://assets.wuiltsite.com/defaults/google-logo.png", id: 5 },
      { pic: "https://assets.wuiltsite.com/defaults/facebook-logo.png", id: 6 },
      { pic: "https://assets.wuiltsite.com/defaults/evernote-logo.png", id: 7 },
      {
        pic: "https://assets.wuiltsite.com/defaults/shutterstock-logo.png",
        id: 8,
      },
    ],
  };

  const compData = () => {
    if (compName === "hero") {
      return heroData;
    } else if (compName === "about") {
      return aboutData;
    } else if (compName === "featured") {
      return featuredData;
    } else if (compName === "services") {
      return serviceData;
    } else if (compName === "team") {
      return teamData;
    } else if (compName === "testimonials") {
      return testiData;
    } else if (compName === "gallery") {
      return galleryData;
    } else if (compName === "clients") {
      return clientsData;
    }
  };

  return { compData };
};

export default useCompData;
