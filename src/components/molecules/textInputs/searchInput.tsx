import React, { useCallback, useEffect, useState } from 'react';
import { Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { consultServicesService } from '../../../services';

interface IProps {
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validation?: {
    isInValid: boolean;
    validationMsg?: string;
  };
  innerRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
}

// interface IToggle {
//   children: React.ReactNode;
//   onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// }

// TODO - Charitha - SearchInput can be common component
const SearchInput: React.FunctionComponent<IProps> = React.memo(
  // eslint-disable-next-line no-empty-pattern
  ({}: IProps) => {
    const [searchSuggestionsDropdown, setSearchSuggestionsDropdown] =
      useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [searchText, setSearchText] = useState('');
    // const CustomToggle = React.forwardRef(
    //   ({ children, onClick }: IToggle, ref) => (
    //     <button
    //       className="category-dropdown"
    //       id="dropdown-basic"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         onClick(e);
    //       }}
    //     >
    //       <BsSliders className="main-color" />
    //     </button>
    //   )
    // );

    const handleSearchInput = useCallback(
      async (event: any) => {
        const tempSearchText = event.target.value;
        setSearchText(event.target.value);
        if (tempSearchText && tempSearchText.length > 1) {
          const response = await consultServicesService.getSearchSuggestion(
            tempSearchText
          );
          const tempSuggestions =
            response && response.map((data: any) => data.keyword);
          setSuggestions(tempSuggestions);
          setSearchSuggestionsDropdown(true);
        } else {
          setSearchSuggestionsDropdown(false);
        }
      },
      [searchSuggestionsDropdown, searchText]
    );
    const suggestionToggle = useCallback(
      (event: any) => {
        setSearchSuggestionsDropdown((prev) => !prev);
      },
      [searchSuggestionsDropdown]
    );

    const handleSuggestionClick = (word: string) => {
      setSearchSuggestionsDropdown(false);
    };
    return (
      <div className="">
        <InputGroup className="mb-3">
          {/* <InputGroup.Text className="background-color-bg">
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              />
              <Dropdown.Menu className="justify-content-start">
                <Row xl={4} className="justify-content-start">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={idx}>
                      <Dropdown.Header>
                        <div className="main-color">
                          <b>Graphic Design</b>
                        </div>
                      </Dropdown.Header>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Col>
                  ))}
                </Row>
              </Dropdown.Menu>
            </Dropdown>

          </InputGroup.Text> */}
          <Dropdown
            show={searchSuggestionsDropdown}
            onToggle={suggestionToggle}
          >
            <Dropdown.Menu style={{ width: '100%' }}>
              {suggestions.map((word: string) => (
                <Dropdown.Item
                  className="font-regular font-size-small p-1"
                  onClick={() => handleSuggestionClick(word)}
                >
                  {word}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            aria-label="Amount (to the nearest dollar)"
            onChange={handleSearchInput}
            value={searchText}
          />
          <InputGroup.Text className="main-color-bg">
            <button>
              <Row>
                <Col
                  md="auto"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <BsSearch className="background-color" />
                </Col>
                <Col
                  md="auto"
                  style={{ display: 'flex', alignContent: 'center' }}
                  className="background-color"
                >
                  Search
                </Col>
              </Row>
            </button>
          </InputGroup.Text>
        </InputGroup>
      </div>
    );
  }
);

export { SearchInput };
