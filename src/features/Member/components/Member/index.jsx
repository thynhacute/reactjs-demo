import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Member.propTypes = {
  member: PropTypes.object.isRequired,
};

function Member({ member }) {
  return (
    <div className="member">
      <div className="member__thumbnail">
        <img src={member.thumbnailUrl} alt={member.name} />
      </div>
      <p className="member__name">{member.name}</p>
    </div>
  );
}

export default Member;
