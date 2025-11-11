import SecondaryBtn from '../buttons/secondaryBtn';
import styles from './text.module.css';

export default function LandingTextUI() {
  return (
    <div className='w-[100%]'>
    {/* <SatisfiedClientStars /> */}
      <p className="text-xs font-medium uppercase border border-[#FBEBEB] bg-[#FBEBEB] px-2 py-1 text-[#DA3834] rounded-full inline-block ">
        John. Nkpolukwu - [ Jack of all trades ]
      </p>
      <h2 className={` ${styles.textBold} dark:text-[#f4f4f4] mb-6 leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug text-[2rem]`}>
          {/* Full-Stack Developer */}
          Software Engineer
          <span 
            className={`${styles.textBold} inline-block border-b-8 border-g4 bg-white dark:bg-[#1C1C1C] pr-4 font-medium text-g4 animate__animated animate__flash`}
          >
            {/* Automation Expert */}
            Frontend Developer
          </span>
      </h2>
      <p className={`${styles.heroTextBold} text-gray-700 dark:text-[#f4f4f4] max-w-[39.25rem] text-[1.25rem] mt-[1.575rem] mb-[1.575rem] leading-[150%] w-[100%]`}>
        Software Engineer & Automation Expert delivering high impact web solutions for startups, agencies, and established businesses. Ready to automate tedious processes, and turn big digital ideas into reality.
      </p>

      <div className="mt-8 flex flex-row !justify-start md:flex-row align-middle items-start">
        <SecondaryBtn src={"mailto:john.nkp1@gmail.com"} title={'Get in touch'}/>
        <SecondaryBtn src={'/about'} title={'Learn more'}/>
      </div>
    </div>
  )
}
