import * as React from 'react';
interface IProps {
    tagName: string;
    onRemove?: () => void;
}

const SearchTag: React.FunctionComponent<IProps> = React.memo(
    ({
        tagName,
        onRemove
    }: IProps): JSX.Element => {

        return (
            <div className="tag-container light-gray-color-bg" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className="ml-2">
                    {tagName}
                </div>
                <div>
                    <button className="close-button" type="button" onClick={onRemove}>
                        <span aria-hidden="true" style={{ fontSize: '20px' }} >&times;</span>
                    </button>
                </div>
            </div>
        );
    }
);

export { SearchTag };
