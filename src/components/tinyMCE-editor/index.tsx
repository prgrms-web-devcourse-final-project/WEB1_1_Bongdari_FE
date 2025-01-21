import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

export const TinyMceContainer = ({
  htmlContent,
  setHtmlContent
}: {
  htmlContent?: string;
  setHtmlContent: (text: string) => void;
}) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //     setHtmlContent(editorRef.current.getContent());
  //   }
  // };

  // *** 이 부분은 로그인 가능할 떄 테스트 후 추가 예정 ***
  // useEffect(() => {
  //   // 마우스 클릭 시 에디터 외부를 클릭한 경우만 처리
  //   const handleClickOutside = (e: MouseEvent) => {
  //     // 에디터 컨테이너 외부를 클릭한 경우 처리
  //     if (editorRef.current && !editorRef.current.getContainer().contains(e.target as Node)) {
  //       console.log('Clicked outside of editor');
  //       if (editorRef.current) {
  //         setHtmlContent(editorRef.current.getContent());
  //       }
  //     }
  //   };

  //   // 클릭 이벤트 리스너 추가
  //   document.addEventListener('click', handleClickOutside);

  //   // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [setHtmlContent]);

  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_APP_TINYMCE_API_KEY}
        scriptLoading={{ async: true }}
        onInit={(_evt, editor) => {
          editorRef.current = editor;
          const container = editor.getContainer(); // TinyMCE 컨테이너 가져오기
          if (container) {
            container.addEventListener('mouseleave', () => {
              console.log('Mouse left the editor container');
              if (editorRef.current) {
                console.log(editorRef.current.getContent());
                setHtmlContent(editorRef.current.getContent());
              }
            });
          }
        }}
        initialValue={htmlContent ?? '<p>내용을 입력해보세요</p>'}
        // onEditorChange={handleEditorChange}
        // value={htmlContent}
        init={{
          height: 800,
          menubar: false,
          file_picker_types: 'image', // file_picker_callback이 가능한 파일 종류 선택(media, file, image)
          automatic_uploads: true, // drag & drop
          image_title: true, // ??
          images_upload_url: 'postAcceptor.php', // 이미지를 업로드할 주소 (변경필요)

          // 업로드 버튼을 눌렀을 때 실행되는 함수
          file_picker_callback: (callback, value, meta) => {
            if (meta.filetype === 'image') {
              console.log('value, meta:', value, '/', meta);
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');

              input.onchange = (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                console.log('event', e.target as HTMLInputElement);
                console.log('e.target.files', (e.target as HTMLInputElement).files);
                console.log('file:', file);

                const reader = new FileReader();

                reader.onload = () => {
                  // 파일 블로핑 (tinyMCE에서 임시적으로 파일데이터 저장, 미리보기)
                  const id = 'blobid' + new Date().getTime();

                  // editorRef로 에디터 인스턴스 접근
                  const editor = editorRef.current;
                  if (editor && typeof reader.result === 'string' && file) {
                    const blobCache = editor.editorUpload.blobCache; // Blob 캐시 접근
                    const base64 = reader.result.split(',')[1];
                    const blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);

                    // 콜백 호출
                    callback(blobInfo.blobUri(), {
                      alt: file?.name,
                      title: file?.name
                    });
                  }
                };
                // 블로핑된 파일 URL을 읽어옴
                if (file) reader.readAsDataURL(file);
              };

              // run function
              input.click();
            }
          },

          // file_picker_callback: function (callback, value, meta) {
          //   if (meta.filetype === 'image') {
          //     const input = document.getElementById('my-file') as HTMLInputElement;
          //     if (!input) return;
          //     input.click();
          //     input.onchange = function () {
          //       const file = input?.files ? input.files[0] : null;
          //       const reader = new FileReader();

          //       reader.onload = function (e: ProgressEvent<FileReader>) {
          //         const result = (e.target as FileReader).result;
          //         console.log('name', result);
          //         if (typeof result === 'string') {
          //           callback(result, {
          //             alt: file?.name
          //           });
          //         }
          //       };

          //       if (file) reader.readAsDataURL(file);
          //     };
          //   }
          // },

          // 텍스트 길이 제한 (1000자)
          setup: (editor) => {
            editor.on('input', () => {
              const content = editor.getContent({ format: 'text' }); // 텍스트만 가져옴
              if (content.length > 1000) {
                const trimmedContent = content.slice(0, 1000); // 1000자로 제한
                editor.setContent(trimmedContent); // 내용을 잘라서 설정
              }
            });
          },
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        plugins={[
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'image',
          'editimage',
          'insertdatetime',
          'media',
          'table',
          'code',
          'help',
          'wordcount'
        ]}
        toolbar={
          'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | link | image |' +
          'code | removeformat | help'
        }
      />
      {/* 테스트용 버튼. 삭제할 예정 */}
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
};
