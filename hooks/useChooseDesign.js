import { useEffect, useState } from "react";
import AboutDesign1 from "../components/theme/about/designs/design1";
import AboutDesign2 from "../components/theme/about/designs/design2";
import AboutDesign3 from "../components/theme/about/designs/design3";
import AboutDesign4 from "../components/theme/about/designs/design4";
import AboutDesign5 from "../components/theme/about/designs/design5";
import HeroDesign1 from "../components/theme/hero/designs/design1";
import HeroDesign2 from "../components/theme/hero/designs/design2";
import HeroDesign3 from "../components/theme/hero/designs/design3";
import HeroDesign4 from "../components/theme/hero/designs/design4";
import HeroDesign5 from "../components/theme/hero/designs/design5";
import FeaturedDesign1 from "../components/theme/featured/designs/design1";
import FeaturedDesign2 from "../components/theme/featured/designs/design2";
import FeaturedDesign3 from "../components/theme/featured/designs/design3";
import FeaturedDesign4 from "../components/theme/featured/designs/design4";
import FeaturedDesign5 from "../components/theme/featured/designs/design5";
import ServiceDesign1 from "../components/theme/services/designs/design1";
import ServiceDesign2 from "../components/theme/services/designs/design2";
import ServiceDesign3 from "../components/theme/services/designs/design3";
import ServiceDesign4 from "../components/theme/services/designs/design4";
import ServiceDesign5 from "../components/theme/services/designs/design5";
import TeamDesign1 from "../components/theme/team/design/design1";
import TeamDesign2 from "../components/theme/team/design/design2";
import TeamDesign3 from "../components/theme/team/design/design3";
import TeamDesign4 from "../components/theme/team/design/design4";
import TeamDesign5 from "../components/theme/team/design/design5";
import ClientsDesign1 from "../components/theme/clients/designs/design1";
import ClientsDesign2 from "../components/theme/clients/designs/design2";
import ClientsDesign3 from "../components/theme/clients/designs/design3";
import ClientsDesign4 from "../components/theme/clients/designs/design4";
import ClientsDesign5 from "../components/theme/clients/designs/design5";
import GalleryDesing1 from "../components/theme/gallery/designs/design1";
import GalleryDesing2 from "../components/theme/gallery/designs/design2";
import GalleryDesing3 from "../components/theme/gallery/designs/design3";
import GalleryDesing4 from "../components/theme/gallery/designs/design4";
import GalleryDesing5 from "../components/theme/gallery/designs/design5";
import TestimonialsDesign1 from "../components/theme/testimonials/designs/design1";
import TestimonialsDesign2 from "../components/theme/testimonials/designs/design2";
import TestimonialsDesign3 from "../components/theme/testimonials/designs/design3";
import TestimonialsDesign4 from "../components/theme/testimonials/designs/design4";
import TestimonialsDesign5 from "../components/theme/testimonials/designs/design5";
import FooterDesign1 from "../components/theme/footer/designs/design1";
import FooterDesign2 from "../components/theme/footer/designs/design2";
import FooterDesign3 from "../components/theme/footer/designs/design3";
import FooterDesign4 from "../components/theme/footer/designs/design4";
import FooterDesign5 from "../components/theme/footer/designs/design5";

const useChooseDesign = (compName) => {
  const aboutDesigns = [
    AboutDesign1,
    AboutDesign2,
    AboutDesign3,
    AboutDesign4,
    AboutDesign5,
  ];
  const heroDesigns = [
    HeroDesign1,
    HeroDesign2,
    HeroDesign3,
    HeroDesign4,
    HeroDesign5,
  ];
  const featuredDesigns = [
    FeaturedDesign1,
    FeaturedDesign2,
    FeaturedDesign3,
    FeaturedDesign4,
    FeaturedDesign5,
  ];

  const servicesDesigns = [
    ServiceDesign1,
    ServiceDesign2,
    ServiceDesign3,
    ServiceDesign4,
    ServiceDesign5,
  ];

  const teamDesigns = [
    TeamDesign1,
    TeamDesign2,
    TeamDesign3,
    TeamDesign4,
    TeamDesign5,
  ];
  const clientsDesigns = [
    ClientsDesign1,
    ClientsDesign2,
    ClientsDesign3,
    ClientsDesign4,
    ClientsDesign5,
  ];
  const galleryDesigns = [
    GalleryDesing1,
    GalleryDesing2,
    GalleryDesing3,
    GalleryDesing4,
    GalleryDesing5,
  ];

  const TestimonialsDesigns = [
    TestimonialsDesign1,
    TestimonialsDesign2,
    TestimonialsDesign3,
    TestimonialsDesign4,
    TestimonialsDesign5,
  ];

  const FooterDesigns = [FooterDesign1,FooterDesign2,FooterDesign3,FooterDesign4,FooterDesign5];

  const [designs, setDesigns] = useState(heroDesigns);

  const selectedDesigns = () => {
    if (compName === "hero") {
      setDesigns(heroDesigns);
    } else if (compName === "about") {
      setDesigns(aboutDesigns);
    } else if (compName === "featured") {
      setDesigns(featuredDesigns);
    } else if (compName === "services") {
      setDesigns(servicesDesigns);
    } else if (compName === "team") {
      setDesigns(teamDesigns);
    } else if (compName === "clients") {
      setDesigns(clientsDesigns);
    } else if (compName === "gallery") {
      setDesigns(galleryDesigns);
    } else if (compName === "testimonials") {
      setDesigns(TestimonialsDesigns);
    } else if (compName === "footer") {
      setDesigns(FooterDesigns);
    }
  };

  useEffect(() => {
    selectedDesigns();
  }, [compName]);

  return { designs };
};

export default useChooseDesign;
