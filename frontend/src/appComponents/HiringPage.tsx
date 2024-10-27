"use client";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";
import HiringSessionClubCard from "./HiringSessionClubCard";
import { useClubs } from "../hooks/useClubs";

const HiringPage = () => {
  const { data: clubs } = useClubs();

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800">
      <div className="relative z-10 bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 animate-gradient"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
          <h1 className="text-5xl font-extrabold mb-4">Join Our Team!</h1>
          <p className="text-xl mb-8">We're Hiring Passionate Individuals.</p>
          <Button className="bg-white text-gray-900 hover:bg-gray-200">
            Explore Job Openings
          </Button>
        </div>
      </div>
      <div className="min-h-screen px-6 py-12 bg-white">
        <div className="pb-10 text-center">
          <h1 className="pb-4 text-3xl font-semibold">Current Openings</h1>
          <p className="text-base text-slate-600">
            Check out our latest job postings below:
          </p>
          {/* Display clubs in a list format */}
          <div className="space-y-8 px-8 mt-5">
            {clubs?.map((club, index) => (
              <HiringSessionClubCard
                key={index}
                memberCount={club.Members.length}
                name={club.ClubName}
                description={club.Description}
                email={club.Email}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HiringPage;
