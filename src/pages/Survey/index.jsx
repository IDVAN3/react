import React, { useEffect } from 'react'
import { Container, CardDeck, Card, Button, CardColumns } from 'react-bootstrap';
import { Calendar } from 'antd';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

import { fetchSurvey as fetchSurveyAction } from '../redux/modules/survey';

const Survey = ({ meSurvey, fetchSurvey, loading }) => {
  useEffect(() => {
    fetchSurvey();
  }, [])


  return (
    <div>
      <div className="wrapper">
        <Container>
          <div className="survey">
          <h3 className="text-left m-4">Опитування</h3>
          <Loader loading={loading}>
            <div className="card-deck">
              {meSurvey.map((item, index) => (
                <div key={index} className="card mb-4">
                  <div className="card-body">
                    <h6 className="card-text-lesson">{item.name}</h6>
                    <h6 className="card-title-teacher">{item.description}</h6>
                  </div>
                </div>
              ))}
            </div>
          </Loader>
          </div>
        </Container>
      </div>
    </div>
  )
};

export default connect(
  ({ survey }) => ({ meSurvey: survey.meSurvey, loading: survey.loading }),
  {
    fetchSurvey: fetchSurveyAction
  }
)(Survey);