import React from "react";
import PropTypes from "prop-types";
import MemberList from "../components/MemberList";

MemberFeature.propTypes = {};

function MemberFeature(props) {
  const memberList = [
    {
      id: 1,
      name: "Đào Ánh Nguyệt",
      thumbnailUrl:
        "https://f59-zpg-r.zdn.vn/5150506403083045805/230f9253d9b007ee5ea1.jpg",
      des: "cutehfjsdhfs",
    },
    {
      id: 2,
      name: "Đoàn Hoà Nhã",
      thumbnailUrl:
        "https://f47-zpg-r.zdn.vn/3537569776120863501/385490bed55d0b03524c.jpg",
      des: "cutehfjsdhfs",
    },
    {
      id: 3,
      name: "Dương Thị Hồng Châu",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/325179468_5639798889475991_6682406290721735931_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Y2B7KWirKiAAX8kuIWw&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDbnNCoKd5SYH_UawqSsdXb6sEZnqJvU-b3Amvx5j353A&oe=6476F289",
      des: "cutehfjsdhfs",
    },
    {
      id: 4,
      name: "Hoàng Nhã Thy",
      thumbnailUrl:
        "https://f46-zpg-r.zdn.vn/2305522295969170454/0f89bd1ce5ff3ba162ee.jpg",
      des: "cutehfjsdhfs",
    },
    {
      id: 5,
      name: "Trần Hồng Minh Nhật",
      thumbnailUrl:
        "https://f45-zpg-r.zdn.vn/6991047853753958303/b6317b3f26dcf882a1cd.jpg",
      des: "cutehfjsdhfs",
    },
    {
      id: 6,
      name: "Trần Phương Thái",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/330452569_526358329367424_5189627885239462029_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=quvKJgoIc0cAX-Tkn0f&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDuIwoi9uIqV9X6nFscupclGI42Z5wimIA2TMt98Xucaw&oe=64770DC8",
      des: "cutehfjsdhfs",
    },
    {
      id: 7,
      name: "Phan Quốc Thái",
      thumbnailUrl:
        "https://f63-zpg-r.zdn.vn/4915628259913334209/fed88321d4c20a9c53d3.jpg",
      des: "cutehfjsdhfs",
    },
  ];
  return (
    <div>
      <h2>Meo Meo Meo Meo tra lai tam tri tui day</h2>
      <div>
        <MemberList memberList={memberList} />
      </div>
    </div>
  );
}

export default MemberFeature;
