import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="ValConnect" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about-us" heading="About Us" />
        <InterestsSection sectionId="what-we-do" heading="What We Do" />
        <ArticlesSection sectionId="happennings" heading="Happennings" sources={['Medium']} />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="connect-with-us" heading="Connect With Us" />
      </Page>
    </>
  );
}
