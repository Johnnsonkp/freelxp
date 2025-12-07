import { ProfileSectionAlt } from "./sections/ProfileSectionAlt";
import SmoothImgLoad from "./SmoothImgLoad";
import SocialIconNav from "./header/SocialIconNav";

export const ProfileSection = () => {
  const imgSrc = "/headshot-bw.jpeg";

  return (
    <section className="relative -mt-28 mb-0 ">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="relative">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-background shadow-2xl">
            {imgSrc && 
              <SmoothImgLoad 
                src={imgSrc}
                alt="Chinonso John Nkpolukwu"
                className="w-full h-full object-cover"
                fill={false}
                width={200}
                height={200}
                quality={100}
              />}
          </div>
        </div>
        <h2 className="mt-2 text-3xl md:text-3xl font-semibold text-foreground">
          John Nkpolukwu
        </h2>
        <h3 className="mt-0 text-3xl md:text-2xl font-thin text-foreground">
          Software Engineer | UX/UI Specialist
        </h3>
        <SocialIconNav />
      </div>
    </section>
  );
};