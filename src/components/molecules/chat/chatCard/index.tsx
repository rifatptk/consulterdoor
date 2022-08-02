import { Container, Row } from "reactstrap";

interface IChatCardInfoProps {
    name: string;
    service: string;
    jobTitle: string;
}



export function ChatCardInfo(props: IChatCardInfoProps) {
    return (
        <Container className="primary-font">
            <Row className="font-bold">{props.name}</Row>
            <Row className="font-regular font-size-extra-small secondary-text-color">{props.jobTitle}</Row>
            <Row className="font-regular font-size-extra-small quaternary-text-color">{props.service} </Row>
        </Container>
    )

}