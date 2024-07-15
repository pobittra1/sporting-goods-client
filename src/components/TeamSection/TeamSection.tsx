import member1 from "../../assets/team-member/team1.jpg";
import member2 from "../../assets/team-member/team2.jpg";
import member3 from "../../assets/team-member/team3.jpg";
import member4 from "../../assets/team-member/team4.jpg";

const teamMembers = [
  {
    name: "Hritesh Hamja",
    role: "CEO & Founder",
    image: member1,
    bio: "Hritesh has over 20 years of experience in the sporting goods industry. His vision and leadership have driven the company to new heights.",
  },
  {
    name: "Mainul Islam",
    role: "Chief Marketing Officer",
    image: member2,
    bio: "Mainul innovative marketing strategies have significantly increased our brand’s visibility and customer engagement.",
  },
  {
    name: "Pobiitra Roy",
    role: "Head of Product Development",
    image: member3,
    bio: "Pobittra is passionate about developing high-quality sporting goods. He leads our product development team with creativity and precision.",
  },
  {
    name: "Seikh Ibrahim",
    role: "Customer Service Manager",
    image: member4,
    bio: "Seikh ensures that our customers receive the best service. Her dedication to customer satisfaction is unparalleled.",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={member.image}
                alt={`${member.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="mt-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
