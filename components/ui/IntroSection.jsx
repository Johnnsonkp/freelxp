import {Card} from './card';
import Divider from './Divider';
import LinksCardMd from './cards/LinksCardMd';
import siteConfig from '../../site.config';

export const IntroSection = () => {
  const description = siteConfig.profileDescription || null
  const IntroSectionData = siteConfig.introSectionData || null
  const greetingMsg = siteConfig.profileDescriptionTitle || null

  return (
    <section className="py-0 mt-[-29px] mb-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between max-w-6xl mx-auto desk-sm:flex-col desk-sm:gap-6">
          <Card 
            className="md:col-span-2 p-5 bg-card border-border border dark:border-darkBorder flex-[6] dark:bg-dark2 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span>{greetingMsg}</span>
            </h3>
            <p className="text-foreground leading-relaxed">
              {description}
            </p>
          </Card>

          <div className='mx-5'>
            <Divider orientation="vertical" />
          </div>
          <LinksCardMd data={IntroSectionData}/>
        </div>
      </div>
    </section>
  );
};