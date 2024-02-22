import { ICandidate, IUser } from "../constants/interfaces";

const getCandidates = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    console.error(`Failed to fetch data. Status: ${res.status}`);
  }

  const users = (await res.json()) as IUser[];

  // to create a couple extra mock use cases
  const generateRandomBool = () => {
    return Math.random() < 0.5;
  };

  const candidates = users.map((user) => {
    const name = user.name;
    const image = "/cartoon_connor.jpeg";
    const verified = generateRandomBool();
    const location = user.address.city;
    const role = generateRandomBool() === true ? "Carer" : "Senior Carer";
    const nationality = "World Citizen";
    const availability = "Within 1 month";
    const experience = user.address.street;
    const drivingLicense = "Automatic";
    const accomodationSupportRequired = generateRandomBool();
    const skills = [user.company.bs, user.company.catchPhrase];

    return {
      name,
      image,
      verified,
      location,
      role,
      nationality,
      availability,
      experience,
      drivingLicense,
      accomodationSupportRequired,
      skills,
    };
  });

  return candidates as ICandidate[];
};

export default getCandidates;
