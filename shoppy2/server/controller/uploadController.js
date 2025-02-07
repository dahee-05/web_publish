import multer from "multer";

/****************************** 
 * 파일 저장 로직? 
******************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) { // destination :파일 저장 위치 
    cb(null, 'upload_files/')
  },
  filename: function (req, file, cb) {   // 파일이름 설정
    // cb(null, file.fieldname + '-' + Date.now())
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() *1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  }
})

const upload = multer({ storage: storage }).single('file');



/****************************** 
 * 파일 업로드 - 넘어온 객체 json을 문자형태로 변환
******************************/
export const getUploadFile = (req, res)=> {
  
  upload(req, res, (err) => {
    if(err){
      console.log(err);
    }else{
      console.log('req.file-->', req.file);
      res.json({
        "uploadFileName": res.req.file.path ,
        "sourceFileName": req.file.originalname
      });
    }  
   })
};

/* 넘기는 formData의 값에는  req.file.originalname 가 없는데 어떻게 불러오지?
  req.data --> {uploadFileName: 'upload_files\\1738832980101-579999076-1.webp', 
            sourceFileName: '1.webp'}
  📌 File 객체는 원래 originalname 속성을 가지지 않음
  ✅ multer가 파일을 처리하면서 req.file 객체를 생성 -> originalname을 추가해줌
  ✅ req.file upload(req, res, callback) 실행 시점에서 생성

*/

// imageUpload.jsx에서 append로 file로 보냄
// { storage: storage } 옵션 사용시  파일을 어디에 저장할지 지정가능
// cb : 콜백함수, 에러가 없을 경우 null 입력, 에러 없을 경우 파일지정경로 반환
// upload_files/ === 현재 실행 위치 기준 상대경로, 현재 프로젝트 폴더 내 검색
// '/upload_files/' === 절대경로
// *1e9 : 0 이상 10억 미만의 숫자 