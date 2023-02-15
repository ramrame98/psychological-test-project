const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const loading = document.querySelector("#loading");

const endPoint = 10; /* 질문의 개수 정의 */
const select = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]; /* 답변의 개수 */

function calResult() {
  var result = select.indexOf(Math.max(...select));
  return result;
}
function setResult() {
  let point = calResult();
  const resultName = document.querySelector(".resultLang");
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement("img");
  resultImg.classList.add("resultImg");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = "img/image-" + point + ".png";
  resultImg.src = imgURL;
  resultImg.alt = point;
  imgDiv.appendChild(resultImg);

  const langInfo = document.querySelector(".langInfo");
  const bookInfo = document.querySelector(".bookInfo");
  const lectureInfo = document.querySelector(".lectureInfo");
  const negativeLang = document.querySelector(".negativeLang");
  langInfo.innerHTML = infoList[point].detail;
  bookInfo.innerHTML = infoList[point].book;
  lectureInfo.innerHTML = infoList[point].lecture;
  negativeLang.innerHTML = infoList[point].negativeLang;
}

function goResult() {
  // loading.style.WebkitAnimation = "fadeOut 1s";
  // loading.style.Animation = "fadeOut 1s";
  result.style.WebkitAnimation = "fadeIn 1s";
  result.style.Animation = "fadeIn 1s";
  setTimeout(() => {
    loading.style.display = "none";
    result.style.display = "block";
  }, 2500);
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("fadeIn");
  a.appendChild(answer); /* answerBox <div>태그 안에 <button> 만들기*/
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        for (let i = 0; i < target.length; i++) {
          select[target[i]] += 1;
        }

        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

function goLoading() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.Animation = "fadeOut 1s";
  loading.style.WebkitAnimation = "fadeIn 1s";
  loading.style.Animation = "fadeIn 1s";
  qna.style.display = "none";
  loading.style.display = "block";
  goResult();
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goLoading();
    return;
  }

  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}
function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.Animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.Animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

function btn() {
  var bttn = document.getElementById("bttn");
  console.log(bttn.style.display);
  if (!bttn.style.display) {
    bttn.style.display = "block";
  } else if (bttn.style.display == "none") {
    bttn.style.display = "block";
  } else {
    bttn.style.display = "none";
  }
}
<!--카카오톡 공유하기 start2-->
  Kakao.Share.createDefaultButton({
  container: "#kakaotalk-sharing-btn",
  objectType: "feed",
  content: {
  title: resultName,
  description: langInfo,
  imageUrl:
  "https://psy-project.netlify.app/img/kakao_image.png",
  link: {
  // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
  mobileWebUrl: "https://psy-project.netlify.app",
  webUrl: "https://psy-project.netlify.app",
},
},
  social: {
  likeCount: 286,
  commentCount: 45,
  sharedCount: 845,
},
  buttons: [
{
  title: "웹으로 보기",
  link: {
  mobileWebUrl: "https://psy-project.netlify.app",
  webUrl: "https://psy-project.netlify.app",
},
},
{
  title: "앱으로 보기",
  link: {
  mobileWebUrl: "https://psy-project.netlify.app",
  webUrl: "https://psy-project.netlify.app",
},
},
  ],
});

<!--카카오톡 공유하기 end2-->
