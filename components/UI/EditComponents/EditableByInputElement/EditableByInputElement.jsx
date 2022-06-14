import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editInterfaceSettings } from 'store/action-creators/interfaseSettings-action-creator';
import EditPencil from '../EditPencil/EditPencil';

function EditableByInputElement({ element, inputCssClass, inputDefaultValue, placeholderText, interfaseSettingKey, componentCssClass }) {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [])

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedString, setEditedString] = useState(inputDefaultValue);
  const change = (e) => {
    setEditedString(e.target.value)
  }
  const enableEditMode = () => {
    setIsEditMode(true)
  }
  const disableEditMode = () => {
    setIsEditMode(false);
  }
  const edit = (event) => {
    if (event.key === 'Enter') {
      dispatch(editInterfaceSettings(interfaseSettingKey, editedString, token));
      disableEditMode();
    }
  }

  return (
    <div
      style={{ position: 'relative' }}
      className={componentCssClass ? componentCssClass : null}
    >
      {
        isEditMode
          ? <input
            className={inputCssClass}
            autoFocus
            type='text'
            placeholder={placeholderText}
            value={editedString}
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

export default EditableByInputElement;
