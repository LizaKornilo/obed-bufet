import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editInterfaceSettings } from 'store/action-creators/interfaseSettings-action-creator';
import { INTERFACE_SETTINGS } from 'utils/consts';
import EditPencil from '../EditPencil/EditPencil';

function EditableScheduleElement({
  element,
  inputCssClass,
  inputDefaultValue,
  placeholderText,
  dayIndex,
  fieldName,
  componentCssClass
}) {
  const schedule = useSelector((state) => state.interfaceSettings.schedule);

  const dispatch = useDispatch();
  let token = null;
  useEffect(() => {
    token = localStorage.getItem('token');
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
      let newObj = JSON.parse(JSON.stringify(schedule));
      newObj[dayIndex][fieldName] = editedString;
      dispatch(editInterfaceSettings(INTERFACE_SETTINGS.schedule, newObj, token));
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

export default EditableScheduleElement;
