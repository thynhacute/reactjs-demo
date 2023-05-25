import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Member from "../Member";

MemberList.propTypes = {
  memberList: PropTypes.array.isRequired,
};

function MemberList({ memberList }) {
  return (
    <ul className="member-list">
      {memberList.map((member) => (
        <li key={member.id}>
          <Member member={member} />
        </li>
      ))}
    </ul>
  );
}

export default MemberList;
