import html from "../assets/images/html5.png";
import Beethoven from "../assets/images/Beethoven.jpg";
import Olympic_rings_with_transparent_rims from "../assets/images/Olympic_rings_with_transparent_rims.svg.png";
import ML from "../assets/images/1_k5LiTi5lt_ND02kaBT_SAA.jpeg";
import p1_Soc from "../assets/images/p1_Soc.jpg";
import phy from "../assets/images/223AC33F5592829D20.jpeg";

const study = [
  {
    id: 0,
    title: "학술정보웹사이트구축론",
    tags: ["문과대학", "문헌정보학", "선택교양"],
    oh: false,
    teachers: [
      {
        name: "김수연",
        roll: "교수",
        contact: "suyeon@yonsei.ac.kr",
      },
      {
        name: "박서정",
        roll: "조교",
        contact: "park9511@yonsei.ac.kr",
      },
    ],
    img: html,
    time: ["월3", "월4", "수3"],
  },
  {
    id: 1,
    title: "MACHINE LEARNING",
    tags: ["공과대학", "컴퓨터과학", "전공선택"],
    oh: true,
    teachers: [
      {
        name: "박노성",
        roll: "교수",
        contact: "noseong@yonsei.ac.kr",
      },
      {
        name: "이정호",
        roll: "조교",
        contact: "jh@yonsei.ac.kr",
      },
      {
        name: "최진우",
        roll: "조교",
        contact: "hjw@yonsei.ac.kr",
      },
    ],
    img: ML,
    time: ["화1", "화2", "목1"],
  },
  {
    id: 2,
    title: "음악사",
    tags: ["음악대학", "작곡과", "선택교양"],
    oh: false,
    teachers: [
      {
        name: "지형주",
        roll: "교수",
        contact: "example@yonsei.ac.kr",
      },
    ],
    img: Beethoven,
    time: ["월1", "월2", "수1"],
  },
  {
    id: 3,
    title: "UT세미나(스포츠멘탈트레이닝)",
    tags: ["교육과학대학", "체육대학", "선택교양"],
    oh: false,
    teachers: [
      {
        name: "박상훈",
        roll: "교수",
        contact: "shoon@yonsei.ac.kr",
      },
    ],
    img: Olympic_rings_with_transparent_rims,
    time: ["수7", "금4", "금5"],
  },
  {
    id: 4,
    title: "현대사회와사회학",
    tags: ["사회과학대학", "사회학", "필수교양"],
    oh: false,
    teachers: [
      {
        name: "조선미",
        roll: "교수",
        contact: "sunmicho@yonsei.ac.kr",
      },
    ],
    img: p1_Soc,
    time: ["금1", "금2", "수8"],
  },
  {
    id: 5,
    title: "현대사회와심리학",
    tags: ["문과대학", "심리학", "필수교양"],
    oh: false,
    teachers: [
      {
        name: "윤소연",
        roll: "교수",
        contact: "so@yonsei.ac.kr",
      },
    ],
    img: phy,
    time: ["금1", "금2", "수8"],
  },
];

export default study;
