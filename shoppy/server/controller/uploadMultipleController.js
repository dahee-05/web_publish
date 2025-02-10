import multer from "multer";
import fs from 'fs';
import path from 'path';

/***************************** 
 * multer 라이브러리로  파일을 업로드 폴더에 저장
*****************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) { // destination :파일 저장 위치 지정함수
    cb(null, 'upload_files/') //upload_files 폴더에 저장, 저장 위치 설정
  },
  filename: function (req, file, cb) { // 파일이름 설정
    // cb(null, file.fieldname + '-' + Date.now())
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() *1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  }
})


// imageUpload.jsx에서 append로 file로 보냄
// { storage: storage } 옵션 사용시  파일을 어디에 저장할지 지정가능
// cb : 콜백함수, 에러가 없을 경우 null 입력, 에러 없을 경우 파일지정경로 반환
// upload_files/ === 현재 실행 위치 기준 상대경로, 현재 프로젝트 폴더 내 검색
// '/upload_files/' === 절대경로
// *1e9 : 0 이상 10억 미만의 숫자 


/***************************** 
 * 파일 업로드 - 넘어온 객체 json을 문자형태로 변환
 * url을 통해 넘어온 값은 문자열 
*****************************/
export const fileUploadMultiple = (req, res) => {
  const maxFiles = parseInt(req.query.maxFiles); // 파일의 개수
  const upload = multer({ storage: storage }).array("files", maxFiles); 

  upload(req, res, (err) =>{
    if(err){
      console.log(err);
    }else{
      // console.log('업로드 파일리스트', req.files);
      // console.log('업로드 삭제파일(oldFile)', req.body.oldFile); //배열
      // const deleteFiles = req.body.oldFile;
      // console.log(deleteFiles.length);
      const oldFilearray = req.body.oldFile.split(",");
      console.log(oldFilearray);
      
      
      
      /* 이전 파일 존재시 삭제 로직 */
      // const oldFile = req.body.oldFile;
      for(const oldFile of oldFilearray){
        if(oldFile){// oldFile존재시 업로드 폴더에서 삭제
          const oldFilePath = path.join('upload_files/', oldFile);
          if(fs.existsSync(oldFilePath)){
            try {
              fs.unlinkSync(oldFilePath);
              console.log('이전 파일 삭제 완료 :', oldFilePath);
            } catch (error) {
              console.log('이전 파일 삭제 실패 :',error);
            }  
          }
        }
      }

      // res 객체를 이용한 전송객체, uploadController의 res 객체명과 동일하게 정의 !! 
      let uploadFileName = [];
      let sourceFileName = [];
      let oldFile = [];

      // req.files 배열의 파일정보를 가져와서 위의 배열에 추가
      for(const file of req.files){
        uploadFileName.push(file.path);
        sourceFileName.push(file.originalname);
        oldFile.push(file.filename);
      }

      res.json({
        // 저장된 폴더의 파일명
        // 사용자가 선택한 원래 파일명
        "uploadFileName" : uploadFileName,
        "sourceFileName": sourceFileName,
        "oldFile": oldFile
      });
    }
  });
};

/* fs : 파일 시스템, 실제 경로로 이동해주는 객체
 * join : 윈도우에서 해당 경로를 연결?
 * 
 * existsSync : fs(File System) 모듈에서 제공하는 동기(synchronous) 함수, 특정 파일이나 디렉토리가 존재하는지 *              확인
*/