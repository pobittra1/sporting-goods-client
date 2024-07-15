import InfoAboutCompany from "@/components/InfoAboutCompany/InfoAboutCompany";

function AboutUs() {
  return (
    <div
      className="my-12 py-"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #d6c8d1, #d9c5c6, #d5c3bc, #ccc3b5, #bfc4b4)",
      }}
    >
      <h1 className="text-3xl text-center font-bold my-4 capitalize pt-8">
        About Us
      </h1>
      <div className="Container-div mx-auto w-11/12">
        <InfoAboutCompany></InfoAboutCompany>
      </div>
    </div>
  );
}

export default AboutUs;
