function ProfileCard({ fName, lName, jobRole, loc, emailID, image, bio }) {
  return (
    <div className="profile-card">
      <img src={image} alt="Profil pic" />
      <h2>
        {fName} {lName}
      </h2>
      <p>
        <strong>Role: </strong>
        {jobRole}
      </p>
      <p>
        <strong>Location: </strong>
        {loc}
      </p>
      <p>
        <strong>Email: </strong>
        {emailID}
      </p>
      <p>
        <strong>Bio: </strong>
        {bio}
      </p>
    </div>
  );
}

export default ProfileCard;
