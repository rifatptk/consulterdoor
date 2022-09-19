import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Col, Container, Row } from 'reactstrap';
import { getConsultant } from '../../../services/consultant/consultantService';
import { IConsultantQualification } from '../../../services/interfaces';
import { messages } from '../../../shared/localize';
import { TextLabel } from '../../shared';
import {
  ConsultantQualification,
  SelectedTags,
} from '../consultantForms/consultantEducation';
import { ServiceCardList } from '../serviceCardList';

function ViewConsultantProfile() {
  const params = useParams();
  const [consultant, setConsultant] = useState<any>(undefined);

  useEffect(() => {
    if (params && params.consultantId) {
      getConsultant(params.consultantId).then((result) => {
        setConsultant(result.data);
      });
    }
  }, [params]);
  if (!consultant) {
    return <></>;
  }
  return (
    <div className="content-container">
      <Container>
        <div className="font-bold font-size-medium mb-2">Profile View</div>
        <Row className="profile-content-container">
          <Col sm="auto" className="mb-2">
            <div className="verify-badge" />
            <img
              className="profile-main-image"
              style={{ width: '8rem', height: '8rem' }}
              src={consultant.consultantImage}
              alt="consult profile"
            />
          </Col>
          <Col sm="auto">
            <Row>
              <TextLabel
                className="primary-font font-bold font-size-medium font-tertiary-color"
                style={{ lineHeight: '30px' }}
                text={`${consultant.firstName} ${consultant.lastName}`}
              />
            </Row>
            <Row>
              <TextLabel
                className="primary-font font-tertiary-color"
                style={{
                  lineHeight: '20px',
                  fontSize: '1.2rem',
                }}
                text={`I am ${consultant.jobTitle}`}
              />
            </Row>
            <Row>
              <TextLabel
                className="primary-font font-regular font-size-small font-tertiary-color"
                style={{
                  fontSize: '0.9rem',
                  lineHeight: '27px',
                }}
                text={`Joined ${consultant.formattedJoinedDate}`}
              />
            </Row>

            {/* <Row className="mt-3">
              <Col sm="auto">
                <Rating
                  readonly
                  emptySymbol={<FaRegStar className="icon rating-icon" />}
                  fullSymbol={<FaStar className="icon rating-icon" />}
                  initialRating={consultant.overallRating}
                  fractions={2}
                />
              </Col>
              <Col
                sm="auto"
                className="rating-text-container font-fourth-color font-medium font-size-small"
              >
                {consultant.overallRating}
                <span className="ml-1 font-regular font-size-extra-small">
                  ({consultant.numberOfReviews} reviews)
                </span>
              </Col>
            </Row> */}
            <Row className="">
              <Col className="primary-font font-regular font-tertiary-color font-size-extra-small">
                {consultant.description}
              </Col>
              <Col />
            </Row>
          </Col>
        </Row>
        <Tabs className="consultant-profile-tabs mt-3">
          <TabList>
            <Tab>Education</Tab>
            <Tab>Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            {consultant?.educations?.map(
              (qualification: IConsultantQualification, index: number) => {
                if (index < 2) {
                  return (
                    <ConsultantQualification
                      key={index}
                      qualification={qualification}
                      isEditable={false}
                    />
                  );
                }
              }
            )}
            {consultant?.educations?.length > 2 && (
              // TODO need to add styles
              <div className="consultant-profile-seemore-container font-medium font-size-regular ">
                See all education qualifications
                <FaArrowRight className="ml-2" />
              </div>
            )}
          </TabPanel>
          <TabPanel>
            <SelectedTags
              defaultTags={[
                'AWS',
                'Mobile Developments',
                'JavaScript',
                'Python',
                'Machine Learning',
                'Serverless',
              ]}
              removeTag={() => {
                //TODO should add remove function
                return;
              }}
              isEdit={false}
            />
          </TabPanel>
          <TabPanel>
            <p>
              <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (
              <i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once romanized as Yossy, is
              a fictional anthropomorphic dinosaur who appears in video games
              published by Nintendo. Yoshi debuted in Super Mario World (1990)
              on the Super Nintendo Entertainment System as Mario and Luigi's
              sidekick. Yoshi later starred in platform and puzzle games,
              including Super Mario World 2: Yoshi's Island, Yoshi's Story and
              Yoshi's Woolly World. Yoshi also appears in many of the Mario
              spin-off games, including Mario Party and Mario Kart, various
              Mario sports games, and Nintendo's crossover fighting game series
              Super Smash Bros. Yoshi belongs to the species of the same name,
              which is characterized by their variety of colors.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a
              fictional character who primarily appears in Nintendo's Mario
              franchise. Created by Japanese video game designer Shigeru
              Miyamoto, he is portrayed as a citizen of the Mushroom Kingdom and
              is one of Princess Peach's most loyal attendants; constantly
              working on her behalf. He is usually seen as a non-player
              character (NPC) who provides assistance to Mario and his friends
              in most games, but there are times when Toad(s) takes center stage
              and appears as a protagonist, as seen in Super Mario Bros. 2,
              Wario's Woods, Super Mario 3D World, and Captain Toad: Treasure
              Tracker.
            </p>
            <p>
              Source:{' '}
              <a
                href="https://en.wikipedia.org/wiki/Toad_(Nintendo)"
                target="_blank"
              >
                Wikipedia
              </a>
            </p>
          </TabPanel>
        </Tabs>
      </Container>

      <Container>
        <div className="align-items-center">
          <div className="main-section">
            <TextLabel
              className="primary-font font-size-large font-bold"
              style={{
                lineHeight: '54px',
              }}
              text={messages.consultantProfile.myServices}
            />
            <ServiceCardList
              data={
                consultant.services &&
                consultant.services.map((data: any) => {
                  return {
                    consultantName: data.consultantName,
                    consultantImage: data.consultantImage,
                    serviceName: data.serviceName,
                    costPerHour: data.costPerHour,
                    consultServiceKey: data.consultServiceKey,
                    serviceImage: data.serviceImage,
                    isOnline: data.isOnline,
                    overallRating: data.overallRating,
                    numberOfReviews: data.numberOfReviews,
                    numberOfAppointments: data.numberOfAppointments,
                  };
                })
              }
            />
          </div>
        </div>

        <Row className="main-section">
          <Row>
            <TextLabel
              className="primary-font font-size-large font-bold"
              style={{
                lineHeight: '54px',
              }}
              text={messages.consultantProfile.similarConsultants}
            />
          </Row>
          <Row className="p-0">
            {/* <ServiceCardList data={[{}, {}, {}, {}, {}, {}, {}]} /> */}
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export { ViewConsultantProfile };
