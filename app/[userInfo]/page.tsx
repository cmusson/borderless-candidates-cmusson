import React from "react";
import { ICandidate } from "../constants/interfaces";
import UserInfoLeft from "./components/UserInfoLeft";
import UserInfoRight from "./components/UserInfoRight";
import UserInfoBottom from "./components/UserInfoBottom";

interface IUserInfoProps {
  searchParams: ICandidate;
}

export default function Home({ searchParams }: IUserInfoProps) {
  return (
    <main className="py-2 px-4 flex flex-col gap-6">
      <section className="bg-white px-4 py-2 rounded-lg flex flex-col border border-gray-200 md:flex-row">
        <UserInfoLeft
          nationality={searchParams.nationality}
          name={searchParams.name}
          verified={searchParams.verified}
          image={searchParams.image}
        />
        <UserInfoRight
          name={searchParams.name}
          availability={searchParams.availability}
          nationality={searchParams.nationality}
          location={searchParams.location}
          role={searchParams.role}
        />
      </section>

      <UserInfoBottom
        drivingLicense={searchParams.drivingLicense}
        accommodationSupportRequired={searchParams.accomodationSupportRequired}
        skills={searchParams.skills}
        availability={searchParams.availability}
        experience={searchParams.experience}
      />
    </main>
  );
}
