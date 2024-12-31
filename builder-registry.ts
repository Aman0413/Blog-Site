"use client";
import { builder, Builder } from "@builder.io/react";
import Blog from "./components/Blog-Section/Blog";
import BlogList from "./components/Blog-Section/BlogList";

import BlogSection from "./components/Blog-Section/BlogSection";

import FaqItem from "./components/FAQ-Section/FaqItem";
import FaqSection from "./components/FAQ-Section/FaqSection";
import FeatureBlog from "./components/Feature-Section/FeatureBlog";
import FeatureSection from "./components/Feature-Section/FeatureSection";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Blog, {
  name: "Blog",
});

Builder.registerComponent(FaqSection, {
  name: "FaqSection",
});

Builder.registerComponent(FeatureBlog, {
  name: "FeatureBlog",
});

Builder.registerComponent(FeatureSection, {
  name: "FeatureSection",
});

Builder.registerComponent(FaqItem, {
  name: "FaqItem",
  inputs: [
    {
      name: "answer",
      type: "string",
      required: true,
    },
    {
      name: "question",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogSection, {
  name: "BlogSection",
  inputs: [
    {
      name: "heading",
      type: "string",
      required: true,
    },
    {
      name: "subheading",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogList, {
  name: "BlogList",
  inputs: [
    {
      name: "blogs",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "any[]",
      },
      required: true,
    },
    {
      name: "searchQuery",
      type: "string",
      required: true,
    },
  ],
});
