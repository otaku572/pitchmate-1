
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          From Frustration to Creation
        </h2>
        <div className="mt-6 prose prose-lg text-muted-foreground mx-auto">
          <p>
            As a student navigating the job market, I sent hundreds of outreach messages. I quickly learned that personalization was key, but it was also incredibly time-consuming. I'd spend hours crafting the 'perfect' message, only to do it all over again for the next person.
          </p>
          <p>
            I built PitchMate to solve my own problem: to help professionals like you create genuine, impactful connections, without the manual grind. This tool is the result of that hustle, designed to give you back your time and make your voice heard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
