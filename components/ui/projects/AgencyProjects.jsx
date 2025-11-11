import { Project } from "./ProjectCards";
import bazilianleaves from "../../../public/images/brazilianleaves.png";
import ekohAgency from "../../../public/images/AgencyProjects/ekoh-agency.png";
import helenansell from "../../../public/images/helenansell-2.png";
import pressplay from "../../../public/images/pressplay-2.png";
import sissy from "../../../public/images/sissy.png";
import theBookGrocer from "../../../public/images/AgencyProjects/theBookGrocer-agency.png";

function AgencyProjects() {
  return (
    <>
      <div className="grid grid-cols-12 gap-24 gap-y-32 desk-sm:gap-0 desk-sm:!grid-cols-none desk-sm:grid-cols-auto desk-sm:!flex-col desk-sm:justify-between">
        <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
          <Project
            title={"Ekoh-store"}
            img={ekohAgency}
            summary={
              <>
                <p>CRO include:</p>
                <ul className="list-disc ml-5">
                  <li>Carefully curated best-selling products showcased on the homepage through product loop selection.</li>
                  <li>Implemented lazy loading for images across the website, notably enhancing page load times, especially on the Instagram carousel.</li>
                  <li>Revamped the Hero section with a sleek slider design for enhanced visual appeal.</li>
                  <li>
                  Enhanced the footer by incorporating social links and SEO content, optimizing overall website visibility and engagement.
                  </li>
                </ul>
              </>
            }
            link={"https://ekoh-store.com/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
        <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
          <Project
            title={"The Book Grocer"}
            img={theBookGrocer}
            summary={
              <>
                <p>CRO include:</p>
                <ul className="list-disc ml-5">
                  {/* <li>Designed the hero section of the home page.</li> */}
                  <li>Designed a captivating hero section for enhanced homepage appeal.</li>
                  <li>Implemented trust bar section on homepage to boost credibility and trustworthiness.</li>
                  <li>Created custom collections on the homepage.</li>
                  <li>
                  Enhanced user engagement with a stylishly integrated testimonial slider at the bottom of the homepage.
                  </li>
                </ul>
              </>
            }
            link={"https://bookgrocer.com/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
        <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
          <Project
            title={"Sissy Mt Eliza"}
            img={sissy}
            summary={
              <>
                <p>CRO include:</p>
                <ul className="list-disc ml-5">
                  <li>
                    Full redesign of the homepage, including theme design.
                  </li>
                  <li>Implemented trust bar section on homepage to boost credibility and trustworthiness.</li>
                  <li>Created custom collections on the homepage.</li>
                  <li>
                    Created and styled testimonial slider to the bottom of the
                    home page.
                  </li>
                  <li>Full redesign of the footer section including newsletter signup form.</li>
                </ul>
              </>
            }
            link={"https://sissymteliza.com.au/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
        <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
          <Project
            title={"Helen Ansell"}
            img={helenansell}
            summary={
              <>
                <p>CRO include:</p>
                <ul className="list-disc ml-5">
                  <li>Worked on the collections page</li>
                  <li>
                    Added and styled testimonial slider to collections page.
                  </li>
                </ul>
              </>
            }
            link={"https://helenansell.com/"}
            github={"/"}
            type={"Wordpress"}
          />
        </div>
        <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
          <Project
            title={"Brazilian Leaves"}
            img={bazilianleaves}
            summary={
              <>
                <p>CRO include:</p>
                <ul className="list-disc ml-5">
                  <li>
                    Added and styled the &quot;in the press&quot; trustbar section on
                    homepage.
                  </li>
                  <li>
                    Added and styled the &quot;Shop by brand&quot; section above the
                    footer
                  </li>
                  <li>
                    Created and styled the custom page &quot;press&quot; to design
                    specifications.
                  </li>
                </ul>
              </>
            }
            link={"https://www.brazilianleaves.com.au/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
        <div className="col-span-6 desk-sm:col-span-12 desk-sm:w-[100%] desk-sm:my-10 desk-sm:mx-auto">
          <Project
            title={"Press Play"}
            img={pressplay}
            summary={
              <>
                <p>CRO include:</p>
                <ul className="list-disc ml-5">
                  <li>Added top bar annpucement section to homepage.</li>
                  <li>Minor tweaks to product page</li>
                  <li>Optimised product meta descriptions for SEO.</li>
                </ul>
              </>
            }
            link={"https://pressplaycosmetics.com/"}
            github={"/"}
            type={"Shopify"}
          />
        </div>
      </div>
    </>
  );
}

export default AgencyProjects;
