import { ProfileSectionAlt } from "./sections/ProfileSectionAlt";
export const ProfileSection = () => {
  return (
    // <ProfileSectionAlt />
    <section className="relative -mt-28 mb-0 ">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="relative">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-background shadow-2xl">
            <img
              src={"/headshot-bw.jpeg"}
              alt="Chinonso John Nkpolukwu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="mt-2 text-3xl md:text-3xl font-semibold text-foreground">
          John Nkpolukwu
        </h2>
        <h3 className="mt-2 text-3xl md:text-3xl font-thin text-foreground">
          Software Engineer | UX/UI Specialist
        </h3>
      </div>
    </section>
  );
};