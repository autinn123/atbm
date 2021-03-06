import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StaffNavbar from '../../components/StaffNavbar';
import Marks from '../../components/Mark';
import Courses from '../../components/Course';
import CourseHistory from '../../components/Course/history';
import MajorSubject from '../../components/MajorSubject';

const StaffPage = () => {
  return (
    <Router>
      <StaffNavbar />
      <Switch>
        <Route path="/marks" exact component={Marks}></Route>
        <Route path="/courses" exact component={Courses}></Route>
        <Route path="/course-history" exact component={CourseHistory}></Route>
        <Route path="/majors-subjects" exact component={MajorSubject}></Route>
      </Switch>
    </Router>
  );
}

export default StaffPage;