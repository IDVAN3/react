import React from 'react'
import { Avatar } from 'antd';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Navbar, Container, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import main from '../../images/home.png';
import shedule from '../../images/schedule.png';
import event from '../../images/event.png';
import folder from '../../images/folder.png';
import journal from '../../images/journal.png';
import list from '../../images/list.png';
import wallet from '../../images/wallet.png';
import survey from '../../images/survey.png';
import more from '../../images/more.png';
import ua from '../../images/flag-ua.png';
import en from '../../images/flag-en.png';

import user from '../../images/user.png';
import bell from '../../images/bell.png';
import chat from '../../images/chat.png';
import circle from '../../images/circle.png';
import man from '../../images/man.png';
import woman from '../../images/woman.png';


import Search from '../Search';
import './Header.scss';
import { signOut as signOutAction } from '../../redux/modules/auth';

const Header = ({ auth, signOut }) => {
  const { user } = auth;

  return (
    <>
      <SideNav>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="main">
          <NavItem eventKey="main">
            <NavIcon>
              <img
                src={main}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Головна
                        </NavText>
          </NavItem>

          <NavItem eventKey="shedule">
            <NavIcon>
              <img
                src={shedule}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Розклад
                        </NavText>
            {/* <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem> */}
          </NavItem>

          <NavItem eventKey="event">
            <NavIcon>
              <img
                src={event}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Нвантаження
            </NavText>
          </NavItem>

          <NavItem eventKey="folder">
            <NavIcon>
              <img
                src={folder}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Залікова книжка
            </NavText>
          </NavItem>


          <NavItem eventKey="journal">
            <NavIcon>
              <img
                src={journal}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Журнал
            </NavText>
          </NavItem>


          <NavItem eventKey="list">
            <NavIcon>
              <img
                src={list}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Список
            </NavText>
          </NavItem>

          <NavItem eventKey="chat">
            <NavIcon>
              <img
                src={chat}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Повідомлення
            </NavText>
          </NavItem>


          <NavItem eventKey="bell">
            <NavIcon>
              <img
                src={bell}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Події
            </NavText>
          </NavItem>


          <NavItem eventKey="wallet">
            <NavIcon>
              <img
                src={wallet}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Оплата
            </NavText>
          </NavItem>

          <NavItem eventKey="survey">
            <NavIcon>
              <img
                src={survey}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Опитування
            </NavText>
          </NavItem>

          <NavItem eventKey="more">
            <NavIcon>
              <img
                src={more}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavIcon>
            <NavText>
              Інше
            </NavText>
          </NavItem>

        </SideNav.Nav>
      </SideNav>



      <Navbar collapseOnSelect expand="md" variant="dark">
        <Container>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Пошук"
                                    className="mr-sn-2"

                                />
                                <Button variant="secondary">Пошук</Button>
                            </Form>      
                        </Navbar.Collapse> */}
          <Search></Search>


          <Dropdown as={ButtonGroup}>
            <Button href="/bell" variant="primary">
              <img
                src={bell}
                height="30"
                width="30"
                className="handbell"
                alt="bell"
              />
            </Button>

            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item>
                <img
                  src={circle}
                  height="30"
                  width="30"
                  className="circle"
                  alt="circle"
                />
                                    Перенесена пара
                                    </Dropdown.Item>
              <Dropdown.Item>
                <img
                  src={circle}
                  height="30"
                  width="30"
                  className="circle"
                  alt="circle"
                />
                                     Збори кураторів
                                    </Dropdown.Item>
              <Dropdown.Item>
                <img
                  src={circle}
                  height="30"
                  width="30"
                  className="circle"
                  alt="circle"
                />
                                    Молода хвиля 2020
                                    </Dropdown.Item>
              <hr></hr>
              <Dropdown.Item href="/bell">
                Побачити усі події
                                    </Dropdown.Item>
            </Dropdown.Menu>

            {/* <Dropdown.Toggle split  id="dropdown-split-basic" /> */}


          </Dropdown>


          <Dropdown as={ButtonGroup}>
            <Button href="/chat" variant="primary">
              <img
                src={chat}
                height="30"
                width="30"
                className="chatmessage"
                alt="chat"
              />
            </Button>

            <Dropdown.Toggle split id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item>
                Нові повідомлення
                                    </Dropdown.Item>


              <table className="table table-sm table-borderless">
                <tr>
                  <th rowspan="2">
                    <img
                      src={man}
                      height="30"
                      width="30"
                      className="man"
                      alt="man"
                    /></th>
                  <th >Иван Гриков</th>
                  <th >12.22 PM</th>
                </tr>
                <tr>
                  <th>Привіт. Де у нас пара?</th>
                  <th></th>
                </tr>
              </table>
              <table className="table table-sm table-borderless">
                <tr>
                  <th rowspan="2">
                    <img
                      src={man}
                      height="30"
                      width="30"
                      className="man"
                      alt="man"
                    /></th>
                  <th >Леонид В.</th>
                  <th >1.25 PM</th>
                </tr>
                <tr>
                  <th>Ти йдеш на нову хвилю?</th>
                  <th></th>
                </tr>
              </table>

              <table className="table table-sm table-borderless">
                <tr>
                  <th rowspan="2">
                    <img
                      src={woman}
                      height="30"
                      width="30"
                      className="woman"
                      alt="woman"
                    /></th>
                  <th >Валько В.В.</th>
                  <th >15.42 PM</th>
                </tr>
                <tr>
                  <th>Так.</th>
                  <th></th>
                </tr>
              </table>


              <hr></hr>
              <Dropdown.Item href="/chat">
                Побачити усі повідомлення
                                    </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={ButtonGroup}>
            <Button href="/" variant="primary">
              <img
                src={ua}
                height="30"
                width="30"
                className="flag"
                alt="ua"
              />
                                    Українська
                                </Button>

            <Dropdown.Toggle split id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <img
                  src={en}
                  height="30"
                  width="30"
                  className="flag"
                  alt="en"
                />
                                    Англійська
                                    </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={ButtonGroup}>
            <Link className="Header__user" to="/info">
              <Avatar size={30}>{user.name[0]}</Avatar>
              {`${user.name} ${user.surname}`}
            </Link>
            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item onClick={signOut}>
                Вийти
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default connect(
  ({ auth }) => ({ auth }),
  {
    signOut: signOutAction
  }
)(Header);