import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';
import { IAddService } from '../../../services/interfaces';
import { Button, BUTTON_TYPES, TextInput, TextLabel } from '../../shared';

interface IProps {
  onClickNext: () => void;
  onClickBack: () => void;
  addServiceInfo?: IAddService;
  setAddServiceInfo: (data: IAddService) => void;
}

const AddServiceQuestions: React.FunctionComponent<IProps> = ({
  onClickNext,
  onClickBack,
  addServiceInfo,
  setAddServiceInfo,
}: IProps): JSX.Element => {
  const serviceQuestions: any[] = addServiceInfo?.serviceQuestions || [];
  const emptyArray = Array(
    serviceQuestions.length === 0 ? 1 : serviceQuestions.length
  ).fill(null);
  const formattedQuestions = emptyArray.map((_, index) => {
    if (serviceQuestions[index]) {
      return serviceQuestions[index];
    }
    return null;
  });

  const [questions, setQuestions] =
    React.useState<(string | null)[]>(formattedQuestions);

  const setQuestionsToArray = (question: string, index: number) => {
    questions[index] = question;

    setQuestions([...questions]);
  };

  const removeQuestion = (indexToBeRemoved: number) => {
    questions.splice(indexToBeRemoved, 1);
    setQuestions([...questions]);
  };

  const [error, setError] = React.useState<string | undefined>(undefined);

  const setAddedQuestions = (addedQuestions: (string | null)[]) => {
    setError(undefined);
    const filteredQuestions = addedQuestions.filter((el) => {
      return el !== null;
    });
    if (filteredQuestions.length < 1) {
      setError('You need to add at least 1 question');
      return false;
    }
    setAddServiceInfo({ serviceQuestions: filteredQuestions });
    return true;
  };
  return (
    <Container className="m-0 p-0">
      <Row>
        <TextLabel
          text="Ask from the clients what you need to know."
          className="add-service-input-label"
        />
      </Row>
      <Row className="mt-4">
        {questions.map((question, index) => {
          return (
            <Row key={index}>
              <Col md="10">
                <TextInput
                  type="textarea"
                  rows={3}
                  placeholder=""
                  labelText={`Question ${index}`}
                  labelClassName="add-service-input-label"
                  value={question ? question : ''}
                  onChange={(event) =>
                    setQuestionsToArray(event.target.value, index)
                  }
                />
              </Col>
              <Col
                className="d-flex align-items-center add-more-btn"
                onClick={(event) => removeQuestion(index)}
              >
                <IoIosRemoveCircle size={32} />
              </Col>
            </Row>
          );
        })}
        <Row>
          <div
            className="mt-4 add-more-btn"
            onClick={() => {
              setQuestions((prev) => {
                const arr = prev.map((el) => el);
                arr.push(null);
                return arr;
              });
            }}
          >
            <IoIosAddCircle size={32} /> <span>Add More</span>
          </div>
        </Row>
      </Row>

      <Row className="mt-4">
        {error && (
          <div className="d-flex justify-content-end">
            <TextLabel text={error} className="add-service-warning-label" />
          </div>
        )}
        <div className="d-flex justify-content-end">
          <Button
            type={BUTTON_TYPES.SECONDARY}
            title={'Back'}
            className="mr-4 stepper-next-button"
            onClick={onClickBack}
          />
          <Button
            type={BUTTON_TYPES.PRIMARY}
            title={'Save & Next'}
            className="stepper-next-button"
            onClick={() => {
              const response: boolean = setAddedQuestions(questions);
              if (response) {
                onClickNext();
              }
            }}
          />
        </div>
      </Row>
    </Container>
  );
};

export { AddServiceQuestions };
