import React from "react";
import PropTypes from "prop-types";
import MemberList from "../components/MemberList";

MemberFeature.propTypes = {};

function MemberFeature(props) {
  const memberList = [
    {
      id: 1,
      name: "Mèo Baby",
      thumbnailUrl:
        "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-meo-cute.jpg",
    },
    {
      id: 2,
      name: "Mèo Gâu Gâu",
      thumbnailUrl:
        "https://c3kienthuyhp.edu.vn/wp-content/uploads/2023/01/1672719948_357_Anh-Meo-Cute-De-Thuong-Dang-Yeu-Den-Ngan-Ngo.jpg",
    },
    {
      id: 3,
      name: "Meo Amme",
      thumbnailUrl:
        "https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-41.jpg",
    },
  ];
  return (
    <div>
      <h2>Meo Meo Meo Meo tra lai tam tri tui day</h2>
      <MemberList memberList={memberList} />
    </div>
  );
}

export default MemberFeature;
