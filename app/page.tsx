
import BlogSection from "@/components/Blog-Section/BlogSection";
import FaqSection from "@/components/FAQ-Section/FaqSection";
import FeatureSection from "@/components/Feature-Section/FeatureSection";


export default function Home() {
  return (
    <div>

      <BlogSection
        heading="Explore our Knowledge Base"
        subheading="Insights and resources for AI in healthcare"
      />

      <FeatureSection
        heading="Explore our case studies"
        subheading="Discover how our AI transforms healthcare pratices"
        viewAll={false}
        bgColor="#f1f1f3"
        componentType='case-study'
      />
      <FeatureSection
        heading="Insights and updates"
        subheading="Stay Informed with our latest articles"
        viewAll={true}
        componentType='insights'
      />
      <FaqSection />

    </div>
  );
}
