import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Member from "../Member";

MemberList.propTypes = {
  memberList: PropTypes.array.isRequired,
};

function MemberList({ memberList }) {
  return (
    <ul>
      {memberList.map((member) => (
        <div className="member-list">
          <div className="lines">
            <li key={member.id}>
              <Member member={member} />
            </li>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default MemberList;
