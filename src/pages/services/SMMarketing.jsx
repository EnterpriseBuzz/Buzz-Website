import React, { useEffect } from "react";
import SocialCarousel from "../../components/services/SocialCarousel";

const testimonialsData = [
  {
    quote:
      "Cursor is at least a 2x improvement over Copilot. It's amazing having an AI pair programmer, and is an incredible accelerator for me and my team.",
    authorName: "Ben Bernard",
    authorCompany: "Instacart",
    authorImage:
      "https://assets.basehub.com/191e7e6d/bacbbb589ac2e0ed1bff2c7fc5678fff/benb-copy.jpeg",
  },
  {
    quote:
      "The Cursor tab completion while coding is occasionally so magic it defies reality - about ~25% of the time it is anticipating exactly what I want to do. It is enough to make you believe that eventually you'll be able to code at the speed of thought.",
    authorName: "Kevin Whinnery",
    authorCompany: "OpenAI",
    authorImage:
      "https://assets.basehub.com/191e7e6d/050df60ab6abfd3eb84b45f2de92017b/tzdi-krg400x400.jpg",
  },
  {
    quote: "Cursor is hands down my biggest workflow improvement in years",
    authorName: "Sawyer Hood",
    authorCompany: "Figma",
    authorImage:
      "https://assets.basehub.com/191e7e6d/f09b26d29b76bac95b566420ed98eebe/7k6yh27k400x400.jpg",
  },
  {
    quote:
      "Cursor is so good, and literally gets better/more feature-rich every couple of weeks.",
    authorName: "Morgan McGuire",
    authorCompany: "Weights & Biases",
    authorImage:
      "https://assets.basehub.com/191e7e6d/44bebc63b4051216803d29e68584ed93/morgan-copy.jpg",
  },
  {
    quote:
      "I love writing code and Cursor is a necessity. Cursor is steps ahead of my brain, proposing multi-line edits so I type 'tab' more than anything else.",
    authorName: "Andrew Milich",
    authorCompany: "Notion",
    authorImage:
      "https://assets.basehub.com/191e7e6d/e296543be66f6e9fc6e46523a8c07293/440fe5d8f1aab84902daf6a84937e915b06ec117-684x684.png",
  },
  {
    quote:
      "The best AI coding tool I've used. It's like having a senior engineer looking over your shoulder.",
    authorName: "Sarah Chen",
    authorCompany: "Google",
    authorImage: "https://placehold.co/156x156/818CF8/FFFFFF?text=SC",
  },
  {
    quote:
      "Incredibly powerful and intuitive. Cursor has transformed how our team approaches complex coding challenges.",
    authorName: "David Lee",
    authorCompany: "Microsoft",
    authorImage: "https://placehold.co/156x156/FECACA/FFFFFF?text=DL",
  },
];

function SMMarketing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      SMMarketing
      <SocialCarousel testimonials={testimonialsData} />
    </div>
  );
}

export default SMMarketing;
