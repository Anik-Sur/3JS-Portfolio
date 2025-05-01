import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100" },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* leftside */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Deep-Colorizer" />
            </div>
            <div className="text-content">
              <h2>Black and White media colorizer</h2>
              <p className="text-white-50 md:text-xl">
                This application leverages deep learning to automatically
                convert black-and-white (B/W) images and videos into colorized
                versions, enhancing and restoring old media. It utilizes a
                pre-trained model developed with the Caffe deep learning
                framework, which has been trained on a large dataset of color
                images to learn the context and semantics necessary for
                realistic colorization.
              </p>
            </div>
          </div>

          {/* Rightside */}

          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Glogg" />
              </div>
              <h2>Glogg – Where Thoughts Take Flight</h2>
            </div>
            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="RainCloud" />
              </div>
              <h2>RainCloud – Real-Time Weather, Real Smart UI</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
