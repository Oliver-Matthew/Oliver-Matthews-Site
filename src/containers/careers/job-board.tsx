import React from "react";

const roles = [
  {
    id: 1,
    role__name: " Graduate Data Analyst - Cambridge - Cambridge",
    role_commute: "onsite",
    role_location: "London, UK",
    role_type: "Data",
  },
  {
    id: 2,
    role__name: " Graduate Data Analyst - Cambridge - Cambridge",
    role_commute: "onsite",
    role_location: "London, UK",
    role_type: "Change",
  },
  {
    id: 3,
    role__name: " Graduate Data Analyst - Cambridge - Cambridge",
    role_commute: "onsite",
    role_location: "London, UK",
    role_type: "Operations",
  },
  {
    id: 4,
    role__name: " Graduate Data Analyst - Cambridge - Cambridge",
    role_commute: "onsite",
    role_location: "London, UK",
    role_type: "Engineering",
  },
];

export default function JobBoard() {
  return (
    <section className="careers__job__board">
      <h2 className="job__board__header">Current Job Openings</h2>

      <p>
        We&apos;re always looking for great talent to join our teams. If there
        aren&apos;t currently any open roles suitable for you, please register
        your interest in one of our programmes and we will contact you when
        relevant roles become available.
      </p>

      <div className="current__openings__wrapper">
        {roles.map((role) => {
          return (
            <div className="job__item" key={role.id}>
              <div className="role__name">{role.role__name}</div>
              <div className="role__commute">{role.role_commute}</div>
              <div className="role__location">{role.role_location}</div>
              <div className="role__type">{role.role_type}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
