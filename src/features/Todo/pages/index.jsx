import React from "react";
import ListPage from "./ListPage/index";
import DetailPage from "./DetailPage/index";
import { Route, Routes, useRouteMatch } from "react-router-dom";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Routes>
        <Route path={match.path} element={<ListPage />} exact />
        <Route path={`${match.path}/:todoId`} element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default TodoFeature;
