import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editInterfaceSettings } from 'store/action-creators/interfaseSettings-action-creator';
import EditPencil from '../EditPencil/EditPencil';

function EditableByTextareaElement({ element, textareaCssClass, textareaDefaultValue, placeholderText, interfaseSettingKey, componentCssClass }) {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [])

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedText, setEditedText] = useState(textareaDefaultValue);
  const change = (e) => {
    setEditedText(e.target.value)
  }
  const enableEditMode = () => {
    setIsEditMode(true)
  }
  const disableEditMode = () => {
    setIsEditMode(false);
  }
  const edit = (event) => {
    if (event.key === 'Enter') {
      dispatch(editInterfaceSettings(interfaseSettingKey, editedText, token));
      disableEditMode();
    }
  }

  return (
    <div
      style={{ position: 'relative',
       width: "100%" 
    }}
      className={componentCssClass ? componentCssClass : null}
    >
      {
        isEditMode
          ? <textarea
            className={textareaCssClass}
            autoFocus
            type='text'
            placeholder={placeholderText}
            value={editedText}
            onChange={change}
            onKeyDown={edit}
            onBlur={disableEditMode}
          />
          :
          <>
            {element}
            <EditPencil onClickHandler={() => enableEditMode()} />
          </>
      }
    </div>
  );
}

export default EditableByTextareaElement;
