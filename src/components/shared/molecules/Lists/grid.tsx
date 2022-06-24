import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
interface IProps {
    noOfcolomns: number;
    handleClick?: () => void;
    items: any;
    Children: FC;
}

const Grid: React.FunctionComponent<IProps> = React.memo(
    ({
        noOfcolomns,
        handleClick,
        items,
        Children
    }: IProps): JSX.Element => {

        return (
            <div className="App">
                <Container>
                    <Row xs={noOfcolomns}>
                        {items.map(() => {
                            return (
                                <Col>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>

        )
    }
);

export { Grid };
