import React, { useEffect } from 'react'
import { Container, CardDeck, Card, Button, CardColumns } from 'react-bootstrap';
import { Calendar } from 'antd';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import { fetchSchedule as fetchScheduleAction } from '../redux/modules/schedule';

const Main2 = ({ meSchedule, fetchSchedule, loading }) => {
  useEffect(() => {
    fetchSchedule();
  }, [])

  return (
    <div>
      <div className="wrapper">
        <Container>
          <h3 className="text-left m-4">Розклад пар на сьогодні</h3>
          <Loader loading={loading}>
            <div className="card-deck">
              {meSchedule.map((item, index) => (
                <div key={index} className="card mb-4">
                  <div className="card-body">
                    <h6 className="card-text-time">{item.time_begin}</h6>
                    <h6 className="card-text-lesson">{item.subject}</h6>
                    <h6 className="card-title-teacher">{item.teacher}</h6>
                    <h4 className="card-title-class">Ауд. {item.audience}</h4>
                  </div>
                </div>
              ))}
            </div>
          </Loader>
          <div className="calendar">
            <h3 className="text-left m-4">Календар з подіями університету</h3>
            <div className="wrapper-calendar">
              <Calendar></Calendar>
            </div>
          </div>
          <div className="news">
            <h3 className="text-left m-4">Новини університету</h3>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-4">
                <div className="cardnews">
                  <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" variant="top" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="cardtitle-news">News</h5>
                    <p className="cardtext-news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ante enim, id laoreet magna lacinia in. Mauris rhoncus velit nec ex viverra, sit amet vulputate tortor vulputate. </p>
                    <Button className="btn btn-secondary d-block mx-auto">
                      Дізнатися більше
                                </Button>
                  </div>
                </div>
              </div>

              <div className="col mb-4">
                <div className="cardnews">
                  <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" variant="top" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="cardtitle-news">News</h5>
                    <p className="cardtext-news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ante enim, id laoreet magna lacinia in. Mauris rhoncus velit nec ex viverra, sit amet vulputate tortor vulputate. </p>
                    <Button className="btn btn-secondary d-block mx-auto">
                      Дізнатися більше
                                </Button>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="cardnews">
                  <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" variant="top" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="cardtitle-news">News</h5>
                    <p className="cardtext-news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ante enim, id laoreet magna lacinia in. Mauris rhoncus velit nec ex viverra, sit amet vulputate tortor vulputate. </p>
                    <Button className="btn btn-secondary d-block mx-auto">
                      Дізнатися більше
                                </Button>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="cardnews">
                  <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" variant="top" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="cardtitle-news">News</h5>
                    <p className="cardtext-news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ante enim, id laoreet magna lacinia in. Mauris rhoncus velit nec ex viverra, sit amet vulputate tortor vulputate. </p>
                    <Button className="btn btn-secondary d-block mx-auto">
                      Дізнатися більше
                                </Button>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="cardnews">
                  <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" variant="top" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="cardtitle-news">News</h5>
                    <p className="cardtext-news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ante enim, id laoreet magna lacinia in. Mauris rhoncus velit nec ex viverra, sit amet vulputate tortor vulputate. </p>
                    <Button className="btn btn-secondary d-block mx-auto">
                      Дізнатися більше
                                </Button>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="cardnews">
                  <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" variant="top" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="cardtitle-news">News</h5>
                    <p className="cardtext-news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies ante enim, id laoreet magna lacinia in. Mauris rhoncus velit nec ex viverra, sit amet vulputate tortor vulputate. </p>
                    <Button className="btn btn-secondary d-block mx-auto">
                      Дізнатися більше
                                </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
};

export default connect(
  ({ schedule }) => ({ meSchedule: schedule.meSchedule, loading: schedule.loading }),
  {
    fetchSchedule: fetchScheduleAction
  }
)(Main2);