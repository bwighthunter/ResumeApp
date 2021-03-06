import React from 'react';
import School from './school.jsx'

export default class EducationSection extends React.Component {

  render() {
    let { schools } = this.props.data;
    let schoolSet = schools.map((school, i) => <School data={school} key={school.id} />);

    return (
      <div>
        <h3>Education</h3>
        {schoolSet}
      </div>
    )}
}
