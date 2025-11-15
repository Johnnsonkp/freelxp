import {Card} from './card';
import Divider from './Divider';
import Link from 'next/link';

export const IntroSection = () => {
  return (
    <section className="py-0 mt-[-18px] mb-4">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between max-w-6xl mx-auto desk-sm:flex-col desk-sm:gap-6">
          <Card 
            className="md:col-span-2 p-5 bg-card border-border border dark:border-darkBorder flex-[6] dark:bg-dark2 "
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span>💡</span>
              <span>Hello World! 👋</span>
            </h3>
            <p className="text-foreground leading-relaxed">
              Hi, I&apos;m <span className="font-semibold">Chinonso John Nkpolukwu</span>
              —you can call me <span className="font-semibold">John</span>! I&apos;m a
              passionate software developer and vacation rental host with a deep love
              for all things tech.
            </p>
          </Card>

          <div className='mx-5'>
            <Divider orientation="vertical" />
          </div>

          <Card className="p-5 bg-accent/20 border-accent flex-[4] dark:bg-dark2 dark:border-darkBorder">
            <div className="space-y-2">
              <p className="text-foreground">
                📝 Check out my{" "}
                <Link 
                  href="/about" 
                  className="text-accent underline hover:text-accent/80 transition-colors">
                  bio 
                </Link> for more info.
              </p>
              <p className="text-foreground">
                🏠 You can find my latest projects{" "}
                <Link 
                  href="/projects" 
                  className="text-accent underline hover:text-accent/80 transition-colors">
                  here 
                </Link>
                .
              </p>
              <p className="text-foreground">
                🏠 My Airbnb profile{" "}
                <a
                  href="https://www.airbnb.com.au/users/show/447493012"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  here
                </a>.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};