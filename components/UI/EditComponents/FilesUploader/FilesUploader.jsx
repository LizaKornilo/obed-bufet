import Image from 'next/image';
import React, { useRef, useState } from 'react';
import styles from './FilesUploader.module.css';

function FilesUploader({ setImageFiles, cssClass }) {
  const filesInput = useRef(null);
  const [previewIsVisible, setPreviewIsVisible] = useState(false);
  const [files, setFiles] = useState([]);

  const handleChange = () => {
    if (filesInput.current.files.length) {
      const files = Array.from(filesInput.current.files);
      setFiles(files);
      setPreviewIsVisible(true);
      setImageFiles(files);
    }
  };

  return (
    <div
      className={cssClass ? `${styles['drop-zone']} ${cssClass}` : styles['drop-zone']}
      role="button"
      tabIndex={0}
      onClick={() => filesInput.current.click()}
      onKeyDown={() => filesInput.current.click()}
    >
      {
        previewIsVisible
          ? files.length
            ? <div className={files.length > 1 ? `${styles["images-grid"]}` : styles["one-image"]}>
              {
                files.map((file, i) => {
                  return <div
                    key={i}
                    className={styles['drop-zone__thumb']}
                    style={{ backgroundImage: `url('${window.URL.createObjectURL(file)}')` }}
                    data-label={file.name}
                  ></div>
                })
              }
            </div>
            : <div className={styles['drop-zone__prompt']}>Файлы не загружены</div>
          : <span className={styles['drop-zone__prompt']}>Нажмите для загрузки</span>
      }
      <input
        className={styles["drop-zone__input"]}
        type="file"
        accept=".jpg, .jpeg, .png"
        ref={filesInput}
        onChange={() => handleChange()}
        multiple
      />
    </div >
  );
}

FilesUploader.defaultProps = {
  defaultImage: null,
};

export default FilesUploader;
