import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { memo, useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface IProps {
  text?: string;
  onChangeText?: (text: string) => void;
}

const RichTextEditor: React.FunctionComponent<IProps> = memo(
  ({ text, onChangeText }: IProps): JSX.Element => {
    const [editorState, setEditorState] = useState<any>(undefined);

    useEffect(() => {
      const blocksFromHTML = convertFromHTML(text || '');
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      const editorStateText = EditorState.createWithContent(contentState);
      setEditorState(editorStateText);
    }, []);

    return (
      <div className="">
        <Editor
          editorState={editorState}
          toolbarClassName="rich-text-editor-toolbar"
          wrapperClassName="rich-text-editor-wrapper"
          editorClassName="rich-text-editor"
          onEditorStateChange={(editor) => {
            setEditorState(editor);
            const editorHTML = draftToHtml(
              convertToRaw(editor.getCurrentContent())
            );
            onChangeText && onChangeText(editorHTML);
          }}
        />
      </div>
    );
  }
);
export { RichTextEditor };
