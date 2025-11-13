function TeamMemberCard({
  name,
  position,
  department,
  skills,
  yearsOfExperience,
  image,
}) {
  return (
    <div className="team-member-card">
      <img src={image} alt={name} />
      <p>
        <strong>Name: </strong> {name}
      </p>
      <p>
        <strong>Position: </strong> {position}
      </p>
      <p>
        <strong>Department: </strong> {department}
      </p>
      {/* <p>
        <strong>Skills using Join: </strong> {skills.join(", ")}
      </p> */}
      <p>
        <strong>Skills using map: </strong>
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}{" "}
          </span>
        ))}
      </p>
      <p>
        <strong>Years of Experience: </strong> {yearsOfExperience} years
      </p>
    </div>
  );
}

export default TeamMemberCard;
