"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Prabhjot Singh",
    avatar: "P",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
    profileLink: "https://www.linkedin.com/in/prabhjot-singh-chugh/",
  },
  {
    name: "Srishti Sharma",
    avatar: "S",
    title: "Software Engineer",
    description: "I use this daily for generating new photos!",
    profileLink: "https://www.linkedin.com/in/srishti-sharma-653497241/",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-40 pb-20 ">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">
                    <a href={item.profileLink} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      {item.name}
                    </a>
                  </p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
